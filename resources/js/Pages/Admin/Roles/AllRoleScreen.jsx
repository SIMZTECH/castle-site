import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import ListOfRolesTable from '@/Components/ListOfRolesTable';
import { Link } from '@inertiajs/react';

function AllRoleScreen({roles}) {
  return (
    <AdminLayout>
      <div>
        <div className='w-full md:max-w-[1080px] mx-auto mt-8'>
          <div className='flex items-end justify-end'>
            <Link 
              href={route("roles.create")}
              className='px-3 py-2 text-white bg-indigo-500 cursor-pointer hover:bg-indigo-700'>
                Add Role
            </Link>
          </div>
          <ListOfRolesTable
            rolesObject={roles}
          />
        </div>
      </div>
    </AdminLayout>
  )
}

export default AllRoleScreen