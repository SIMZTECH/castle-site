import React from 'react';
import { RiInformationFill } from 'react-icons/ri';

function MarketHeaderComponent({title,market_type}) {
  return (
    <header className='bg-[#0E76BC] text-white flex items-center gap-1 font-poppins text-[12px] px-2 py-2'>
        <p className='flex items-center gap-1 gap'><span className='text-[18px]'>{<RiInformationFill/>}</span>{title}</p>
        <p>|</p>
        <span>{market_type}</span>
    </header>
  )
}

export default MarketHeaderComponent;
