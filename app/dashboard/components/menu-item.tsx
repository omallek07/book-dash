'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function MenuItem({ href, children }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'block p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground',
        isActive &&
          'bg-primary hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground text-primary-foreground'
      )}
    >
      {children}
    </Link>
  );
}
