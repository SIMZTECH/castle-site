import React from 'react';
import { useRoute } from 'ziggy-js';
// import { Ziggy } from './ziggy.js';


function Table({ items, columns, primary, action }) {
    const route = useRoute();
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">{primary}</th>
                        {columns.map((column)=><th key={column} scope="col" className="px-6 py-3">{column}</th>)}
                        <th scope="col" className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                #{item.id}
                            </th>
                            {/* table data */}
                            {columns.map((column)=><td className="px-6 py-4">{item[column]}</td>)}
                            {/* action */}
                            <td className="px-6 py-4">
                                <a 
                                 href={route(action,item.id)}

                                    className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                                >View Details</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table