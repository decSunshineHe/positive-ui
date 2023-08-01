---
title: 租户切换
order: 1
---

## 代码演示

### 基本使用

:::info{title=切换租户}
切换租户后会重载页面，以便获取当前租户的相关数据
:::

```tsx
import { SwitchStaff } from '@positive-map/rc-components';

export default () => {
  return (
    <div style={{ backgroundColor: '#1b1b1b', padding: '0 20px' }}>
      <SwitchStaff
        onChange={(state, val) => {
          console.log('状态', state);
          console.log('值', val);
        }}
      />
    </div>
  );
};
```

### 设置切换

## API

### Properties

| 参数         | 说明             | 类型            | 默认值 | 版本  |
| :----------- | :--------------- | :-------------- | :----- | :---- |
| showSwitch   | 是否支持切换     | `boolean`       | true   | 0.0.1 |
| overlayStyle | 菜单根元素的样式 | `CSSProperties` | -      | 0.0.1 |

### Events

| 事件     | 说明           | 类型                                                    | 默认值 | 版本  |
| :------- | :------------- | :------------------------------------------------------ | :----- | :---- |
| onChange | 切换租户的回调 | `function` (state: boolean, staff: [StaffProps] => void | -      | 0.0.1 |

### StaffProps

| 属性字段         | 说明       | 类型     |
| :--------------- | :--------- | :------- |
| customerName     | 用户名称   | `string` |
| customerFullName | 用户全称   | `string` |
| id               | id         | `number` |
| muid             | 用户 muid  | `string` |
| staffCode        | staff 编码 | `string` |
| tenantMcid       | 租户 mcid  | `string` |
| tenantName       | 租户名称   | `string` |
| customerMcid     | 用户 mcid  | `string` |
