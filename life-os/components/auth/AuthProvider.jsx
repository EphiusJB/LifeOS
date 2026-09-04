'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/lib/store/AuthStore';

export default function AuthProvider({ children }) {
   const initialize = useAuthStore((s) => s.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return <>{children}</>;
}