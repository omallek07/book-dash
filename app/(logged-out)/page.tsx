import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { BookHeartIcon } from 'lucide-react';

export default function LandingPage() {
  return (
    <>
      <h1 className='flex gap-2'>
        <BookHeartIcon size={50} className='text-pink-500' />
        BookDash
      </h1>
      <p>The best dashboard to manage all your books in one place.</p>
      <div className='flex gap-2 items-center'>
        <Button asChild>
          <Link href='/login'>Log in</Link>
        </Button>
        <small>or</small>
        <Button asChild variant='outline'>
          <Link href='/sign-up'>Sign up</Link>
        </Button>
      </div>
    </>
  );
}
