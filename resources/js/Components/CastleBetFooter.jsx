import React, { useContext } from 'react';
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa6";
import { SwarmDataContext } from '@/Context/SwarmDataContext';
import { Skeleton } from '@mui/material';

function CastleBetFooter() {
    const {storeSwarmData}=useContext(SwarmDataContext);


  return (
      <footer className={`b ${storeSwarmData?'bg-gray-900':''}  py-4 flex-1 font-poppins text-white select-none`}>
          {!storeSwarmData && (
              <Skeleton variant="rectangular" animation="wave" height={80} />
          )}
          {storeSwarmData && (
              <>
                  <section className="flex flex-col items-center justify-center space-y-1">
                      {/* links to games */}
                      <ul className="flex items-center gap-3 text-[10px] sm:text-[12px]">
                          <li className="cursor-pointer b hover:underline">
                              Football
                          </li>
                          <li className="cursor-pointer b hover:underline">
                              Casino
                          </li>
                          <li className="cursor-pointer b hover:underline">
                              Basketball
                          </li>
                          <li className="cursor-pointer b hover:underline">
                              Hockey
                          </li>
                      </ul>
                      {/* social networks */}
                      <div className="flex flex-col items-center space-y-1">
                          <span className="text-[10px] sm:text-[12px]">
                              follow us on
                          </span>
                          <ul className="flex items-center space-x-2">
                              <li className="b cursor-pointer hover:scale-95 text-[22px]">
                                  <FaFacebook />
                              </li>
                              <li className="b cursor-pointer hover:scale-95 text-[22px]">
                                  <RiInstagramFill />
                              </li>
                              <li className="b cursor-pointer hover:scale-95 text-[22px]">
                                  <FaTelegram />
                              </li>
                          </ul>
                      </div>
                      {/* login or register */}
                      <p className="text-[10px] sm:text-[12px]">
                          do you have an account?{" "}
                          <span className="b cursor-pointer hover:underline hover:text-primaryColor text-[10px] sm:text-[12px]">
                              login
                          </span>{" "}
                          or{" "}
                          <span className="b cursor-pointer hover:underline hover:text-primaryColor text-[10px] sm:text-[12px]">
                              register
                          </span>
                      </p>
                      {/* quick links */}
                      <ul className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-[10px] sm:text-[12px] pb-3">
                          <li className="cursor-pointer b hover:underline">
                              About us
                          </li>
                          <li className="cursor-pointer b hover:underline">
                              Terms
                          </li>
                          <li className="cursor-pointer b hover:underline">
                              Rules
                          </li>
                          <li className="cursor-pointer b hover:underline">
                              Support
                          </li>
                          <li className="cursor-pointer b hover:underline">
                              Responsible Gaming
                          </li>
                          <li className="cursor-pointer b hover:underline">
                              Support
                          </li>
                      </ul>
                  </section>
                  <div className="border-t-[1px] border-t-mediumBlackcolor w-[100%] flex items-center justify-center">
                      <span className="mt-2 text-[10px] sm:text-[12px]">
                          &copy;Copyright 2024 Castlebet Lite, Zambia{" "}
                      </span>
                  </div>
              </>
          )}
      </footer>
  );
}

export default CastleBetFooter
