"use client";

import { TrendingUp, TrendingDown, Plus, X } from 'lucide-react';
import { useState } from "react";

export default function FinanceMain(){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className='w-full h-full'>
            <section className='flex justify-between items-center mt-6 mb-5 w-9/10 mx-auto'>
                <div>
                    <div className='text-3xl font-bold mb-2'>Finance</div>
                    <div className='text-sm text-foreground/50'>Track your income and expenses</div>
                </div>
                <button 
                    className='flex justify-center items-center gap-2 text text-sm text-black font-semibold bg-ring transition-colors hover:bg-ring/90 rounded-sm h-1/2 py-2 px-1 w-1/8'
                    onClick={() => setIsOpen(true)}>
                    <Plus className='size-4 [&>path]:stroke-[3]'/>
                    New Transaction
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
                            <h3>Amount (K)</h3>
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

            <section className='flex justify-between w-9/10 mx-auto h-1/5 mb-6'>
                <article className='border border-border bg-card rounded-lg w-1/3 me-4 h-full'>
                <div className='flex h-1/2 items-center justify-between px-6'>
                <div className='text-sm text-foreground/50'>Total Income</div>
                <div className='flex rounded-lg items-center justify-center text-ring h-2/5 aspect-square'>
                    <TrendingUp className='h-1/2'/>
                </div>
                </div>
                <div className='flex h-1/4 ms-6 font-bold text-2xl text-ring items-center'>K0.00</div>
                <div className='text-xs ps-6 text-foreground/50'>0 transactions</div>
                </article>
                <article className='border border-border bg-card rounded-lg w-1/3 me-4 h-full'>
                <div className='flex h-1/2 items-center justify-between px-6'>
                <div className='text-sm text-foreground/50'>Total Expenses</div>
                <div className='flex rounded-lg items-center justify-center h-2/5 text-destructive aspect-square'>
                    <TrendingDown className=' h-1/2'/>
                </div>
                </div>
                <div className='flex h-1/4 ms-6 font-bold text-2xl text-destructive items-center'>K0.00</div>
                <div className='text-xs ps-6 text-foreground/50'>0 transactions</div>
                </article>
                <article className='border border-border bg-card rounded-lg w-1/3 h-full'>
                <div className='flex h-1/2 items-center ps-6'>
                <div className='text-sm text-foreground/50'>Net Balance</div>
                </div>
                <div className='flex h-1/4 ms-6 font-bold text-2xl text-ring items-center'>K0.00</div>
                <div className='text-xs ps-6 text-foreground/50'>Surplus</div>
                </article>
            </section>

            <section className='flex justify-between w-9/10 h-2/5 mx-auto mb-6'>
                <article className='border border-border bg-card rounded-lg w-2/3 me-5 h-full'>
                    <div className='flex justify-between items-center h-1/4'>
                    <div className='text-sm font-semibold ms-6'>Transaction History</div>
                    </div>
                    <div className="flex items-center justify-center text-sm text-foreground/50 ps-6 h-3/4">
                    No transaction data to display
                    </div>
                </article>
                <article className='flex flex-col border border-border bg-card rounded-lg justify-center items-center text-xs gap-2 w-1/3'>
                    <div className='flex text-sm font-semibold h-1/4 w-4/5 items-center'>By Category</div>
                    <div className='text-foreground/50 h-3/4 w-4/5'>No transactions yet</div>
                </article>
            </section>

            <section className='w-9/10 h-1/5 mx-auto'>
                <article className='flex flex-col items-center w-full h-full border border-border bg-card rounded-lg'>
                    <div className='flex px-6 justify-between items-center h-1/3 w-full'>
                        <div className='font-semibold'>Recent Transactions</div>
                        <div className='flex justify-between w-1/7'>
                            <button className='text-foreground text-xs border border-border rounded w-1/4 h-1/2 py-1 transition-colors hover:bg-ring hover:text-black'>All</button>
                            <button className='text-foreground text-xs border border-border rounded w-1/3 h-1/2 py-1 transition-colors hover:bg-ring hover:text-black'>Income</button>
                            <button className='text-foreground text-xs border border-border rounded w-1/3 h-1/2 py-1 transition-colors hover:bg-ring hover:text-black'>Expense</button>
                        </div>
                    </div>
                    <div className='flex text-sm text-foreground/50 w-full items-center justify-center ps-6 h-1/2'>
                    No transactions found
                    </div>
                </article>
            </section>
        </div>
    );
}