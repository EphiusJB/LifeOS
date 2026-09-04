export default function NewTransactionOverlay(){
    return(
        <div className="flex items-center justify-center fixed w-full h-full bg-black/50">
            <form className='flex flex-col bg-black w-1/2 h-1/2 border border-ring rounded items-center'>
                <h2 className="border border-white w-9/10">Add Expense</h2>
                <div>
                    <h3>Type</h3>
                    <div></div>
                </div>
                <div>
                    <h3>Amount ($)</h3>
                    <div></div>
                </div>
                <div>
                    <h3>Category</h3>
                    <div></div>
                </div>
                <div>
                    <h3>Description</h3>
                    <div></div>
                </div>
                <div>
                    <h3>Date</h3>
                    <div></div>
                </div>
                <div>
                    <button>Cancel</button>
                    <button>Add Transaction</button>
                </div>
            </form>
        </div>
    );
}