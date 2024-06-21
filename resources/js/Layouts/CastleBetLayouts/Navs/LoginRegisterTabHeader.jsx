import React from 'react';
import {NavLink} from "react-router-dom";

function LoginRegisterTabHeader() {
  return (
      <header className='flex items-center font-poppins text-[14px] shadow-sm rounded-sm'>
          <NavLink
              className={({isActive})=>isActive?'basis-[50%]':'b bg-slate-200 text-[#5c5c5c] basis-[50%] bg-opacity-35'}
              to={"/castle-site?page=login"}>
              <div className='h-[30px] w-full flex items-center justify-center basis-[50%]'>
                  Login
              </div>
          </NavLink>
          <NavLink
              className={({isActive})=>isActive?'basis-[50%]':'b bg-slate-200 bg-opacity-35 text-[#5c5c5c] basis-[50%]'}
              to={"/castle-site?page=register"}>
              <div className='h-[30px] w-full flex items-center justify-center basis-[50%]'>
                Jon-Now
              </div>
          </NavLink>
      </header>
  )
}

export default LoginRegisterTabHeader;
