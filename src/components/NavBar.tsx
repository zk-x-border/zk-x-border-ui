'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import NavItem from './NavItem';

import EasternUnionLogo from '~/svg/EasternUnionLogo.svg';

const MENU_LIST = [
  { text: 'Pay', href: '/pay' },
  { text: 'Status', href: '/status' },
  { text: 'Trade', href: '/trade' },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className='sticky top-0 z-50 bg-transparent'>
      <nav className='layout flex w-full flex-1 items-center px-4'>
        <Link href='/'>
          <EasternUnionLogo className='w-48' />
        </Link>
        <div className='right-0 flex w-full flex-1 items-center justify-end space-x-8'>
          {MENU_LIST.map((menu) => (
            <div key={menu.text}>
              <NavItem active={pathname === menu.href} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
