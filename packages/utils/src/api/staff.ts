import { Key } from 'react';
import { fetch } from '../common/request';

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

export function getStaffList(muid: string): Promise<StaffResponse[]> {
  return fetch(`/api/staff/list?muid=${muid}`);
}

export function checkStaff(id: Key): Promise<any> {
  return fetch(`/api/staff/check?id=${id}`);
}

export function switchStaff(id: Key): Promise<void> {
  return fetch(`/api/staff/switch?staff_id=${id}`, {
    method: 'PUT',
  });
}
