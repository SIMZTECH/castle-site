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


function Edit({permission}) {
    const { data, setData,patch, processing, errors, reset,recentlySuccessful} = useForm({
        name:permission?.name,
    });

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        patch(route('permissions.update',permission?.id));
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
                        <InputLabel>Permission name</InputLabel>
                        <TextInput
                          id="name"
                          type="text"
                          name="name"
                          value={data.name}
                          placeholder="role"
                          className="block w-full mt-1"
                          autoComplete="name"
                          isFocused={true}
                          onChange={handleOnChange}
                        />
                        <InputError message={errors.name}/>
                      </div>
                      {/* submit button */}
                      <div className=''>
                          <PrimaryButton
                              disabled={processing}
                          >Update
                          </PrimaryButton>
                      </div>
                  </form>
            </div>
        </div>
    </AdminLayout>
  )
}

export default Edit;