import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import BookStats from './components/books-stats';

export default function DashboardPage() {
  return (
    <Tabs defaultValue='all-books'>
      <TabsList className='mb-4'>
        <TabsTrigger value='all-books'>All Books</TabsTrigger>
        <TabsTrigger value='my-books'>My Books</TabsTrigger>
      </TabsList>
      <TabsContent value='all-books'>
        <BookStats />
      </TabsContent>
      <TabsContent value='my-books'>
        <div>
          <h2>My Books</h2>
        </div>
      </TabsContent>
    </Tabs>
  );
}
