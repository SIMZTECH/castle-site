import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import ListOfPermissionsTable from '@/Components/ListOfPermissionsTable';
import { Link } from '@inertiajs/react';


function AllPermissionScreen({permissions}) {
    return (
        <AdminLayout>
            <div>
                <div className='w-full md:max-w-[1080px] mx-auto mt-8'>
                    <div className='flex items-end justify-end'>
                        <Link
                            href={route("permissions.create")}
                            className='px-3 py-2 text-white bg-indigo-500 cursor-pointer hover:bg-indigo-700'>
                            Add Permission
                        </Link>
                    </div>
                </div>
                {/* table */}
                <ListOfPermissionsTable
                    permissionsObject={permissions}
                />
            </div>
        </AdminLayout>
    )
}

export default AllPermissionScreen