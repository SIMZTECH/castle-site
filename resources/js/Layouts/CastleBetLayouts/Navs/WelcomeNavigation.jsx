import React from 'react';
import { VscSettings } from "react-icons/vsc";
import { LiaAngleDownSolid } from "react-icons/lia";

const navLinksData=[
    {
        id:1,
        title:"Highlights",
        path:"#"
    },
    {
        id:2,
        title:"Upcoming",
        path:"#"
    },
    {
        id:3,
        title:"Quickies",
        path:"#"
    },
    {
        id:4,
        title:"trending",
        path:"#"
    },
]

function WelcomeNavigation() {
  return (
      <div className='flex flex-col sm:flex-row items-center justify-between mx-2 font-poppins text-[12px] mb-4'>
        {/* responsive view navList*/}
          <div className='flex items-center font-semibold text-[13px] w-full gap-3 sm:hidden text-gray-700 mb-2'>
              {
                  navLinksData.map((val) => (
                      <div key={val?.id}>
                          {val?.title}
                      </div>
                  ))
              }
          </div>

          {/* responsive view filters */}
          <div className='flex w-full items-center justify-between sm:hidden '>
              {/* filter */}
              <div className='flex text-[15px] font-poppins text-[#5c5c5c] items-center gap-1 px-2 
              py-2 cursor-pointer  rounded-sm shadow-sm'>
                  <span className='text-[18px]'><VscSettings /></span>
                  <p >Filters</p>
                  <span><LiaAngleDownSolid /></span>
              </div>
              {/* button selections */}
              <div className='flex items-center text-[#5c5c5c] gap-3 font-poppins'>
                  {/* top leagues */}
                  <div className='flex items-center text-[15px] gap-1 shadow-sm px-2 py-2 cursor-pointer rounded-sm'>
                      <p>Top leagues</p>
                      <span><LiaAngleDownSolid /></span>
                  </div>
                  {/* market */}
                  <div className='text-[15px] flex items-center gap-1 shadow-sm px-2 py-2 cursor-pointer rounded-sm'>
                      <p>1x2</p>
                      <span><LiaAngleDownSolid /></span>
                  </div>
              </div>

          </div>


          <div className='sm:flex items-center gap-4 hidden'>
              {/* filter */}
              <div className='flex items-center gap-1 bg-primaryColor px-2 py-1 cursor-pointer bg-opacity-15 rounded-sm'>
                  <span className='text-[16px] text-gray-700'><VscSettings /></span>
                  <p>Filters</p>
                  <span><LiaAngleDownSolid /></span>
              </div>

              {/* links middle */}
              <div className='hidden sm:flex items-center flex-1 gap-3 text-gray-700'>
                  {
                      navLinksData.map((val) => (
                          <div key={val?.id}> 
                           {val?.title}
                          </div>
                      ))
                  }
              </div>
          </div>
          <div className='sm:flex hidden items-center text-gray-700 gap-3'>
              {/* top leagues */}
              <div className='flex items-center gap-1 bg-primaryColor px-2 py-1 cursor-pointer bg-opacity-15 rounded-sm'>
                  <p>Top leagues</p>
                  <span><LiaAngleDownSolid /></span>
              </div>
              {/* market */}
              <div className='flex items-center gap-1 bg-primaryColor px-2 py-1 cursor-pointer bg-opacity-15 rounded-sm'>
                  <p>1x2</p>
                  <span><LiaAngleDownSolid /></span>
              </div>
          </div>
      </div>
  )
}

export default WelcomeNavigation