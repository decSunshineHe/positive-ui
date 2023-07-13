import { useEffect } from 'react';

export function useCurrent() {
  useEffect(() => {
    console.log('测试一下demo4');
  }, []);

  return '小何的测试用户4';
}
