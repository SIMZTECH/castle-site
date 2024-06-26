import React from 'react';
import { CgCloseO } from "react-icons/cg";
import { formatDateByTimeStamp } from '@/utilities/DateFormatter';

function SelectedGame({match,callBack}) {

    const {formattedDate,formattedTime}=formatDateByTimeStamp(match?.start_time);


    return (
        <div className="flex flex-col justify-center p-1 mx-2 mb-2 font-sans bg-white rounded-md shadow-sm ring-gray-400 ring-1 bg-opacity-90">
            <div
                onClick={() => callBack(match?.market_id)}
                className=" active:scale-95 select-none text-[20px] text-gray-600
                              w-[25px] h-[25px] cursor-pointer flex items-center justify-center rounded-full"
            >
                <CgCloseO />
            </div>
            <div className="flex items-center">
                <div className="flex-1 px-2 text-gray-800">
                    <div className="b leading-4 flex flex-col text-[14px] font-medium">
                        <p className='cursor-pointer b hover:underline'>{match?.home_team}</p>
                        <p className='cursor-pointer b hover:underline'>{match?.away_team}</p>
                    </div>
                    <p className="font-medium text-gray-800 b">
                        <span className="text-[10px]">
                            {match?.market_name} -{" "}
                        </span>
                        <span className="text-[11px">
                            {match?.selection}
                        </span>
                    </p>
                    <div className="text-[10px] text-gray-800 font-medium">
                        <span>Starts:</span>
                        {" "}
                        <span>{formattedDate},{formattedTime}</span>
                    </div>
                </div>
                <div className="b font-poppins text-[14px] text-gray-800 mr-4 font-medium">
                    {match?.market_price}
                </div>
            </div>
        </div>
    );
}

export default SelectedGame;
