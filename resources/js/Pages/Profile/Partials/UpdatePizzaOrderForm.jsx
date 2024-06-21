import React from 'react';

import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm, Head } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';

import { Transition } from '@headlessui/react';

function UpdatePizzaOrderForm({pizza,className=''}) {
    const route = useRoute();
    const {data,setData,processing,errors,patch,recentlySuccessful} = useForm({
        size:pizza.size,
        crust:pizza.crust,
        toppings:pizza.toppings.join(','),
        status:pizza.status
    });


    const statusOptions=[
        'Ordered',
        'Prepping',
        'Baking',
        'Checking',
        'Ready'
    ];

    const submitHandler=async(e)=>{
        e.preventDefault();
        patch(route("pizzas.update",pizza.id),{preserveScroll:true});
    }

  return (
    <section className={className}>
        <header>
            <h2 className='text-lg font-medium text gray-900'>Order Information</h2>
            <p className='mt-1 text-sm text-gray-600'>
                View and change any information associated with this order
            </p>
        </header>
        <form
            onSubmit={submitHandler} 
            className='mt-6 space-y-6'>
            <div>
                <InputLabel htmlFor="size" value={"size"}/>
                <TextInput
                  id="size"
                  className="mt-1 block w-full"
                  value={data.size}
                  disabled
                />
            </div>

            <div>
                <InputLabel htmlFor="crust" value={"crust"}/>
                <TextInput
                  id="crust"
                  className="mt-1 block w-full"
                  value={data.crust}
                  disabled
                />
            </div>

            <div>
                <InputLabel htmlFor="toppings" value={"toppings"}/>
                <TextInput
                  id="toppings"
                  className="mt-1 block w-full"
                  value={data.toppings}
                  disabled
                />
            </div>

            <div>
                <InputLabel htmlFor="status" value={"status"}/>
                <select
                    onChange={(e)=>setData('status',e.target.value)}
                    name='status'
                    id="small" 
                    class="block w-full p-2 mb-6 text-sm text-gray-900 border 
                    border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500
                     focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                     dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                      dark:focus:border-blue-500"
                    >
                    <option value={data.status}>{data.status}</option>
                    {statusOptions.map((val)=><option value={val}>{val}</option>)}
                </select>
                <InputError className='mt-2' message={errors.message} />
            </div>

            <div className='flex items-center gap-4'>
                <PrimaryButton disabled={processing}>Save Changes</PrimaryButton>
                <Transition
                 show={recentlySuccessful}
                 enter='transition ease-in-out'
                 enterFrom='opacity-0'
                 leave='transition ease-in-out'
                 leaveTo='opacity-0'
                >
                    <p className='text-sm text-gray-600'>Saved</p>

                </Transition>
            </div>
        </form>
    </section>
  )
}

export default UpdatePizzaOrderForm;