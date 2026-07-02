import Navbar from '@/components/navbar.js';

export default function Dashboard(){
  return(
    <div className="flex justify-between h-screen">
      <Navbar/>
      <div className="w-full h-full">
        <section className='mt-6 mb-5 w-9/10 mx-auto'>
          <div className='text-3xl font-bold mb-2'>Welcome back!</div>
          <div className='text-sm font-thin'>Here's your life at a glance.</div>
        </section>

        <section className='flex justify-between w-9/10 mx-auto h-1/5 mb-6'>
          <article className='border border-border bg-card rounded-lg w-1/4 me-4 h-full'></article>
          <article className='border border-border bg-card rounded-lg w-1/4 me-4 h-full'></article>
          <article className='border border-border bg-card rounded-lg w-1/4 me-4 h-full'></article>
          <article className='border border-border bg-card rounded-lg w-1/4 h-full'></article>
        </section>

        <section className='flex justify-between w-9/10 h-2/5 mx-auto mb-6'>
          <article className='border border-border bg-card rounded-lg w-2/3 me-5 h-full'></article>
          <article className='border border-border bg-card rounded-lg w-1/3'></article>
        </section>

        <section className='w-9/10 h-1/5 mx-auto'>
          <article className='w-full h-full border border-border bg-card rounded-lg'></article>
        </section>
        <section className='w-full'></section>
      </div>
    </div>
  );
}