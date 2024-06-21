import { isNil } from 'lodash';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import logo from '../../../assets/logo.png';

function SplashScreen({ progress }) {
    const [loadingProgress, setLoadingProgress] = useState(50);

    return (
        <div className="flex flex-col items-center justify-center w-full h-full bg-white font-poppins">
            <span>
                <figure className='w-[70px] h-[70px] rounded-full animate-spin'>
                    <img src={logo} className='w-full h-full rounded-full'/>
                </figure>
            </span>
            <p className="b font-poppins text-[11px] text-[#5c5c5c] mt-5">
                Getting resources...
            </p>
            {/* progress */}
            {/* <div className="w-[40%] bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                    className="bg-blue-600 text-[10px] font-medium text-blue-100 text-center leading-none rounded-full"
                    style={{
                        width: `${
                            loadingProgress > 100 ? 100 : loadingProgress
                        }%`,
                    }}
                >
                    {" "}
                    {loadingProgress > 100 ? 100 : loadingProgress}%
                </div>
            </div> */}
        </div>
    );
}

export default SplashScreen;
