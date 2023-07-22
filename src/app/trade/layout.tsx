import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Trade',
  description: 'On-ramp to crypto',
};

export default function TradeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
