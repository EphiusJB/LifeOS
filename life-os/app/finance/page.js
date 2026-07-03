import Navbar from '@/components/navbar';
import { BookOpen } from 'lucide-react';
import { TrendingUp, TrendingDown, MoveRight } from 'lucide-react';

export const metadata = {
    title: "Finance"
};

export default function Finance(){
  return(
    <div className='flex justify-between h-screen'>
      <Navbar/>
      <div className='w-full h-full'>
        <section className='mt-6 mb-5 w-9/10 mx-auto'>
          <div className='text-3xl font-bold mb-2'>Finance</div>
          <div className='text-sm text-foreground/50'>Track your income and expenses</div>
        </section>

        <section className='flex justify-between w-9/10 mx-auto h-1/5 mb-6'>
          <article className='border border-border bg-card rounded-lg w-1/3 me-4 h-full'>
            <div className='flex h-1/2 items-center justify-between px-6'>
              <div className='text-sm text-foreground/50'>Total Income</div>
              <div className='flex rounded-lg items-center justify-center text-ring h-2/5 aspect-square'>
                <TrendingUp className='h-1/2'/>
              </div>
            </div>
            <div className='flex h-1/4 ms-6 font-bold text-2xl text-ring items-center'>$0.00</div>
            <div className='text-xs ps-6 text-foreground/50'>0 transactions</div>
          </article>
          <article className='border border-border bg-card rounded-lg w-1/3 me-4 h-full'>
            <div className='flex h-1/2 items-center justify-between px-6'>
              <div className='text-sm text-foreground/50'>Total Expenses</div>
              <div className='flex rounded-lg items-center justify-center h-2/5 text-destructive aspect-square'>
                <TrendingDown className=' h-1/2'/>
              </div>
            </div>
            <div className='flex h-1/4 ms-6 font-bold text-2xl text-destructive items-center'>$0.00</div>
            <div className='text-xs ps-6 text-foreground/50'>0 transactions</div>
          </article>
          <article className='border border-border bg-card rounded-lg w-1/3 h-full'>
            <div className='flex h-1/2 items-center ps-6'>
              <div className='text-sm text-foreground/50'>Net Balance</div>
            </div>
            <div className='flex h-1/4 ms-6 font-bold text-2xl text-ring items-center'>$0.00</div>
            <div className='text-xs ps-6 text-foreground/50'>Surplus</div>
          </article>
        </section>

        <section className='flex justify-between w-9/10 h-2/5 mx-auto mb-6'>
          <article className='border border-border bg-card rounded-lg w-2/3 me-5 h-full'>
            <div className='flex justify-between items-center h-1/4'>
              <div className='text-sm font-semibold ms-6'>Transaction History</div>
            </div>
            <div className="flex items-center justify-center text-sm text-foreground/50 ps-6 h-3/4">
              No transaction data to display
            </div>
          </article>
          <article className='flex flex-col border border-border bg-card rounded-lg justify-center items-center text-xs gap-2 w-1/3'>
            <div className='flex text-sm font-semibold h-1/4 w-4/5 items-center'>By Category</div>
            <div className='text-foreground/50 h-3/4 w-4/5'>No transactions yet</div>
          </article>
        </section>

        <section className='w-9/10 h-1/5 mx-auto'>
          <article className='flex flex-col items-center w-full h-full border border-border bg-card rounded-lg'>
            <div className='flex px-6 justify-between items-center h-1/3 w-full'>
                <div className='font-semibold'>Recent Transactions</div>
                <div className='flex justify-between w-1/7'>
                    <button className='text-foreground text-xs border border-border rounded w-1/4 h-1/2 py-1 transition-colors hover:bg-ring hover:text-black'>All</button>
                    <button className='text-foreground text-xs border border-border rounded w-1/3 h-1/2 py-1 transition-colors hover:bg-ring hover:text-black'>Income</button>
                    <button className='text-foreground text-xs border border-border rounded w-1/3 h-1/2 py-1 transition-colors hover:bg-ring hover:text-black'>Expense</button>
                </div>
            </div>
            <div className='flex text-sm text-foreground/50 w-full items-center justify-center ps-6 h-1/2'>
              No transactions found
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}