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
            <div className="flex flex-col items-center justify-center p-2 py-5 pb-4 mb-3 bg-white rounded-md cursor-pointer shadow-popup">
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
                    <p className="text-[12px] text-red-600">
                        {response?.details?.Message}
                    </p>
                )}
                {response?.auth_token && (
                    <p className="text-[12px] text-green-700">
                        You have successfully logged in
                    </p>
                )}
            </div>
         
            {/* hi message */}
            {response?.auth_token && (
                <p className="text-[10px]">{`👋Hi ${authUser?.first_name},Welcome back!!`}</p>
            )}

            {/* buttons */}
            {!response?.auth_token && (
                <button
                    onClick={() => onClose(false)} //remove the error prompt
                    className="p-2.5 rounded-md flex items-center justify-center active:scale-95 text-center text-[12px] cursor-pointer text-white bg-gray-900"
                >
                    Try again
                </button>
            )}
        </section>
    );
}

export default PopupBox;
