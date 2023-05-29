import { useEffect } from 'react';

export function useCurrent() {
  useEffect(() => {
    console.log('测试一下demo2');
  }, []);

  return '小何的测试用户';
}
