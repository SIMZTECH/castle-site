import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import CastleBetFooter from "@/Components/CastleBetFooter";
import { flg_zambia } from "@/assets/flags/worldFlags";
import { HashLoader } from "react-spinners";

function Register({userRegistrationCallBack,registerRes}) {
    const [loader,setLoader]=useState(false);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword:"",
        agreement:true
    });

    const passwordMatcherVerify=()=>{
        return (formData.password===formData.confirmPassword)?true:false;
    };

     /**
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event
     */
     const onchangeInput = async (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    /**
     *
     * @param {React.ChangeEvent} event
     */
    const onSubmitRegister = async (event) => {
        event.preventDefault();

        setLoader(true);
        userRegistrationCallBack(formData);
    };

    useEffect(()=>{
        setLoader(false);
        console.log(registerRes,"i have recieved the response in register");
    },[registerRes]);

    return (
        <main className="flex flex-col flex-1 h-full px-3 bg-gray-50 ">
            <section>
                <form
                    onSubmit={onSubmitRegister}
                    className="flex-1 w-full sm:max-w-[450px] bg-white border mx-auto rounded-md mt-8 p-3 mb-5 shadow-sm"
                >
                    <div className="pt-2 mb-1">
                        <label
                            for="username"
                            className="block mb-1 text-sm font-medium text-[#5c5c5c]"
                        >
                            Mobile number
                        </label>
                        <div className="relative ">
                            <div className="absolute inset-y-0 flex items-center mr-2 pointer-events-none start-0 ps-2">
                                <figure className="h-[25px] w-[25]">
                                    <img src={flg_zambia} className="w-full h-full"/>
                                </figure>
                            </div>
                            <input
                                name="username"
                                type="username"
                                id="username"
                                value={formData.username}
                                onChange={onchangeInput}
                                class="bg-gray-50 border border-gray-300 text-gray-600 text-sm outline-none rounded-lg focus:ring-1 focus:ring-gray-800 focus:border-gray-800 block w-full ps-12 p-2.5"
                                placeholder="+260 96 or 076"
                                required
                            />
                        </div>
                        <p className="px-2 text-[#5c5c5c] py-1 text-[13px]">
                            min(10 digits)
                        </p>
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block mb-1 text-sm font-medium text-[#5c5c5c]"
                        >
                            Create Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={onchangeInput}
                            id="password"
                            placeholder="******"
                            className="bg-gray-50 border border-gray-300 text-gray-600 text-sm outline-none rounded-lg focus:ring-1 focus:ring-gray-800 focus:border-gray-800 block w-full p-2.5"
                            required
                        />
                        <p className="px-2 text-gray-400 py-1 text-[13px]">
                            min(4 digits)
                        </p>
                    </div>
                    <div className="mb-3">
                        <label
                            for="confirmPassword"
                            className="block mb-1 text-sm font-medium text-[#5c5c5c]"
                        >
                            Confirm Password
                        </label>
                        <input
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={onchangeInput}
                            id="confirmPassword"
                            placeholder="******"
                            class="bg-gray-50 border border-gray-300 text-gray-600 text-sm outline-none rounded-lg focus:ring-1 focus:ring-gray-800 focus:border-gray-800 block w-full p-2.5"
                            required
                        />
                        {/* error message */}
                        {passwordMatcherVerify() && (
                            <p className="px-2 text-gray-400 text-[13px]">
                                min(4 digits)
                            </p>
                        )}
                        <p
                            className={`text-red-500 text-[12px] px-2 h-[10px] items-center`}
                        >
                            <span
                                className={`${
                                    passwordMatcherVerify() ? "hidden" : "block"
                                }`}
                            >
                                Passwords do not match!!!
                            </span>
                        </p>
                    </div>
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input
                                id="terms"
                                type="checkbox"
                                checked
                                className="w-4 h-4 bg-gray-900 border border-gray-300 rounded focus:ring-1 focus:ring-gray-800 focus:border-gray-800"
                                required
                            />
                        </div>
                        <label
                            for="terms"
                            className="text-sm font-medium text-[#5c5c5c] ms-2"
                        >
                            I agree with the{" "}
                            <a
                                href="#"
                                className="text-gray-900 hover:underline"
                            >
                                terms and conditions
                            </a>
                        </label>
                    </div>
                    <button
                        disabled={loader}
                        className="w-full text-[14px] h-[35px] flex items-center justify-center text-center active:scale-95 text-white bg-gray-800 rounded-md"
                    >
                        {loader ? (
                            <HashLoader size={25} color="white" />
                        ) : (
                            "CREATE ACCOUNT"
                        )}
                    </button>
                    <p className="text-[13px] text-center text-black py-1">
                    Already have an account?
                    {" "}
                    <Link
                        className="text-[12px] font-medium hover:underline text-gray-900"
                        to={"/?page=login"}
                    >
                        LOGIN
                    </Link>
                </p>
                </form>
                
            </section>
            {/* <CastleBetFooter /> */}
        </main>
    );
}

export default Register;
