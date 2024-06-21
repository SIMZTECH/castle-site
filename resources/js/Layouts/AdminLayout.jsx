import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import { RxDashboard } from "react-icons/rx";
import { FaUsersGear } from "react-icons/fa6";
import { FaUserLock } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { LiaServicestack } from "react-icons/lia";
import { TbLogout } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";
import { PiList } from "react-icons/pi";
import { TbMessage } from "react-icons/tb";
import { BiSolidBell } from "react-icons/bi";
import AsideNavLink from '@/Components/AsideNavLink';


export default function Authenticated({auth, header, children}) {
   
    return (
        <div className="w-full h-full">
            <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                {/*company name */}
                <div>
                    <div className="px-6 py-4 -mx-6">
                        <span>Castle Holdings</span>
                    </div>

                    <ul className="mt-8 space-y-2 tracking-wide">
                        {/*return to main dashboard */}
                        <li>
                            <AsideNavLink  
                                href={route("dashboard")}
                                active={route().current('admin.index')}  
                            >
                                <span><RxDashboard /></span>
                                <span className="-mr-1 font-medium">Dashboard</span>
                            </AsideNavLink>
                        </li>
                        {/* all users */}
                        <li>
                            <AsideNavLink  
                                href={route("users.index")}
                                active={route().current('users.index')}  
                            >
                               <span><FaUsers/></span>
                                <span className="group-hover:text-gray-700">All Users</span>
                            </AsideNavLink>
                        </li>
                        {/* user roles actions */}
                        <li>
                        <AsideNavLink  
                                href={route("roles.index")}
                                active={route().current('roles.index')}  
                            >
                                <span><FaUsersGear/></span>
                                <span className="group-hover:text-gray-700">User Roles</span>
                        </AsideNavLink >
                        </li>
                        {/* user permissions action */}
                        <li>
                            <AsideNavLink  
                                href={route("permissions.index")}
                                active={route().current('permissions.index')} 
                            >
                               <span><FaUserLock/></span>
                                <span className="group-hover:text-gray-700">User Permissions</span>
                            </AsideNavLink  >
                        </li>
                        
                        {/* other system actions */}
                        <li>
                            <AsideNavLink  
                                href={route("others.index")}
                                active={route().current('others.index')}  
                            >
                               <span><LiaServicestack/></span>
                                <span className="group-hover:text-gray-700">Other</span>
                            </AsideNavLink>
                        </li>
                    </ul>
                </div>
                {/* logout button */}
                <div className="flex items-center justify-between px-6 pt-4 -mx-6 border-t">
                    <Link
                        href={route('logout')} as="button" method="post" 
                        className="flex items-center px-4 py-3 space-x-4 text-gray-600 rounded-md group">
                        <span className="group-hover:text-gray-700"><TbLogout/></span>
                        <span className="group-hover:text-gray-700">Logout</span>
                    </Link>
                </div>
                
            </aside>
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                {/* top navbar */}
                <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
                    
                    <div className="flex items-center justify-between px-6 space-x-4 2xl:container">
                        
                        <h5 hidden className="text-2xl font-medium text-gray-600 lg:block">Dashboard</h5>
                        
                        {/* menu btn list */}
                        <button className="w-12 h-16 -mr-2 border-r lg:hidden">
                           <span><PiList/></span>
                        </button>
                        
                        <div className="flex space-x-4">
                            {/* <!--search bar --> */}
                            <div hidden className="md:block">
                                <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                                    <span className="absolute flex items-center h-6 pr-3 border-r border-gray-300 left-4">
                                        <IoSearchOutline/>
                                    </span>
                                    <input type="search" name="leadingIcon" id="leadingIcon" placeholder="Search here" className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"/>
                                </div>
                            </div>
                            {/* <!--/search bar --> */}
                            <button aria-label="search" className="w-10 h-10 bg-gray-100 border rounded-xl focus:bg-gray-100 active:bg-gray-200 md:hidden">
                                    <span className="absolute flex items-center h-6 pr-3 border-r border-gray-300 left-4">
                                        <IoSearchOutline/>
                                    </span>
                            </button>
                            <button aria-label="chat" className="flex text-[22px] items-center justify-center w-10 h-10 bg-gray-100 border rounded-xl focus:bg-gray-100 active:bg-gray-200">
                                <span><TbMessage/></span>
                            </button>
                            <button aria-label="notification" className="flex text-[22px] items-center justify-center w-10 h-10 bg-gray-100 border rounded-xl focus:bg-gray-100 active:bg-gray-200">
                                <span><BiSolidBell/></span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* child content falls here */}
                <main>{children}</main>

            </div>
        </div>
    );
};
