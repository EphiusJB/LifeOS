import Navbar from '@/components/navbar.js';
import { BookOpen } from 'lucide-react';
import { Zap, TrendingUp, Flame, MoveRight } from 'lucide-react';

export default function Dashboard(){
  return(
    <div className='flex justify-between h-screen'>
      <Navbar/>
      <div className='w-full h-full'>
        <section className='mt-6 mb-5 w-9/10 mx-auto'>
          <div className='text-3xl font-bold mb-2'>Welcome back!</div>
          <div className='text-sm text-foreground/50'>Here's your life at a glance.</div>
        </section>

        <section className='flex justify-between w-9/10 mx-auto h-1/5 mb-6'>
          <article className='border border-border bg-card rounded-lg w-1/4 me-4 h-full'>
            <div className='flex h-1/2 items-center justify-center gap-46'>
              <div className='text-sm text-foreground/50'>Level</div>
              <div className='flex rounded-lg items-center justify-center bg-ring/20 text-ring h-2/5 aspect-square'>
                <Zap className='h-1/2'/>
              </div>
            </div>
            <div className='flex h-1/2 ms-7 font-bold text-xl items-center'>1</div>
          </article>
          <article className='border border-border bg-card rounded-lg w-1/4 me-4 h-full'>
            <div className='flex h-1/2 items-center justify-center gap-45'>
              <div className='text-sm text-foreground/50'>Total XP</div>
              <div className='flex rounded-lg items-center justify-center bg-accent/20 text-accent h-2/5 aspect-square'>
                <TrendingUp className='h-1/2'/>
              </div>
            </div>
            <div className='flex h-1/2 ms-6 font-bold text-xl items-center'>0</div>
          </article>
          <article className='border border-border bg-card rounded-lg w-1/4 me-4 h-full'>
            <div className='flex h-1/2 items-center justify-center gap-35'>
              <div className='text-sm text-foreground/50'>Current Streak</div>
              <div className='flex rounded-lg items-center justify-center bg-destructive/20 h-2/5 text-destructive aspect-square'>
                <Flame className=' h-1/2'/>
              </div>
            </div>
            <div className='flex h-1/2 ms-6 font-bold text-xl items-center'>0 days</div>
          </article>
          <article className='border border-border bg-card rounded-lg w-1/4 h-full'>
            <div className='flex h-1/2 items-center justify-center gap-30'>
              <div className='text-sm text-foreground/50'>Goals Completed</div>
              <div className='flex rounded-lg items-center justify-center bg-ring/30 text-ring h-2/5 aspect-square'>
                <TrendingUp className='h-1/2'/>
              </div>
            </div>
            <div className='flex h-1/2 ms-6 font-bold text-xl items-center'>0</div>
          </article>
        </section>

        <section className='flex justify-between w-9/10 h-2/5 mx-auto mb-6'>
          <article className='border border-border bg-card rounded-lg w-2/3 me-5 h-full'>
            <div className='flex justify-between items-center h-1/4'>
              <div className='text-sm font-semibold ms-6'>Active Goals</div>
              <div className='text-ring text-sm me-6'>View all</div>
            </div>
            <div className="text-sm text-foreground/50 ps-6 h-3/4">
              No active goals. Start by creating one!
            </div>
          </article>
          <article className='flex flex-col border border-border bg-card rounded-lg justify-center items-center text-xs gap-4 w-1/3'>
            <div className='text-sm font-semibold w-4/5'>Financial Overview</div>
            <div className='flex flex-col w-4/5 gap-1'>
              <div className='text-foreground/50'>Total Income</div>
              <div className='text-ring text-lg font-bold'>$0.00</div>
            </div>
            <div className='flex flex-col w-4/5 gap-1'>
              <div className='text-foreground/50'>Total Expenses</div>
              <div className='text-destructive text-lg font-bold'>$0.00</div>
            </div>
            <div className='flex flex-col w-4/5 gap-1'>
              <div className='text-foreground/50'>Net</div>
              <div className='text-ring text-lg font-bold'>$0.00</div>
            </div>
            <div className='flex text-ring items-center gap-2 w-4/5'>
              <div>View details</div>
              <MoveRight className='size-2'/>
            </div>
          </article>
        </section>

        <section className='w-9/10 h-1/5 mx-auto'>
          <article className='flex flex-col items-center w-full h-full border border-border bg-card rounded-lg'>
            <div className='flex px-6 justify-between items-center h-1/2 w-full'>
              <div className='flex gap-2'>
                <BookOpen />
                <div className='font-semibold'>Recent Journal Entries</div>
              </div>
              <div className='text-ring text-sm'>View all</div>
            </div>
            <div className='flex text-sm text-foreground/50 w-full items-center ps-6 h-1/2'>
              No journal entries yet. Start reflecting!
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}