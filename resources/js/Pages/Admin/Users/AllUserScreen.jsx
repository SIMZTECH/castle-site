import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import ListOfUsersTable from '@/Components/ListOfUsersTable';
import { Link } from '@inertiajs/react';

function AllUserScreen({users}) {
 
  return (
    <AdminLayout>
      <div>
        <div className='w-full md:max-w-[1080px] mx-auto mt-8'>
          <div className='flex items-end justify-end'>
            <Link
              href={route("users.create")}
              className='px-3 py-2 text-white bg-indigo-500 cursor-pointer hover:bg-indigo-700'>
              New User
            </Link>
          </div>
          {/* display a table of content */}
          <ListOfUsersTable
            usersObject={users}
          />
        </div>
      </div>
    </AdminLayout>
  )
}

export default AllUserScreen;