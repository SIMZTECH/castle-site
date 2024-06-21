import React,{useEffect,useState}from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, router, useForm} from '@inertiajs/react';
import { TfiAngleLeft } from "react-icons/tfi";
import Multiselect from 'multiselect-react-dropdown';
import { route } from 'ziggy-js';

function Edit({role,permissions=[]}) {
  const [selected, setSelected] = useState((role.permissions));

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
  
    const { data, setData,patch, processing, errors, reset,recentlySuccessful} = useForm({
        name:role?.name,
        permissions:''
    });


    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };


    const submit = (e) => {
        e.preventDefault();

        patch(route('roles.update',role?.id));
    };

    const columns = [
      "permission id",
      "permission name",
      "guard name",
      "last modified"  
  ];

    useEffect(()=>{
      setData({...data,permissions:selected});
      
      // const interval=setInterval(()=>{
      //     router.reload({only:['role',"permissions"]});
      //     console.log(role.permissions);
      // },1000);

      //distroy object after moving to next page
      // return ()=>clearInterval(interval);
      
    },[selected]);

  return (
    <AdminLayout>
      <div>
        <div

          className='w-full md:max-w-[1080px] mx-auto mt-8'>
          <Link href={route("roles.index")}>
            <div className='w-[40px] text-[25px] text-white rounded-full bg-opacity-60 flex items-center justify-center h-[40px] bg-slate-500'>
              <TfiAngleLeft />
            </div>
          </Link>
          {/* form falls here */}
          <form
            onSubmit={submit}
            className='max-w-[400px] mt-4 space-y-4'>
            <div>
              <InputLabel>Role name</InputLabel>
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
              <InputError message={errors.name} />
            </div>
            {/* Multi-selector {assigning permissions to roles} */}
            <div>
              <Multiselect
                displayValue="value"
                onKeyPressFn={function noRefCheck() { }}
                onRemove={setSelected}
                onSearch={function noRefCheck() { }}
                onSelect={setSelected}
                options={multiSelectorOptionsGenerator(permissions)}
                selectedValues={selected}
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
          <div className='w-full'>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">#NO</th>
                    {columns.map((val, index) => <th key={index} scope="col" className="px-6 py-3">{val}</th>)}
                    <th scope="col" className="px-6 py-3">  </th>
                  </tr>
                </thead>
                <tbody>
                  {role.permissions.map((val, index) => (
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
                        <Link method='DELETE' as='button' href={route('roles.permission.destroy',[role?.id,val?.id])}>
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