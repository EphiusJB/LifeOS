import Navbar from '@/components/navbar';
import JournalMain from './journal-main';

export const metadata = {
    title: "Journal"
};

export default function Journal(){
    return(
        <div className="flex h-screen justify-between">
            <Navbar/>
            <JournalMain />
        </div>
    );
}