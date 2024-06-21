import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { TfiAngleDown } from "react-icons/tfi";
import { flg_zambia } from '@/assets/flags/worldFlags';

export default function Register() {
    
    const { data, setData, post, processing, errors, reset } = useForm({
        mobile_number: '',
        password: '',
        password_confirmation:'',
        remember:''
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="username" value="Username" />
                    <div class="flex h-[40px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg">
                        <button
                            type="button"
                            className="flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none"
                        >
                            <div className='flex items-center gap-1'>
                                <figure className='w-[25px] h-[25px] flex items-center justify-center'>
                                    <img src={flg_zambia} className='object-cover'/>
                                </figure>
                                <p>+260</p>
                            </div>
                            <TfiAngleDown />
                        </button>
                        <input
                            id="mobile_number"
                            name="mobile_number"
                            value={data.mobile_number}
                            placeholder='phone number'
                            className=" w-full focus:outline-none border-0 focus:border-[2px] focus:border-r-md focus:border-gray-50"
                            autoComplete="phone"
                            isFocused={true}
                            onChange={handleOnChange}
                            required
                        />
                    </div>
                    <InputError message={errors.mobile_number} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        placeholder='4 digit'
                        className="block w-full mt-1"
                        autoComplete="new-password"
                        onChange={handleOnChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="block w-full mt-1"
                        autoComplete="new-password"
                        onChange={handleOnChange}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex flex-col items-center justify-end gap-3 mt-4">
                    <Link
                        href={route('login')}
                        className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="flex items-center justify-center w-full" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
