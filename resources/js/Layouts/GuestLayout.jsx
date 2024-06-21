import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import soccerImg from '../../images/lottieFile_bola.gif';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col gap-10 sm:justify-center items-center pt-2 sm:pt-0 bg-gray-100">
            {/* <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div> */}
            <div className="w-full sm:max-w-sm mt-2 px-6 py-4 pb-8 border-b-black border-b-[5px] 
            bg-white shadow-md overflow-hidden sm:rounded-lg">
                {/* added manually for overriding */}
                <div className='relative flex items-center justify-center mb-4'>
                     <img src={soccerImg} className=''/>   
                </div>
                {children}
            </div>

            {/* simple footer */}
            <span className='text-[13px] text-[#5c5c5c]'>Powered by castle</span>
        </div>
    );
}
