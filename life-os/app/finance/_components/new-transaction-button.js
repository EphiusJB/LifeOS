"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function NewTransaction(){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div>
            <button 
                className='flex justify-center items-center gap-2 text text-sm text-black font-semibold bg-ring transition-colors hover:bg-ring/90 rounded-sm h-1/2 py-2 px-1 w-full'
                onClick={() => setIsOpen(true)}>
                <Plus className='size-4 [&>path]:stroke-[3]'/>
                New Transaction
            </button>
        </div>
    );
}