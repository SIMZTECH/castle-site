import React, { useContext, useEffect, useState } from 'react';
import ScreenContentLayout from '@/Layouts/CastleBetLayouts/ScreenContentLayout';
import LoginRegisterTabHeader from '@/Layouts/CastleBetLayouts/Navs/LoginRegisterTabHeader';
import {Link,useSearchParams,useNavigate} from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import PopupBox from './PopupBox';
import { authUserContext } from '@/Context/UserAuthenticationContext';
import { isNil } from 'lodash';


function Login({loginCallBackHandler,authStatus}) {
    const navigate=useNavigate();
    const {authUser}=useContext(authUserContext);
    const [searchParams,setSearchParams] = useSearchParams();
    const [loader, setLoader] = useState(false);
    const [showResPrompt,setShowResPrompt]=useState(false);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    // username: "0700700707",
    //     password: "7782",

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
    const onSubmitLogin = async (event) => {
        event.preventDefault();
        /**
         * :::::::::Implement a callback that reports to the parent::::::::::::
         */
        setLoader(true);
        loginCallBackHandler(formData); //will supply the login credentials to parent
    };

    /**
     *
     * @param {boolean} arg //these value comes from popupBox
     */
    const onClosePopupBox=(arg)=>{
        setShowResPrompt(arg);
    };




    useEffect(() => {
        if(authStatus) {
            setLoader(false);
            setShowResPrompt(true);
            if(authStatus?.auth_token &&(!isNil(authUser?.auth_token))){
                setTimeout(() => {
                    // navigate to home page
                    navigate("/?page=profile");
                },500);
            }
            return;
        }
        return;
    }, [authStatus]);

    useEffect(()=>{
        setShowResPrompt(false);
    },[authUser]);


    return (
        <div className='w-full p-4 pt-8 bg-gray-50 sm:'>
                {!showResPrompt && (
                    <section className="p-3 my-3 border sm:max-w-[450px] sm:mx-auto rounded-md bg-white w-full">
                        <form
                            onSubmit={onSubmitLogin}
                            className="flex flex-col pt-4 pb-8 font-poppins"
                        >
                            <div className="flex flex-col text-[12px] text-[#5c5c5c] mb-3">
                                <label htmlFor="phone">Mobile Number</label>
                                <input
                                    name="username"
                                    id="phone"
                                    type="text"
                                    onChange={onchangeInput}
                                    value={formData?.username}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-600 text-sm outline-none rounded-lg focus:ring-1 focus:ring-gray-800 focus:border-gray-800 block w-full p-2.5"
                                />
                            </div>
                            <div className="flex flex-col text-[12px] text-[#5c5c5c] mb-3">
                                <label htmlFor="phone">Password (Min-4)</label>
                                <input
                                    name="password"
                                    id="password"
                                    onChange={onchangeInput}
                                    type="password"
                                    required
                                    value={formData?.password}
                                    className="bg-gray-50 border border-gray-300 text-gray-600 text-sm outline-none rounded-lg focus:ring-1 focus:ring-gray-800 focus:border-gray-800 block w-full p-2.5"
                                />
                            </div>
                            <button
                                disabled={loader}
                                className="w-full text-[14px] h-[35px] flex items-center justify-center text-center active:scale-95 text-white bg-gray-800 rounded-md"
                            >
                                {loader ? (
                                    <HashLoader size={20} color="white" />
                                ) : (
                                    "LOGIN"
                                )}
                            </button>
                        </form>
                        <Link to={"/?page=password-reset"}>
                            <p className="my-1 text-center rounded-md text-gray-800 border font-extrabold hover:underline h-[35px] flex items-center justify-center">
                                RESET PASSWORD
                            </p>
                        </Link>
                        <p className="text-[13px] text-center text-black">
                            Don't have an account?
                            <Link
                                className="text-[12px] hover:underline text-gray-800 font-extrabold"
                                to={"/?page=register"}
                            >
                                JOIN NOW
                            </Link>
                        </p>
                    </section>
                )}
                {/*successfull or error login status modal */}
                <PopupBox
                    isOpen={showResPrompt}
                    onClose={onClosePopupBox}
                    response={authStatus}
                />
            </div>
    );
}

export default Login;
