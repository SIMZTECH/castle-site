import React from 'react';
import { Link } from '@inertiajs/react';

function ListOfPermissionsTable({permissionsObject}) {
    const columns = [
        "permission id",
        "permission name",
        "guard name",
        "last modified"  
    ];
  return (
    <div className='w-full md:max-w-[990px] mx-auto mt-8'>
          <div className="relative overflow-x-auto">
            
              <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" className="px-6 py-3">#NO</th>
                          {columns.map((val,index)=><th key={index} scope="col" className="px-6 py-3">{val}</th>)}
                          <th scope="col" className="px-6 py-3">  </th>
                      </tr>
                      
                  </thead>
                  
                  <tbody>
                      {permissionsObject.map((val,index) => (
                          <tr key={val?.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  {index+1}
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
                                <Link href={route('permissions.edit',val?.id)}>
                                    Edit
                                </Link>
                                <Link method='DELETE' as='button' href={route('permissions.destroy',val?.id)}>
                                    Delete
                                </Link>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </div>
  )
}

export default ListOfPermissionsTable