import { storeTempContext } from "@/Context/DataStoreTemp";
import UtilizedHooks from "@/Hooks/UtilizedHooks";
import React, { useContext, useState } from "react";
import { TfiAngleUp } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

function RegionsAccordians({_data,isAccordianOpen,onClickAccordianCallBack,socket}) {
    const {setGetGamesByCompetition}=useContext(storeTempContext);
    const {getGameByRegionAndCompetition}=UtilizedHooks();
    const route=useNavigate();
    const {
        competition,
        compt_count,
        flag,
        region_alias,
        region_id,
    } = _data;

    /**
     * 
     * @param {{
    * compt_id:any,
    * reg_id:any
    * }} arg 
    */
   const asideRouteToHandler=(arg)=>{
       const {compt_id,reg_id}=arg;
       route(`/?page=league&reg_id=${Number(reg_id)}&compt_id=${Number(compt_id)}&filter=all`);
   };


    /**
     * 
     * @param {[]} arg 
     * @returns {number}
     */

    const getArrayLength=(arg)=>{
        let LENGTH=0;
        Object.keys(arg).map((gameKey)=>{
            LENGTH+=1;
        });

        return LENGTH;
    };


    return (
        <div className="flex flex-col transition-all duration-100 ease-in-out border rounded-t-sm shadow-sm">
            <header
                onClick={() =>onClickAccordianCallBack()}
                className={`flex hover:bg-[#b3cde0] items-center justify-between cursor-pointer px-2  select-none  h-[30px] ${(isAccordianOpen)?`border-b-[1px] bg-[#0E76BC] text-white transition-all ease-in-out duration-100 rounded-md shadow-sm`:'border-b-0 text-[#03396c]'}`}
            >
                <div className="flex items-center gap-1 ">
                    <figure className="w-[25px] h-[25px] outline-none rounded-full p-1 border-1">
                        <img
                            src={flag}
                            className="object-cover w-full h-full rounded-full"
                        />
                    </figure>
                    <span className="text-[13px]">{region_alias}</span>
                </div>
                <div className="flex items-center">
                    <p className="text-[12px] w-[35px] flex items-center justify-center">
                        <span className="text-[11px]">{isAccordianOpen?'':compt_count}</span>
                    </p>
                    <p className={`${(isAccordianOpen)? " rotate-180" : ""} translate-transform duration-150 ease-linear`}>
                        <TfiAngleUp />
                    </p>
                </div>
            </header>
            {/* accordian */}
            {(isAccordianOpen) && 
            (
                <div className="mt-3 mb-4 text-[#03396c] flex flex-col gap-1 px-1 text-opacity-70 transition-all ease-in-out duration-100">
                    {Object.keys(competition).map((comptKeys)=>{
                        // get total games length available in this competition
                        const {id,name,game}=competition[comptKeys];
                        const games_length = getArrayLength(game);

                        return(
                            <button
                                onClick={()=>{
                                    
                                    const params={
                                        compt_id:Number(comptKeys),
                                        reg_id:Number(region_id)
                                    }
                                    asideRouteToHandler(params);
                                    getGameByRegionAndCompetition(params,socket);
                                    setGetGamesByCompetition(null);
                                }} 
                                key={comptKeys}
                                className="flex outline-none items-center text-[12px] rounded-sm active:scale-95 justify-between px-2 cursor-pointer p-1 hover:bg-[#b3cde0]"
                            >
                                <span>{name}</span>
                                <span>{games_length}</span>
                            </button>
                        )
                    })
                    }
                </div>
                )
            }
        </div>
    );
}

export default RegionsAccordians;
