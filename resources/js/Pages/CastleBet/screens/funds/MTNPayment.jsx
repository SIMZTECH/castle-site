import { storeTempContext } from '@/Context/DataStoreTemp';
import React, { useContext, useEffect, useState } from 'react';
import { FaAngleLeft } from "react-icons/fa6";
import { useSearchParams } from 'react-router-dom';
import {isNil} from 'lodash';
import HashLoader from 'react-spinners/HashLoader';
import { Skeleton } from '@mui/material';

function MTNPayment({value,user}){
    const {setGetDepositParams,getPaymentResponse,setGetPaymentResponse,tempSwarmData}=useContext(storeTempContext);
    const [searchParams,setSearchParams] = useSearchParams();
    const [paymentLoader,setPaymentLoader] = useState(false);
    const [errorPayment,setErrorPayment] = useState(false);
    const [successPayment,setSuccessPayment] = useState(false);
    const [paymentResponse,setPaymentResponse] = useState(null);
    const [serviceDetails,setServiceDetails]=useState(null);
    const [urlParam,setUrlParam]=useState({
        payment_id:Number(searchParams.get("payment_id"))
    });

    const [formData,setFormData]=useState({
        amount:0,
        phone:'',
        user_id:user?.user_id,
        password:'7782'
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
    * @param {{
        *  amount:number,
        *  currency:string,
        *  service:string,
        *  customer_id:string,
        *  customer_password:string
        * }} arg 
    */
    const depositHandler=(arg)=>{
        setPaymentLoader(true);
        setGetDepositParams({...arg});
    }

     /**
     *
     * @param {React.ChangeEvent} event
     */
     const onSubmitDepositHandler = async (event) => {
        event.preventDefault();
        //TODO::Implement the deposit logic
        const {user_id,currency,payment_services:{deposit}}=user;
        const {PaymentSystem_id,displayName}=deposit["MTN Deposit"];
        depositHandler({
            amount:Number(formData?.amount),
            currency:currency,
            service:displayName,
            customer_id:String(user_id),
            customer_password:String(formData?.password)
        });
    };

    useEffect(()=>{
        if(user){
            setServiceDetails(user?.payment_services?.deposit["MTN Deposit"]);
        }
    },[user]);

    useEffect(()=>{
        if(!isNil(getPaymentResponse)){
            setPaymentLoader(false);
            setPaymentResponse(getPaymentResponse);

            if(getPaymentResponse?.result!="OK"){
                setErrorPayment(true);
                setTimeout(() => {
                    setErrorPayment(false);
                },2000);
            }

            if(getPaymentResponse?.result=="OK"){
                setSuccessPayment(true);
                setTimeout(() => {
                    setSuccessPayment(false);
                },2000);
            }
        }

        return ()=>setGetPaymentResponse(null);//clear state of recived message
        //response display
    },[getPaymentResponse]);


  return (
      <section className="flex flex-col flex-1 h-full bg-white">
          {!tempSwarmData && (
              <Skeleton
                  variant="rectangular"
                  animation="wave"
                  height={"40px"}
              />
          )}

          {tempSwarmData &&user && (
              <header className=" font-poppins border-b-[1px] pb-2 px-2 py-4 text-[#27393f] ">
                  <button
                      onClick={() => goBackHandler("All")}
                      className="flex items-center gap-1 outline-none"
                  >
                      <span>
                          <FaAngleLeft />
                      </span>
                      <p className="text-[14px]">
                          Select different payment system
                      </p>
                  </button>
              </header>
          )}

          {(tempSwarmData &&user) && (
              <div className="flex-1 px-2 pt-2 pb-4 sm:max-w-[500px] mx-auto">
                  <h3 className="text-[14px] text-black select-none">
                      You have selected to deposit using{" "}
                      <span className="text-[14px] font-medium">{value}</span>
                  </h3>
                  <p className="text-[12px] w-full sm:w-3/4 mt-1 select-none text-gray-600 font-sans">
                      To successfully deposit money into your castlebet account,
                      please enter the amount and wait for a confirmation on
                      your mobile phone
                  </p>
                  <form
                      onSubmit={onSubmitDepositHandler}
                      className="w-full pt-2 mb-5"
                  >
                      {/* status message of deposit */}
                      <div className="w-full mb-2 transition-transform duration-100 ease-in-out select-none">
                          {/* success */}
                          {errorPayment && (
                              <p className="text-[11px] p-2  font-sans rounded-md border-[1px] border-red-300 bg-red-100 text-red-600">
                                  Failed to make a deposit, something went wrong
                              </p>
                          )}

                          {successPayment && (
                              <p className="text-[11px] p-2 text-gray-900 font-sans rounded-md border-[1px] border-green-300 bg-green-100">
                                  A deposit request trigger has beeing
                                  sucessfully sent to your phone....
                              </p>
                          )}
                      </div>
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
                              K{serviceDetails?.info_notes?.ZMW?.min} - K
                              {serviceDetails?.info_notes?.ZMW?.max}
                          </p>
                      </div>
                      {/* submit btn */}
                      <button
                          disabled={paymentLoader}
                          className="w-full bg-black h-[40px] rounded-md text-white flex items-center justify-center text-[13px] active:scale-95"
                      >
                          {paymentLoader && (
                              <span>
                                  <HashLoader color="white" size={20} />
                              </span>
                          )}
                          {!paymentLoader && <span>Deposit</span>}
                      </button>
                      {/* instructions */}
                      <p className="sm:w-3/4 w-full mt-2 text-[12px] text-[#27393f] text-opacity-70">
                          Ensure to confirm the deposit request from your mobile
                          phone to successfully complete the deposit process
                      </p>
                  </form>
                  {/* how to deposit */}
                  {isNil(serviceDetails?.infotext) && (
                      <div className="px-2 text-gray-900 font-poppins">
                          <p className="py-1 border-b-[1px]">HOW TO DEPOSIT</p>
                          <div></div>
                      </div>
                  )}
              </div>
          )}
      </section>
  );
}

export default MTNPayment;
