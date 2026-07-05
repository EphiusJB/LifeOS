import Navbar from '@/components/navbar';
import { TrendingUp, TrendingDown, Plus } from 'lucide-react';
import NewTransaction from './_components/new-transaction-button';
import NewTransactionOverlay from './_components/new-transaction-overlay';
import FinanceMain from './finance-main';

export const metadata = {
    title: "Finance"
};

export default function Finance(){

  return(
    <div className='flex justify-between h-screen'>
      <Navbar/>
      <FinanceMain />
    </div>
  );
}