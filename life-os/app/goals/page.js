import Navbar from "@/components/navbar";

export const metadata = {
    title: "Goals"
};

export default function Goals(){
    return(
        <div>
            <Navbar/>
            <section className='mt-6 mb-5 w-9/10 mx-auto'>
                <div className='text-3xl font-bold mb-2'>Goals</div>
                <div className='text-sm text-foreground/50'>${0} Goals tracked</div>
            </section>
        </div>
    );
}