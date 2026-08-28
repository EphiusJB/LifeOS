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
                        className='flex flex-col bg-black w-1/4 h-2/3 border border-ring rounded justify-center items-center gap-4'
                        >
                        <div className='flex w-full h-1/11 justify-between'>
                            <h2 className="flex text-sm font-semibold items-end ps-4">New Journal Entry</h2>
                            <button
                                className='flex items-start pb-1 pe-2 mt-1' 
                                onClick={() => setIsOpen(false)}>
                                <X className='size-4'/>
                            </button>
                        </div>
                        <div className='flex flex-col gap-1 text-xs h-1/6 w-9/10'>
                            <label for='journal-entry-title'><h3>Title</h3></label>
                            <input name='journal-entry-title' type='e.g. My first day of coding' placeholder='Expense' className='border border-border rounded w-full h-2/3 ps-1'></input>
                        </div>
                        <div className='flex flex-col gap-1 text-xs h-1/3 w-9/10'>
                            <label for='journal-entry-content'><h3>Content</h3></label>
                            <textarea name='journal-entry-content' rows={4} cols={40} placeholder='Write your thoughts here...' className='border border-border rounded w-full h-2/3 ps-1'></textarea>
                        </div>
                        <div className='flex flex-col gap-1 text-xs h-1/6 w-9/10'>
                            <label for='journal-entry-mood'><h3>Mood (Optional)</h3></label>
                            <select name='journal-entry-mood' defaultValue={''} className='border border-border rounded w-full h-2/3 ps-1'>
                                <option className='border border-border' value={'Happy'}>Happy</option>
                                <option value={'Sad'}>Sad</option>
                                <option value={'Excited'}>Excited</option>
                                <option value={'Meh'}>Meh</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-1 text-xs h-1/6 w-9/10'>
                            <label for='journal-entry-tag'><h3>Tags</h3></label>
                            <input name='journal-entry-tag' type='text' placeholder='e.g. Monthly salary' className='border border-border rounded w-full h-full ps-1'></input>
                        </div>
                        <div className='flex justify-end text-xs gap-3 my-3 pe-4 w-full'>
                            <button className='border border-border transition-colors hover:border-ring rounded py-1 px-2'>Cancel</button>
                            <button 
                                className='flex justify-center items-center text-black font-semibold bg-ring transition-colors hover:bg-ring/90 rounded-sm h-full py-2 px-1 w-1/3'
                                onClick={() => setIsOpen(true)}>
                                Add Transaction
                            </button>
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