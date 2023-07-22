import clsx from 'clsx';
import Link from 'next/link';

export type NavItemProps = {
  text: string;
  href: string;
  active?: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <div
        className={clsx([active ? 'font-bold text-yellow-500' : 'text-white'])}
      >
        {text}
      </div>
    </Link>
  );
};

export default NavItem;
