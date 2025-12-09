import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import {
  BookIcon,
  BookDownIcon,
  BookUpIcon,
  UserIcon,
  BookHeartIcon,
} from 'lucide-react';
import Link from 'next/link';
import ReadBookTrends from './read-books-trends';

export default function BookStats() {
  const totalBooks = 100;
  const BooksRead = 70;
  const booksReadPercentage = (BooksRead / totalBooks) * 100;

  return (
    <>
      <div className='grid lg:grid-cols-3 gap-4'>
        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base'>Total books</CardTitle>
          </CardHeader>
          <CardContent className='flex justify-between items-center'>
            <div className='flex gap-2'>
              <UserIcon size={24} />
              <div className='text-5xl font-bold'>{totalBooks}</div>
            </div>
            <div>
              <Button size='xs' asChild>
                <Link href='dashboard/books'>View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base'>Completed books</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex gap-2'>
              {booksReadPercentage > 75 ? (
                <BookUpIcon />
              ) : booksReadPercentage > 50 ? (
                <BookIcon />
              ) : (
                <BookDownIcon />
              )}
              <div className='text-5xl font-bold'>
                {BooksRead} out of {totalBooks}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            {booksReadPercentage > 75 ? (
              <span className='text-xs text-green-500 flex gap-1 items-center'>
                <BookUpIcon />
                {booksReadPercentage.toFixed(2)}% completed
              </span>
            ) : booksReadPercentage > 50 ? (
              <span className='text-xs text-yellow-500 flex gap-1 items-center'>
                <BookIcon />
                Only {booksReadPercentage.toFixed(2)}% completed
              </span>
            ) : (
              <span className='text-xs text-red-500 flex gap-1 items-center'>
                <BookDownIcon />
                Just {booksReadPercentage.toFixed(2)}% completed
              </span>
            )}
          </CardFooter>
        </Card>

        <Card className='border-pink-500 flex flex-col'>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base'>Book of the month</CardTitle>
          </CardHeader>
          <CardContent className='flex-col gap-2 items-center'>
            <div>
              <span className='text-2xl'>East of Eden</span>
            </div>
            <div>
              <span className='text-xs text-muted-foreground'>
                by John Steinbeck
              </span>
            </div>
          </CardContent>
          <CardFooter className='flex gap-2 items-center text-muted-foreground mt-auto'>
            <span className='text-xs text-pink-500 flex gap-1 items-center'>
              <BookIcon />
              Recommended for you
            </span>
          </CardFooter>
        </Card>
      </div>
      <Card className='my-4'>
        <CardHeader>
          <CardTitle className='text-lg flex items-center gap-2'>
            <BookHeartIcon />
            <span>Books read per month</span>
          </CardTitle>
        </CardHeader>
        <CardContent className='pl-0'>
          <ReadBookTrends />
        </CardContent>
      </Card>
    </>
  );
}
