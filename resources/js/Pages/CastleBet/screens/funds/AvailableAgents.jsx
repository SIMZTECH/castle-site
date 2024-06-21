import React, { useContext, useEffect, useState } from 'react';
import { authUserContext } from '@/Context/UserAuthenticationContext';
import { IoIosInformationCircle } from "react-icons/io";
import { mtnIcon,airtelIcon,zamtelIcon,kazangIcon,paygoIcon,visaIcon,mastercardIcon} from '@/assets/icons';
import SelectedPaymentSystem from './SelectedPaymentSystem';
import { useSearchParams } from 'react-router-dom';
import {isNil} from 'lodash';

/**
 *    @type {recommended:[
 *      {
 *         id:number,
 *          name:string,
 *          icon:string,
 *          infor:string,
 *          max_amount:number,
 *          min_amount-amount:number
 *      }],
 *      bank:[{
 *         id:number,
*          name:string,
*          icon:string,
*          infor:string,
*          max_amount:number,
*          min_amount-amount:number
 *      }]
 *
 *    } payments
 */
const payments = {
    recommended: [
        {
            id:1,
            name:"MTN",
            icon:mtnIcon,
            infor:"charges may apply",
            max_amount:50000,
            min_amount:1.00
        },
        {
            id:2,
            name:"AIRTEL",
            icon:airtelIcon,
            infor:"charges may apply",
            max_amount:50000,
            min_amount:1.00
        },
        {
            id:3,
            name:"ZAMTEL",
            icon:zamtelIcon,
            infor:"charges may apply",
            max_amount:50000,
            min_amount:1.00
        },
        {
            id:4,
            name:"KAZANG",
            icon:kazangIcon,
            infor:"no cgarges apply",
            max_amount:50000,
            min_amount:5.00
        },
        {
            id:5,
            name:"PAYGO",
            icon:paygoIcon,
            infor:"no cgarges apply",
            max_amount:50000,
            min_amount:10.00
        },
    ],
    bank:[
        {
            id:1,
            name:"VISA",
            icon:visaIcon,
            infor:"no cgarges apply",
            max_amount:50000,
            min_amount:20.00
        },
        {
            id:2,
            name:"MASTER CARD",
            icon:mastercardIcon,
            infor:"no cgarges apply",
            max_amount:50000,
            min_amount:10.00
        }
    ]
};

function AvailableAgents(){
    const {authUser}=useContext(authUserContext);
    const [searchParams,setSearchParams] = useSearchParams();
    const [selectedPaymentSystem,setSelectedPaymentSystem]=useState({
        filter:'All',
        payment_id:''
    });
    const [agents,setAgents]=useState([]);

    const selectedPaymentSystemHandler=(arg)=>{
        setSelectedPaymentSystem({...selectedPaymentSystem,filter:arg?.filter,payment_id:arg?.payment_id});
        urlParamReplacer(arg);//add param filter to url
    };

    /**
     * @param {{
     *  payment_id:number,
     *  filter:string
     * }} arg
     */
    const urlParamReplacer=(arg)=>{
        const{payment_id,filter}=arg;

        if(searchParams.has("filter")){
            searchParams.set("filter",filter.toUpperCase());
            setSearchParams(searchParams);
        }
        if(searchParams.has("payment_id")){
            searchParams.set("payment_id",payment_id);
            setSearchParams(searchParams);
        }else{
            searchParams.append("payment_id",payment_id);
            setSearchParams(searchParams);
        }
    };

    /**
     * LOGIC 
     * 1. get all the available payment systems from swarm
     * 2. display the payment systems
     * 3. add functionality to select only one payment system
     * 4. if one selected display deposit instructions
     * 5. allow user to deposit by hitting the endpoint and display message
     * 
     * 
     * 
     */

    /**
     * 
     * @param {*} arg 
     * @returns {Array<{}>}
     */
    const extractPaymentSystems=(arg)=>{
        /**
         * @type {Array<{}>}
         */
        const arr=[];
        if(authUser?.payment_services){
            const {deposit,withdrawal}=arg;
            // airtel
            if(deposit?.Airtel_Money){
                const {...rest}=deposit?.Airtel_Money;
                arr.push({...rest,agent:'airtel'});
            }

            if(deposit?.ZamtelInstant){
                const {...rest}=deposit?.ZamtelInstant;
                arr.push({...rest,agent:'zamtel'});
            }

            if(deposit['MTN Deposit']){
                const {...rest}=deposit['MTN Deposit'];
                arr.push({...rest,agent:'mtn'});  
            }

            if(deposit["Zanaco bank transfer"]){
                const {...rest}=deposit["Zanaco bank transfer"];
                arr.push({...rest,agent:'zanaco'});  
            }

            return arr.sort(function(a,b){
                return a?.order-b?.order;
            })
        }

        return arr;
    };

    useEffect(()=>{

        setSelectedPaymentSystem(
            {
                ...selectedPaymentSystem,
                filter:searchParams.get("filter"),
                payment_id:searchParams.get("payment_id")
            });
    },[searchParams]);

    useEffect(()=>{
        if(!isNil(authUser?.payment_services)){
            setAgents(extractPaymentSystems(authUser?.payment_services));
        }
    },[authUser?.payment_services]);

    console.log(agents);



  return (
      <div className="h-full">
          {selectedPaymentSystem?.filter==="All" && (
              <section className='p-5'>

                  {/* account number */}
                  <div className="flex items-center text-[12px] text-black gap-1">
                      <span>Account ID :</span>
                      <span>{authUser?.user_id}</span>
                  </div>
                  <div className="text-[10px] text-primaryColor text-opacity-60 mb-2">
                      Available payment systems
                  </div>

                  {/*list of the payments systems recommended */}
                  <div className="flex items-center gap-1">
                      <span className="text-[14px] text-primaryColor text-opacity-60">
                          <IoIosInformationCircle />
                      </span>
                      <p className="text-[10px] text-[#5c5c5c] font-normal">
                          Supported payment systems in your region
                      </p>
                  </div>

                  {/* list of the payments systems recommended */}
                  <main className="flex flex-col gap-5 mt-3">
                      {/* recommended */}
                      <div className="flex flex-col">
                          <header className="text-[12px] bg-primaryColor p-1 text-white">
                              Mobile Wallet
                          </header>

                          <div className="flex flex-wrap items-center gap-2 px-2 pt-3 pb-3 bg-[#f6f8fc]">
                            
                              {agents.map((agt,index) => (
                                  <div
                                      onClick={()=>selectedPaymentSystemHandler({filter:agt?.agent,payment_id:agt?.PaymentSystem_id})}
                                      key={index}
                                      className="p-1 flex transition duration-75 ease-in-out w-[80px] h-[80px] flex-wrap items-center justify-center bg-white rounded-md shadow-md cursor-pointer active:scale-100 hover:scale-95"
                                  >
                                      {/* image */}
                                      <figure className="flex items-center justify-end w-full h-full ">
                                          <img
                                              src={agt?.PaymentSystemIconUrl}
                                              alt="photo"
                                              className="object-cover rounded-md"
                                          />
                                      </figure>
                                      {/* payment name */}
                                  </div>
                              ))}
                              
                          </div>
                          
                      </div>
                      
                  </main>

                  {/* bank system */}
              </section>
          )}

          {/* selected payment system*/}
          {selectedPaymentSystem?.filter !== "All" && (
              <SelectedPaymentSystem auth={authUser} name={selectedPaymentSystem?.filter} />
          )}
      </div>
  );
}

export default AvailableAgents
