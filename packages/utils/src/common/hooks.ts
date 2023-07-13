import { useEffect } from 'react';

export function useCurrent() {
  useEffect(() => {
    console.log('测试一下demo3');
  }, []);

  return '小何的测试用户12';
}
