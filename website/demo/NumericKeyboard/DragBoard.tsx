import React from 'react';
import { NumericKeyboard } from '@positive-map/rc-components';
import { Input, Divider } from 'antd';

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
