import axios, { AxiosRequestConfig } from 'axios';
import { message } from 'antd';
import { Subject } from 'rxjs';

const httpStatusSubject = new Subject<number>();

declare module 'axios' {
  // noinspection JSUnusedGlobalSymbols
  export interface AxiosRequestConfig {
    onError?: (err: any) => void;
  }
}

const instance = axios.create({
  withCredentials: true,
});

const defaultErrorHandler = (err: any) => {
  const defaultMessage = err?.response?.data?.errorMessage || '未知错误！ 请联系管理员。';
  switch (err.response?.status) {
    case 400:
      message.error(defaultMessage);
      break;
    case 409:
      console.error(defaultMessage);
      break;
    case 410:
      console.error(defaultMessage);
      break;
    case 412:
      if (!/^\/select-staff/.test(window.location.pathname)) {
        window.location.assign(
          (window.SELECTSTAFFORIGIN ?? '') + '/select-staff?redirect=' + encodeURIComponent(window.location.href)
        );
      }
      return true;
    case 500:
      message.error(defaultMessage);
      break;
  }
};

instance.interceptors.response.use(
  res => {
    httpStatusSubject.next(res.status);
    return res.data;
  },
  err => {
    httpStatusSubject.next(err.response?.status);
    const errorHandler = err.config?.onError || defaultErrorHandler;
    errorHandler(err);
    return Promise.reject(err);
  }
);

const request = <T>(cfg: AxiosRequestConfig) => instance.request<T>(cfg);

export default request;
