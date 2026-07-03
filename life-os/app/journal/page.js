import Navbar from '@/components/navbar';

export const metadata = {
    title: "Journal"
};

export default function Journal(){
    return(
        <div className="flex h-screen justify-between">
            <Navbar/>
            <section className='mt-6 mb-5 w-9/10 mx-auto'>
                <div className='text-3xl font-bold mb-2'>Journal</div>
                <div className='text-sm text-foreground/50'>${0} entries recorded</div>
            </section>
        </div>
    );
}