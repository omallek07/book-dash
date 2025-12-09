'use client';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

const bookData = [
  { month: 'Jan', booksRead: 2, pagesReadPerMonth: 150 },
  { month: 'Feb', booksRead: 3, pagesReadPerMonth: 200 },
  { month: 'Mar', booksRead: 5, pagesReadPerMonth: 300 },
  { month: 'Apr', booksRead: 4, pagesReadPerMonth: 250 },
  { month: 'May', booksRead: 6, pagesReadPerMonth: 400 },
  { month: 'Jun', booksRead: 4, pagesReadPerMonth: 350 },
  { month: 'Jul', booksRead: 5, pagesReadPerMonth: 300 },
  { month: 'Aug', booksRead: 8, pagesReadPerMonth: 450 },
  { month: 'Sep', booksRead: 6, pagesReadPerMonth: 400 },
  { month: 'Oct', booksRead: 1, pagesReadPerMonth: 100 },
  { month: 'Nov', booksRead: 3, pagesReadPerMonth: 200 },
  { month: 'Dec', booksRead: 2, pagesReadPerMonth: 150 },
];

export default function ReadBookTrends() {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <BarChart
        data={bookData}
        className='[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800'
      >
        <XAxis dataKey='month' stroke='#888888' fontSize={12} />
        <YAxis stroke='#888888' fontSize={12} />
        <Tooltip
          separator=': '
          formatter={(value: number, name: string) => {
            if (name === 'booksRead') return [`${value} books`, 'Books'];
            if (name === 'pagesReadPerMonth')
              return [`${value} pages`, 'Pages Read'];
            return [value, name];
          }}
          wrapperClassName='dark:!bg-black rounded-md dark:!border-border'
        />
        <Legend
          iconType='circle'
          formatter={(value) => {
            if (value === 'booksRead')
              return <div className='text-sm'>Books Read</div>;
            if (value === 'pagesReadPerMonth')
              return <div className='text-sm'>Pages Read Per Month</div>;
            return value;
          }}
        />
        <Bar dataKey='booksRead' stackId={1} fill='#ec4899' />
        <Bar
          dataKey='pagesReadPerMonth'
          stackId={1}
          fill='#6b7280'
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
