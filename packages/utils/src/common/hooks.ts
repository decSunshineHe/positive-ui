import { useEffect, useState } from 'react';

export function useCurrent() {
  useEffect(() => {
    console.log('测试一下');
  }, []);

  return '小何的测试用户';
}
