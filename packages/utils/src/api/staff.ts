import { Key } from 'react';
import request from '../common/request';

export interface StaffResponse {
  customerName: string;
  customerFullName: string;
  parentCustomerName: string;
  parentCustomerFullName: string;
  id: number;
  muid: string;
  staffCode: null | string;
  tenantName: string;
  customerMcid: string;
  tenantMcid: string;
  logoUrl?: string;
}

export const getStaffList = (muid: string) => request<StaffResponse[]>({ url: `/api/staff/list?muid=${muid}` });

export const checkStaff = (id: Key) => request<any>({ url: `/api/staff/check?id=${id}` });

export const switchStaff = (id: Key) => {
  request<void>({ url: `/api/staff/switch?staff_id=${id}`, method: 'PUT' });
};
