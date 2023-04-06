import React, { FC } from 'react';
import { ConfigProvider, Dropdown, Space, theme } from 'antd';
import styles from './index.module.scss';
import Icon from '@ant-design/icons';
import CustomerSvg from './CustomerSvg';

export interface SwitchStaffProps {
  /**
   * 当前租户名称
   */
  tenantName?: string;
  /**
   *  租户列表
   * */
  tenantList?: Array<{ tenantName: string; tenantId: string }>;
  /**
   * 切换租户
   * */
  onChange?: (tenantId: string) => void;
}

const SwitchStaff: FC<SwitchStaffProps> = (props: SwitchStaffProps) => {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <Space align="center">
        <Icon component={CustomerSvg} className={styles.customerSvg} />
        <div className={styles.tenantName}>小小何的测试租户</div>
        <Dropdown
          overlayClassName={styles.overlay}
          autoFocus
          autoAdjustOverflow={false}
          placement="bottomRight"
          destroyPopupOnHide
          arrow
          menu={{
            items: [
              { key: '1', label: '小何的测试租户' },
              { key: '2', label: '小冒的测试租户' },
            ],

            selectable: true,
            selectedKeys: ['1'],
            onClick: ({ key }) => {
              console.log('点击', key);
            },
          }}
          trigger={['click']}
        >
          <span className={styles.switchTenant}>切换</span>
        </Dropdown>
      </Space>
    </ConfigProvider>
  );
};

export default SwitchStaff;
