import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Pay',
  description: 'Effortless cross-border, zero-knowledge transfers',
};

export default function PayLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
