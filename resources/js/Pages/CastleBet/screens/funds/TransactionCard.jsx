
import { formatDateByTimeStamp } from '@/utilities/DateFormatter';
import React from 'react'

function TransactionCard({dept,trans_id,operation_name,bet_id,time_stamp, bal, amount }) {
    /**
     * 
     * @param {number} arg 
     * @returns {string}
     */
    const amountSanitaizer=(arg)=>{
        const checker=(arg.toString().substring(0,1)==='-');
        if(checker){
            const fil=Number(arg)*(-1)//remove a minus
            return `-K${fil}`;
        }else{
            return `+K${arg}`;
        }
    };

    const {formattedTime,formattedDate} =formatDateByTimeStamp(time_stamp);

    return (
        <div className="flex flex-col font-poppins text-[12px] mx-4 cursor-pointer sm:hover:bg-transparent hover:bg-gray-200 text-gray-600 gap-1 bg-opacity-50 bg-white sm:rounded-none sm:bg-transparent sm:bgorder-b-[1px] sm:border-dotted sm:border-r-0 sm:border-l-0 sm:border-t-0 p-2 rounded-md border-b-[1px]  border-gray-400 bg-clip-padding">
           <div className='flex items-center justify-between'>
                {!dept && <p>{operation_name}:<span className='font-medium'>#{bet_id} </span>Placed</p>}
                {dept && <p>{operation_name}:<span className='font-medium'>#{trans_id} </span></p>}
                
                <p className={`font-medium  ${dept?'text-green-500':'text-red-500'}`}>{amountSanitaizer(amount)}</p>
            </div>
            <div className='flex items-center justify-between'>
                <p>{formattedDate}({formattedTime})</p>
                <p>Balance: <span className='font-medium '>K{bal}</span></p>
            </div>
        </div>
    );
}

export default TransactionCard
