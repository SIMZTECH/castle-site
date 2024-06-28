import React from 'react'
import HeaderComponent from './HeaderComponent';
import { regionKeyData } from '@/assets/store/GameFile';
import { useContext } from 'react';
import { storeTempContext } from '@/Context/DataStoreTemp';
import { useState } from 'react';
import { useEffect } from 'react';
import { isNil } from 'lodash';
import RegionsAccordians from './RegionsAccordians';
import { TfiAngleDown, TfiAngleUp } from 'react-icons/tfi';
import UtilizedHooks from '@/Hooks/UtilizedHooks';

const DEFAULT_VEIWABLE_REGIONS=6;//regions you will see at load time

function CountriesList({socket}){
    const {tempSwarmData,setAvailableCompetition}=useContext(storeTempContext);
    const [availableRegions,setAvailableRegions]=useState(null);
    const [currentKeyIndicator,setCurrentKeyIndicator]=useState(0);
    const [filterKey,setFilterKey]=useState(DEFAULT_VEIWABLE_REGIONS);
    /**
     * 
     * @param {[]} arg 
     * @returns {number}
     */

    const getArrayLength=(arg)=>{
        let LENGTH=0;
        Object.keys(arg).map((comptKey)=>{
            LENGTH+=1;
        });

        return LENGTH;
    };

    /**
     * 
     * @returns {Array<{}>}
     */
    const filterAvailableRegions=()=>{
        /**
         * @type {Array<{}>}
         */
        const arr=[];
        if(tempSwarmData&&regionKeyData){
            Object.keys(tempSwarmData?.data?.sport).map((sportKey)=>{
                const sportObj=tempSwarmData?.data?.sport[sportKey];
                Object.keys(sportObj?.region).map((regionKey)=>{
                    const regionObj=sportObj?.region[regionKey];

                    const compt_count=getArrayLength(regionObj?.competition);

                    //count the competition number in this object
                    // find this region alias from static data
                    const foundAlias=regionKeyData?.find((sta)=>sta?.region_alias===regionObj?.alias);
                    
                    if(!isNil(foundAlias)){
                        const {flag,region_alias}=foundAlias;
                        arr.push({
                            compt_count:compt_count,
                            flag,
                            region_alias,
                            competition:regionObj?.competition,
                            region_id:regionObj?.id//id for the region from swarm
                        });
                    }
                });
            });
        }

        return arr;
    };

    const showMoreOrLessRegions=()=>{
        const len=filterAvailableRegions().length;

        if(len>filterKey){
            const remain=len-DEFAULT_VEIWABLE_REGIONS;
            setFilterKey(DEFAULT_VEIWABLE_REGIONS+remain);
        }else{
            setFilterKey(DEFAULT_VEIWABLE_REGIONS);
        }
    };


    useEffect(()=>{
        if(tempSwarmData){
            setAvailableRegions(filterAvailableRegions().slice(0,filterKey));
        }
    },[tempSwarmData,filterKey]);

    // console.log(availableRegions,"the collection available in region...........");



    return (
        <div>
            <HeaderComponent title={"Region"} />
            <div className="w-full pt-3 pb-3">
                {/* list of components */}
                <div className="flex flex-col gap-2 mb-6">
                    {availableRegions && (
                        <>
                            {availableRegions?.map((reg, index) => {
                                return (
                                    <RegionsAccordians
                                        socket={socket}
                                        key={reg?.region_id}
                                        onClickAccordianCallBack={() => {
                                            //TODO::invock the route to specific games
                                            // chancge current clicked accordian state
                                            setCurrentKeyIndicator((el)=>(el==(index+1))?0:index+1);
                                        }}
                                        isAccordianOpen={currentKeyIndicator==(index+1)}
                                        _data={reg}
                                    />
                                );
                            })}
                        </>
                    )}
                </div>

                {/* show more button */}
                <div
                    onClick={() => showMoreOrLessRegions()}
                    className="w-full pb-1 text-primaryColor font-poppins text-[13px] gap-3 flex justify-center items-center cursor-pointer border-b-[1px]"
                >
                    <p>{(filterAvailableRegions().length==filterKey)? `Show less`: `Show more`}</p>
                    <span>{(filterAvailableRegions().length==filterKey) ? (<TfiAngleUp />) : (<TfiAngleDown />)}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CountriesList;
