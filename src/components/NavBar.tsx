import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import NavItem from './NavItem';

import Logo from '~/svg/Logo.svg';

const MENU_LIST = [
  { text: 'Home', href: '/' },
  { text: 'Pay', href: '/pay' },
  { text: 'Status', href: '/status' },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav className='layout flex w-full flex-1 items-center px-4'>
        <Link href='/'>
          <Logo className='w-16' />
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
