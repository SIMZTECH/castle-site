import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

import { Transition } from '@headlessui/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset,recentlySuccessful} = useForm({
        mobile_number:'',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="mobile_number" value="username" />

                    <TextInput
                        id="mobile_number"
                        type="text"
                        name="mobile_number"
                        value={data.mobile_number}
                        placeholder="mobile number"
                        className="mt-1 block w-full"
                        autoComplete="mobile"
                        isFocused={true}
                        onChange={handleOnChange}
                    />

                    <InputError message={errors.mobile_number} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={handleOnChange}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} onChange={handleOnChange} />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex space-y-2 flex-col items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton
                        className="w-[100%] text-center flex items-center justify-center" 
                        disabled={processing}>
                        Log in
                    </PrimaryButton>
                    {/* transition methods */}
                    <Transition
                        show={recentlySuccessful}
                        enter='transition ease-in-out'
                        enterFrom='opacity-0'
                        leave='transition ease-in-out'
                        leaveTo='opacity-0'
                    >
                        <p className='text-sm text-gray-600'>Submitting...</p>
                    </Transition>
                </div>
            </form>
        </GuestLayout>
    );
}
