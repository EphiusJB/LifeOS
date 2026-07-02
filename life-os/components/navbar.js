import Link from 'next/link';
import { BarChart3, Target, BookOpen, CreditCard, Bell, Zap} from 'lucide-react';


export default function Navbar(){
    return(
        <div className="flex flex-col bg-card/50 pt-5 pb-4 border-x border-border items-center gap-5 h-full w-1/20">
            <div className="flex bg-primary text-secondary items-center justify-center w-7/10 aspect-square rounded-lg">
                <Zap />
            </div>
            <Link className="flex items-center justify-center w-7/10 aspect-square rounded-lg transition-colors hover:text-secondary hover:bg-primary" href="/">
                <BarChart3/>
            </Link>
            <Link className="flex items-center justify-center w-7/10 aspect-square rounded-lg transition-colors hover:text-secondary hover:bg-primary" href="goals">
                <Target />
            </Link>
            <Link className="flex items-center justify-center w-7/10 aspect-square rounded-lg transition-colors hover:text-secondary hover:bg-primary" href="journal">
                <BookOpen />
            </Link>
            <Link className="flex items-center justify-center w-7/10 aspect-square rounded-lg transition-colors hover:text-secondary hover:bg-primary" href="finance">
                <CreditCard />
            </Link>
            <div className="mt-auto">
                <Bell />
            </div>
        </div>
    );
}