"use client";

import { TrendingUp, TrendingDown, Plus, X, Search} from 'lucide-react';
import { useState } from "react";

export default function JournalMain(){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className='w-full h-full'>
            <section className='flex justify-between items-center mt-6 mb-5 w-9/10 mx-auto'>
                <div>
                    <div className='text-3xl font-bold mb-2'>Journal</div>
                    <div className='text-sm text-foreground/50'>{0} entries recorded</div>
                </div>
                <button 
                    className='flex justify-center items-center gap-2 text text-sm text-black font-semibold bg-ring transition-colors hover:bg-ring/90 rounded-sm h-1/2 py-2 px-1 w-1/8'
                    onClick={() => setIsOpen(true)}>
                    <Plus className='size-4 [&>path]:stroke-[3]'/>
                    New Entry
                </button>
            </section>

            {isOpen && 
                <div 
                    onClick={() => {setIsOpen(false)}} 
                    className="flex justify-center absolute w-full h-full inset-0 bg-black/50"
                    >
                    <form 
                        onClick={(e) => e.stopPropagation()}
                        className='flex flex-col bg-black w-1/4 h-1/2 border border-ring rounded justify-center items-center gap-5'
                        >
                        <div className='flex w-9/10 h-1/11 justify-between'>
                            <h2 className="flex text-sm font-semibold items-end">Add Expense</h2>
                            <button
                                className='flex items-start pb-1' 
                                onClick={() => setIsOpen(false)}>
                                <X className='size-4'/>
                            </button>
                        </div>
                        <div className='text-xs w-9/10'>
                            <h3>Type</h3>
                            <button>Expense</button>
                        </div>
                        <div className='text-xs w-9/10'>
                            <h3>Amount ($)</h3>
                            <div>X</div>
                        </div>
                        <div className='text-xs w-9/10'>
                            <h3>Category</h3>
                            <div>X</div>
                        </div>
                        <div className='text-xs w-9/10'>
                            <h3>Description</h3>
                            <div>X</div>
                        </div>
                        <div className='text-xs w-9/10'>
                            <h3>Date</h3>
                            <div>X</div>
                        </div>
                        <div className='w-2/3'>
                            <button>Cancel</button>
                            <button>Add Transaction</button>
                        </div>
                    </form>
                </div>
            }

            <div className=' flex w-1/3 text-foreground/50 text-sm rounded-sm border border-border gap-2 p-2 ms-15 mt-10 mb-5'>
                <Search />
                Search entries...
            </div>

            <section className='w-9/10 h-1/5 mx-auto'>
                <article className='flex flex-col justify-center items-center w-full h-full border border-border bg-card rounded-lg'>
                    <div className='flex text-sm text-foreground/50 w-full items-center justify-center h-1/2'>
                        No journal entries yet. Start reflecting!
                    </div>
                    <button 
                        className='flex justify-center items-center gap-2 text text-xs text-black font-semibold bg-ring transition-colors hover:bg-ring/90 rounded-sm h-1/4 py-2 px-1 w-1/7'
                        onClick={() => setIsOpen(true)}>
                        Write your first entry
                    </button>
                </article>
            </section>
        </div>
    );
}