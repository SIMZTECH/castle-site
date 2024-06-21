import React, { useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa6';
import { useSearchParams } from 'react-router-dom';

function ZanacoPayment({value,user_id}) {
    const [searchParams,setSearchParams] = useSearchParams();
    const [formData,setFormData]=useState({
        amount:0,
        phone:'',
        user_id:user_id
    });

    const goBackHandler=(arg)=>{
        urlParamReplacer(arg);//add param filter to url
    };

    /**
     * @param {string} arg
     */
    const urlParamReplacer=(arg)=>{
        if(searchParams.has("filter")){
            searchParams.set("filter",arg);
            setSearchParams(searchParams);
        }

        if(searchParams.has("payment_id")){
            searchParams.delete("payment_id");
            setSearchParams(searchParams);
        }
    };

     /**
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event
     */
     const onchangeInput = async (event) => {
        setFormData({ ...formData, [event.target.name]:event.target.value });
    };

     /**
     *
     * @param {React.ChangeEvent} event
     */
     const onSubmitDepositHandler = async (event) => {
        event.preventDefault();
        //TODO::Implement the deposit logic

        //NOTE::logic comes from the payment getway library
        console.log(formData,"deposit data.....");
    };


  return (
      <section className='flex flex-col flex-1 h-full bg-white'>
          <header className=" font-poppins border-b-[1px] pb-2 px-2 py-4 text-[#27393f] ">
              <button
                  onClick={() => goBackHandler("All")}
                  className="flex items-center gap-1 outline-none"
              >
                  <span>
                      <FaAngleLeft />
                  </span>
                  <p className="text-[14px]">Select different payment system</p>
              </button>
          </header>
          <div className="flex-1 px-2 pt-2 pb-4">
              <h3 className="text-[13px] text-black">
                  You have selected to deposit using{" "}
                  <span className="text-[14px] font-medium">{value}</span>
              </h3>
              <p className="text-[12px] w-full sm:w-3/4 mt-1 text-[#27393f] text-opacity-70 font-sans">
                  To successfully deposit money into your castlebet account,
                  please enter the amount and wait for a confirmation on your
                  mobile phone
              </p>
              <form onSubmit={onSubmitDepositHandler} className="w-full pt-5 mb-5">
                  <div className="flex flex-col mb-3">
                      <label
                          className="block text-[12px] text-sm text-gray-800"
                          htmlFor="phone"
                      >
                          Enter {value} number
                      </label>
                      <input
                          className="bg-gray-50 border border-gray-300  rounded-lg  placeholder:text-[13px]
                               block w-full p-2.5 "
                          name="phone"
                          type="text"
                          id="phone"
                          value={formData?.phone}
                          onChange={onchangeInput}
                          placeholder="+26096 0r +26076"
                      />
                  </div>
                  <div className="flex flex-col mb-3">
                      <label
                          className="block text-sm text-gray-900 dark:text-white"
                          htmlFor="amount"
                      >
                          Amount
                      </label>
                      <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-gray-800 bg-gray-200 border border-gray-300 border-e-0 rounded-s-md">
                              K
                          </span>
                          <input
                              className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 placeholder:text-[13px] block w-full p-2.5 "
                              name="amount"
                              type="Number"
                              id="amount"
                              value={formData?.amount}
                              onChange={onchangeInput}
                          />
                      </div>
                      {/* max */}
                      <p className="text-[11px] py-1 text-[#27393f] text-opacity-70">
                          Min K1.00 - Max K50,000
                      </p>
                  </div>
                  {/* submit btn */}
                  <button className="w-full bg-black h-[40px] rounded-md text-white text-[13px] active:scale-95">
                      Deposit
                  </button>
                  {/* instructions */}
                  <p className="sm:w-3/4 w-full mt-2 text-[12px] text-[#27393f] text-opacity-70">
                      Ensure to confirm the deposit request from your mobile
                      phone to successfully complete the deposit process
                  </p>
              </form>
              {/* how to deposit */}
              <div className='px-2 text-gray-900 font-poppins'>
                <p className='py-1 border-b-[1px]'>HOW TO DEPOSIT</p>

              </div>
          </div>
      </section>
  );
}

export default ZanacoPayment
