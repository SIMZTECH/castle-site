
import React, { useContext, useEffect, useState } from 'react'
import { TfiAngleLeft } from 'react-icons/tfi'
import { useNavigate} from 'react-router-dom';
import TransactionCard from './funds/TransactionCard';
import { authUserContext } from '@/Context/UserAuthenticationContext';
import {isNil} from 'lodash';

function TransactionHistory(){
    const { authUser } = useContext(authUserContext);
    const [transactionData,setTransactionData]=useState([]);
    /**
     * @type {Array<{}>}
     */
    const navigate = useNavigate();

    useEffect(()=>{
        if(!isNil(authUser?.transaction_history?.history)){
            setTransactionData(authUser?.transaction_history?.history)
        }
    },[authUser]);

    console.log(transactionData);
    
  return (
    <main className="relative flex flex-col h-full sm:bg-transparent bg-[#f0f2f7] sm:w-[98%] sm:mx-auto sm:pb-8 profile-container">
        <header className="fixed sm:hidden flex items-center w-full h-[55px] px-4  shadow-md select-none bg-gray-800 font-poppins">
                {/* back button */}
                <button
                    onClick={() => navigate("/?page=profile")}
                    className=" text-[16px] gap-1 cursor-pointer flex items-center justify-center"
                >
                    <div className="w-[22px] text-gray-500 h-[22px] bg-white rounded-full flex items-center justify-center">
                        <TfiAngleLeft />
                    </div>
                    <p className="text-[13px]  text-white">Go Back</p>
                </button>
                <h3 className="flex  items-center absolute left-1/2 transform -translate-x-1/2 text-[13px] justify-center  flex-1 text-white">
                    Transaction History
                </h3>
                {/* title */}
        </header>
        <section className="flex-1 pt-16 overflow-y-scroll sm:pt-5 font-poppins profile-container">
            <div className='text-start hidden sm:block text-[#27393f] text-[20px] mx-4 font-medium mb-1'>TRANSACTION STATEMENT</div>
            <h4 className="mx-4 text-[14px] sm:hidden text-[#27393f]">Transactions</h4>
            <div className='flex flex-col gap-1 py-4'>
                {/* list of transaction history */}
                {transactionData.map((tran)=>(
                    <TransactionCard 
                    dept={tran?.operation>0}
                    trans_id={tran?.transaction_id}
                    time_stamp={tran?.date_time}
                    bal={tran?.balance}
                    amount={tran?.amount}
                    operation_name={tran?.operation_name}
                    bet_id={tran?.bet_id}
                   />

                ))}
            </div>
        </section>
      
    </main>
  )
}

export default TransactionHistory
