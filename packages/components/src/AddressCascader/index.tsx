import React, { FC } from 'react';
import { Cascader } from 'antd';
import data from './data.json';

export interface AddressCascaderProps {
  disabled?: boolean;
}

const fieldNames = {
  value: 'name',
  label: 'name',
  children: 'districts',
};

const AddressCascader: FC<AddressCascaderProps> = ({ disabled }) => {
  // 所在地区
  const areaChange = (value: any, selectedOptions: any) => {
    console.log(value, selectedOptions);
  };
  return (
    <Cascader
      style={{ width: 300 }}
      fieldNames={fieldNames}
      options={data}
      onChange={areaChange}
      placeholder="请选择"
      disabled={disabled}
    />
  );
};

export default AddressCascader;
