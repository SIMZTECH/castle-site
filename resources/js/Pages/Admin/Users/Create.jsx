import React,{useEffect,useState}from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { TfiAngleLeft } from "react-icons/tfi";
import Multiselect from 'multiselect-react-dropdown';

const selectedValusesGenerator=(userPermissions=[],allPermissions=[])=>{
  const foundArray = userPermissions.filter(
    (userPpermission)=>allPermissions.filter(
      (allPermission)=>allPermission?.id==userPpermission?.id));
 return foundArray;
};


function Create({roles,permissions}) {
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
    mobile_number: '',
    password:'',
    confirm_password:'',
    region:'ZM',
    roles:[],
    permissions:[]
  });

 
  const handleOnChange = (event) => {
    setData(event.target.name,event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route('users.store'));
  };

  /**
   * 
   * @param {Array} arrayObj 
   * @returns []
   */
  const multiSelectorOptionsGenerator=(arrayObj)=>{
    const options=[];
    if(arrayObj.length>0){
      arrayObj.map((val)=> options.push({ 
        label:val?.name, 
        value:val?.name,
        name:val?.name
      }))
    };
    
    return options;
  }

  useEffect(()=>{
  
    setData({...data,permissions:selectedPermissions,roles:selectedRoles});  
  },[selectedRoles,selectedPermissions]);

  return (
    <AdminLayout>
      <div>
        <div
          className='w-full md:max-w-[1080px] mx-auto mt-8'>
          <Link href={route("users.index")}>
            <div className='w-[40px] text-[25px] text-white rounded-full bg-opacity-60 flex items-center justify-center h-[40px] bg-slate-500'>
              <TfiAngleLeft />
            </div>
          </Link>
          {/* form falls here */}
          <form
            onSubmit={submit}
            className='max-w-[400px] mt-4 space-y-4'>
            <div className=''>
              {/* mobile number */}
              <InputLabel>Username</InputLabel>
              <TextInput
                id="mobile_number"
                type="text"
                name="mobile_number"
                value={data.name}
                placeholder="mobile number"
                className="block w-full mt-1 mb-3"
                autoComplete="phone"
                isFocused={true}
                onChange={handleOnChange}
              />
              <InputError message={errors.mobile_number} />
              {/* password */}
              <InputLabel>Password</InputLabel>
              <TextInput
                id="password"
                type="password"
                name="password"
                value={data.password}
                placeholder="password"
                className="block w-full mt-1 mb-3"
                autoComplete="password"
                isFocused={true}
                onChange={handleOnChange}
              />
              <InputError message={errors.password} />
              {/* confirm password*/}
              <InputLabel>confirm password</InputLabel>
              <TextInput
                id="confirm_password"
                type="password"
                name="confirm_password"
                value={data.confirm_password}
                placeholder="password"
                className="block w-full mt-1 mb-2"
                autoComplete="password"
                isFocused={true}
                onChange={handleOnChange}
              />
              <InputError message={errors.confirm_password} />
            </div>
             {/* multi selector for roles */}
             <div>
              <InputLabel>Assign roles</InputLabel>
              <Multiselect
                displayValue="name"
                onKeyPressFn={function noRefCheck() { }}
                onRemove={setSelectedRoles}
                onSearch={function noRefCheck() { }}
                onSelect={setSelectedRoles}
                options={multiSelectorOptionsGenerator(roles)}
                selectedValues={selectedRoles}
              />
            </div>
            {/* multi selector for permissions */}
            <div>
              <InputLabel>Assign permissions</InputLabel>
              <Multiselect
                displayValue="value"
                onKeyPressFn={function noRefCheck() { }}
                onRemove={setSelectedPermissions}
                onSearch={function noRefCheck() { }}
                onSelect={setSelectedPermissions}
                options={multiSelectorOptionsGenerator(permissions)}
                selectedValues={selectedPermissions}
              />
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

export default Create