import Link from 'next/link';
import { BarChart3, Target, BookOpen, CreditCard, Bell, Zap} from 'lucide-react';


export default function Navbar(){
    return(
        <div className="flex flex-col bg-card/50 pt-5 pb-4 border-x border-border items-center gap-5 h-full w-1/22">
            <div className="flex bg-primary text-secondary items-center justify-center w-7/10 aspect-square rounded-lg">
                <Zap className='size-4'/>
            </div>
            <Link className="flex items-center justify-center w-7/10 aspect-square rounded-lg transition-colors hover:text-secondary hover:bg-primary" href="/">
                <BarChart3 className='size-4'/>
            </Link>
            <Link className="flex items-center justify-center w-7/10 aspect-square rounded-lg transition-colors hover:text-secondary hover:bg-primary" href="goals">
                <Target className='size-4'/>
            </Link>
            <Link className="flex items-center justify-center w-7/10 aspect-square rounded-lg transition-colors hover:text-secondary hover:bg-primary" href="journal">
                <BookOpen className='size-4'/>
            </Link>
            <Link className="flex items-center justify-center w-7/10 aspect-square rounded-lg transition-colors hover:text-secondary hover:bg-primary" href="finance">
                <CreditCard className='size-4'/>
            </Link>
            <div className="flex mt-auto text-sm text-black font-semibold bg-muted rounded-lg w-4/5 items-center justify-center aspect-square">
                <div className='flex bg-ring rounded items-center justify-center aspect-square w-2/3'>KC</div>
            </div>
        </div>
    );
}