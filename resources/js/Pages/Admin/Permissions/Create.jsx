import React,{useEffect}from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { TfiAngleLeft } from "react-icons/tfi";


function Create() {

    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        name: '',
    });

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('permissions.store'));
    };

    return (
        <AdminLayout>
            <div>
                <div
                    className='w-full md:max-w-[1080px] mx-auto mt-8'>
                    <Link href={route("permissions.index")}>
                        <div className='w-[40px] text-[25px] text-white rounded-full bg-opacity-60 flex items-center justify-center h-[40px] bg-slate-500'>
                            <TfiAngleLeft />
                        </div>
                    </Link>
                    {/* form falls here */}
                    <form
                        onSubmit={submit}
                        className='max-w-[400px] mt-4 space-y-4'>
                        <div>
                            <InputLabel>permission name</InputLabel>
                            <TextInput
                                id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                placeholder="permission"
                                className="block w-full mt-1"
                                autoComplete="name"
                                isFocused={true}
                                onChange={handleOnChange}
                            />
                            <InputError message={errors.name} />
                        </div>
                        {/* submit button */}
                        <div className=''>
                            <PrimaryButton
                                disabled={processing}
                            >Create
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    )
}

export default Create;