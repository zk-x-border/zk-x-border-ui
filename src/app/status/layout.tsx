import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Status',
  description: 'Status of zk-x-border transfers',
};

export default function StatusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
