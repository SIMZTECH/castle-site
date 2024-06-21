import React, { useEffect, useRef } from "react";
import { BiSolidError } from "react-icons/bi";
import { IoMdCheckmarkCircle} from "react-icons/io";
import { authUserContext } from "@/Context/UserAuthenticationContext";
import { useContext } from "react";

function PopupBox({isOpen,onClose,response }) {
    const {authUser}=useContext(authUserContext);
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            modalRef.current.classList.remove("hidden");
        } else {
            modalRef.current.classList.add("hidden");
        }
    }, [isOpen]);

    return (
        <section
            ref={modalRef}
            className="flex flex-col flex-1 h-full gap-1 p-5 font-poppins"
        >
            <div className="flex flex-col items-center justify-center p-2 pb-4 mb-1 bg-white rounded-md shadow-popup cursor-pointer">
                <p
                    className={`text-[30px]  ${
                        response?.auth_token ? "text-green-700" : "text-red-600"
                    }`}
                >
                    {response?.auth_token ? (
                        <IoMdCheckmarkCircle />
                    ) : (
                        <BiSolidError />
                    )}
                </p>
                {!response?.auth_token && (
                    <p className="text-[11px]">
                        Log in failed, something went wrong
                    </p>
                )}
                {response?.auth_token && (
                    <p className="text-[11px]">
                        You have successfully logged in
                    </p>
                )}
            </div>
            {/* error msg */}
            {!response?.auth_token && (
                <p className="text-[10px] text-black font-medium">
                    Reason:{" "}
                    <span className="font-normal text-red-600">
                        {response?.details?.Message}
                    </span>
                </p>
            )}
            {/* hi message */}
            {response?.auth_token && (
                <p className="text-[10px]">{`👋Hi ${authUser?.first_name},Welcome back!!`}</p>
            )}

            {/* buttons */}
            {!response?.auth_token && (
                <button
                    onClick={() => onClose(false)} //remove the error prompt
                    className="h-[30px] flex items-center justify-center active:scale-95 text-center text-[12px] cursor-pointer text-white bg-black rounded-sm"
                >
                    Try again
                </button>
            )}
        </section>
    );
}

export default PopupBox;
