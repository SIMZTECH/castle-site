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
import { route } from 'ziggy-js';

const selectedValusesGenerator=(userPermissions=[],allPermissions=[])=>{
  const foundArray = userPermissions.filter(
    (userPpermission)=>allPermissions.filter(
      (allPermission)=>allPermission?.id==userPpermission?.id));
 return foundArray;
};

function Edit({user,roles=[],permissions=[]}) {
  const [selectedPermissions, setSelectedPermissions] = useState(selectedValusesGenerator(user?.permissions,permissions));
  const [selectedRoles, setSelectedRoles] = useState(selectedValusesGenerator(user?.roles,roles));
  const { data, setData,patch, processing, errors, reset,recentlySuccessful} = useForm({
    mobile_number:user?.mobile_number,
    roles:[],
    permissions:[]
});

const permissions_columns = [
  "permission id",
  "permission name",
  "guard name",
  "last modified"  
];

const roles_columns = [
  "role id",
  "role name",
  "guard name",
  "last modified"  
];

  const multiSelectorOptionsGenerator=(arrayObj=[])=>{
    const options=[];
    if(arrayObj){
      arrayObj.map((val)=>{
        options.push({ 
          label:val?.name, 
          value:val?.name,
          name:val?.name
        });
      })
    }
    return options;
  }
  
const handleOnChange = (event) => {
    setData(event.target.name,event.target.value);
};

const submit = (e) => {
    e.preventDefault();

    patch(route('users.update',user?.id));
};

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
            <div>
              <InputLabel>Mobile number</InputLabel>
              <TextInput
                id="mobile_number"
                type="text"
                name="mobile_number"
                value={data.mobile_number}
                placeholder="role"
                className="block w-full mt-1"
                autoComplete="phone"
                isFocused={true}
                onChange={handleOnChange}
              />
              <InputError message={errors.mobile_number} />
            </div>
            {/* multi selector for roles */}
            <div>
              <InputLabel>Assign roles</InputLabel>
              <Multiselect
                displayValue="value"
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
              >Update
              </PrimaryButton>
            </div>
          </form>
          {/* list of permissions associated with this user */}
          <div className='w-full mt-5 mb-5'>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">#NO</th>
                    {permissions_columns.map((val, index) => <th key={index} scope="col" className="px-6 py-3">{val}</th>)}
                    <th scope="col" className="px-6 py-3">  </th>
                  </tr>
                </thead>
                <tbody>
                  {user.permissions.map((val, index) => (
                    <tr key={val?.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {index + 1}
                      </th>
                      <td className="px-6 py-4">
                        {val?.id}
                      </td>
                      <td className="px-6 py-4">
                        {val?.name}
                      </td>
                      <td className="px-6 py-4">
                        {val?.guard_name}
                      </td>
                      <td className="px-6 py-4">
                        {val?.created_at}
                      </td>
                      <td className="flex gap-4 px-6 py-4">
                        <Link method='DELETE' as='button' href={route("users.permissions.destroy",[user?.id,val?.id])}>
                          revock
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* list of roles associated with the user */}
          <div className='w-full mt-5 mb-5'>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">#NO</th>
                    {roles_columns.map((val, index) => <th key={index} scope="col" className="px-6 py-3">{val}</th>)}
                    <th scope="col" className="px-6 py-3">  </th>
                  </tr>
                </thead>
                <tbody>
                  {user.roles.map((val, index) => (
                    <tr key={val?.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {index + 1}
                      </th>
                      <td className="px-6 py-4">
                        {val?.id}
                      </td>
                      <td className="px-6 py-4">
                        {val?.name}
                      </td>
                      <td className="px-6 py-4">
                        {val?.guard_name}
                      </td>
                      <td className="px-6 py-4">
                        {val?.created_at}
                      </td>
                      <td className="flex gap-4 px-6 py-4">
                        <Link method='DELETE' as='button' href={route("users.roles.destroy",[user?.id,val?.id])}>
                          revock
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>



    </AdminLayout>
  )
}

export default Edit;