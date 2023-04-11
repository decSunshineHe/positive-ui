import React, { useState, useEffect, useRef } from 'react';
import styles from './index.module.scss';
import { CaretDownFilled, CloseCircleOutlined, DragOutlined } from '@ant-design/icons';
import { Rnd } from 'react-rnd';

interface KeyboardProps {
  show?: boolean;
  integer?: boolean;
  dragWrapperClassName?: string;
  onClose?: () => void;
  onChange?: (input: string) => void;
}

interface Position {
  x: number;
  y: number;
}
type Timer = NodeJS.Timeout | undefined;

const NumericKeyboard: React.FC<KeyboardProps> = ({
  show = false,
  onChange,
  integer = false,
  onClose,
  dragWrapperClassName = 'App',
}) => {
  const [visible, setVisible] = useState<boolean>(true);
  // 光标插入位置
  const [caretPosition, setCaretPosition] = useState<number | null | undefined>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [inputDom, setInputDom] = useState<any>();
  const timer = useRef<Timer>();

  useEffect(() => {
    setVisible(show ?? false);
  }, [show]);

  // 将input元素的事件委托到上层统一监听11
  useEffect(() => {
    const overallClick = (e: any) => {
      if (e.target.tagName === 'INPUT' && e.target.type === 'text' && (!inputDom || e.target.id !== inputDom.id)) {
        setVisible(true);
        const inputDom = e.target;
        setInputDom(inputDom);
      }
    };
    document.addEventListener('click', overallClick);

    return () => document?.removeEventListener('click', overallClick);
  });

  // 监听当前操作的Input元素的click事件，目的是处理光标位置
  useEffect(() => {
    const inputDomClick = (e: any) => {
      setCaretPosition(e.target?.selectionStart);
    };
    inputDom?.addEventListener('click', inputDomClick);
    return () => {
      inputDom?.removeEventListener('click', inputDomClick);
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [inputDom]);

  // 更新input框的光标位置
  const updateCaretPos = (index: number) => {
    setCaretPosition(index);
    inputDom?.focus();
    timer.current = setTimeout(() => {
      inputDom?.setSelectionRange(index, index);
    }, 0);
  };

  // 键盘键入
  const getUpdatedInput = (button: string) => {
    let output = inputDom?.value || '';
    if (button === '{bksp}') {
      output = removeAt(output);
    } else if (button === '{numspot}') {
      if (integer) return;
      if (output.includes('.')) return;
      output = addStringAt(output, '.');
    } else {
      output = addStringAt(output, button);
    }

    if (inputDom) {
      inputDom.value = output;
      const event = new Event('input', { bubbles: true });
      // hack React15
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      event.simulated = true;
      // hack React16 内部定义了descriptor拦截value
      const tracker = inputDom._valueTracker;
      if (tracker) {
        tracker.setValue(inputDom);
      }
      inputDom.dispatchEvent(event);
    }

    onChange?.(output);
  };

  const removeAt = (source: string) => {
    const position = caretPosition ?? source.length;
    if (!position || position === 0) {
      return source;
    }
    const output = source.substr(0, position - 1) + source.substr(position);
    updateCaretPos(position - 1);
    return output;
  };

  const addStringAt = (source: string, str: string) => {
    const position = caretPosition ?? source.length;
    let output;

    if (!position && position !== 0) {
      output = source + str;
    } else {
      output = [source.slice(0, position), str, source.slice(position)].join('');
    }
    updateCaretPos(position + str.length);
    return output;
  };

  return (
    <Rnd
      style={{ visibility: visible ? 'visible' : 'hidden' }}
      className={styles.boardWrapper}
      size={{ width: 210, height: 330 }}
      position={position}
      onDragStop={(_, d) => {
        setPosition({ x: d.x, y: d.y });
      }}
      bounds={`.${dragWrapperClassName}`}
      dragHandleClassName="drag-icon"
      enableResizing={false}
    >
      <div onMouseDown={e => e.preventDefault()}>
        <div className={styles.optHeader}>
          <div className={`${styles.optBtn} drag-icon`}>
            <DragOutlined />
          </div>
          <div
            onClick={() => {
              setVisible(false);
              setInputDom(null);
              onClose?.();
            }}
            className={styles.optBtn}
          >
            <CaretDownFilled />
          </div>
        </div>
        <div className={styles.numContent}>
          {[...new Array(9)].map((_, i) => {
            const num = String(i + 1);
            return (
              <div key={i} className={styles.numBtn} onClick={() => getUpdatedInput(num)}>
                {num}
              </div>
            );
          })}
        </div>
        <div className={styles.symbolFooter}>
          <div className={styles.symbolBtn} onClick={() => getUpdatedInput('{numspot}')}>
            .
          </div>
          <div className={styles.symbolBtn} onClick={() => getUpdatedInput('0')}>
            0
          </div>
          <div className={styles.clearBtn} onClick={() => getUpdatedInput('{bksp}')}>
            <CloseCircleOutlined />
          </div>
        </div>
      </div>
    </Rnd>
  );
};

export default NumericKeyboard;
