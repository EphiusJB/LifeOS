import Navbar from "@/components/navbar";
import { BookOpen } from 'lucide-react';
import { Zap, TrendingUp, Flame, MoveRight } from 'lucide-react';
import GoalsMain from "./goals-main";

export const metadata = {
    title: "Goals"
};

export default function Goals(){
    return(
        <div className="flex h-screen">
            <Navbar/>
            <GoalsMain />
        </div>
    );
}