---
title: 数字键盘
order: 2
---

## 代码演示

### 基本使用

```tsx
import { NumericKeyboard } from '@positive-map/rc-components';
import { Divider, Input } from 'antd';

export default () => {
  return (
    <div style={{ height: 460, position: 'relative', display: 'flex' }}>
      <div style={{ width: 200 }}>
        <Input />
      </div>
      <Divider type="vertical" style={{ height: '100%' }} />
      <div className="App" style={{ height: '100%', width: 560 }}>
        <NumericKeyboard />
      </div>
    </div>
  );
};
```

### 默认展开

```tsx
import { NumericKeyboard } from '@positive-map/rc-components';
import { Divider, Input } from 'antd';

export default () => {
  return (
    <div style={{ height: 460, position: 'relative', display: 'flex' }}>
      <div style={{ width: 200 }}>
        <Input />
      </div>
      <Divider type="vertical" style={{ height: '100%' }} />
      <div className="App" style={{ height: '100%', width: 560 }}>
        <NumericKeyboard show={true} />
      </div>
    </div>
  );
};
```

## API

| 参数                 | 说明                     | 类型       | 默认值 | 版本  |
| :------------------- | :----------------------- | :--------- | :----- | ----- |
| show                 | 是否展示                 | `boolean`  | false  | 0.0.1 |
| integer              | 是否整数                 | `boolean`  | false  | 0.0.1 |
| dragWrapperClassName | 拖动区域的元素 className | `string`   | 'App'  | 0.0.1 |
| onClose              | 点击关闭按钮的回调       | `function` | -      | 0.0.1 |
| onChange             | 点击键盘数字按钮的回调   | `function` | -      | 0.0.1 |
