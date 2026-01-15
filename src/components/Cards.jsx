import React from 'react'
import Date from './Date'
import { MdFilterList } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiCheckDouble } from "react-icons/bi";
import { Select } from 'antd';
import InventoryTable from './InventoryTable';
import ProductTable from './ProductTable';
import Barchart from './Barchart';
const Cards = () => {
    return (
        <div className=''>
            <div className='w-full flex justify-end px-3 mt-2 max-md:flex max-md:flex-col  '>
                <div><Date className="text-gray-800 max-md:text-center" /></div>
            </div>
            <div className='w-full mt-4 px-2 flex gap-1 h-screen'>
                <div className='w-[640px] bg-gray-50 rounded-lg border border-gray-300 h-screen max-sm:flex max-md:flex-col'>
                    <div className='flex w-full justify-between px-2 py-2 max-md:flex-col '>
                        <div className='w-[250px]  rounded-xl border border-gray-200 bg-white '>
                            <div className='w-full text-center'>
                                <h1 className='font-bold bg-indigo-500 py-2 rounded-t-lg'>Outstanding Orders</h1>
                            </div>
                            <div className='w-full flex flex-col gap-4 p-3'>
                                <div className='flex justify-between px-2 '><span className='font-medium text-gray-600'>Qty</span><span className='font-medium text-gray-600'>96,00</span></div>
                                <div className='flex justify-between px-2 '><span className='font-medium text-gray-600'>M.tons</span><span className='font-medium text-gray-600'>5,220.588</span></div>
                                <div className='flex justify-between px-2 '><span className='font-medium text-gray-600'>No Of Parties</span><span className='font-medium text-gray-600' >205</span></div>
                            </div>
                        </div>
                        <div className='w-[250px] bg-white rounded-xl border border-gray-200 '>
                            <div className='w-full text-center'>
                                <h1 className='font-bold bg-amber-500 py-2 rounded-t-lg'>Outstanding Orders</h1>
                            </div>
                          
                            <div className='w-full flex flex-col gap-4 p-3'>
                                <div className='flex justify-between px-2 '><span className='font-medium text-gray-600'>Qty</span><span className='font-medium text-gray-600'>96,00</span></div>
                                <div className='flex justify-between px-2  '><span className='font-medium text-gray-600'>M.tons</span><span className='font-medium text-gray-600'>5,220.588</span></div>
                                <div className='flex justify-between px-2 '><span className='font-medium text-gray-600'>No Of Parties</span><span className='font-medium text-gray-600'>205</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="mt-2 p-1 ">
                            <table className="w-full border-collapse border border-gray-800 text-sm font-sans">
                                <thead>
                                    <tr>
                                        <td className="border  border-gray-400  p-2"><span className='font-medium'>Delivery Due</span></td>
                                        <td className="border  border-gray-400  p-2"><span className='font-medium'>Qty</span></td>
                                        <td className="border  border-gray-400  p-2"><span className='font-medium'>M.Tons</span></td>
                                        <td className="border  border-gray-400  p-2"><span className='font-medium'>No Of Parties</span></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border  border-gray-400  p-2">Due Upto Today (Jan 14 14,2026)</td>
                                        <td className="border  border-gray-400  p-2">16,000.00</td>
                                        <td className="border  border-gray-400  p-2">870.10</td>
                                        <td className="border  border-gray-400  text-right px-2">20</td>

                                    </tr>
                                    <tr>
                                        <td className="border  border-gray-400  p-2">Due in Next 1 To 2 Days (Jan 15 Jan 16,2026)</td>
                                        <td className="border  border-gray-400  p-2">16,000.00</td>
                                        <td className="border  border-gray-400  p-2">870.10</td>
                                        <td className="border  border-gray-400  text-right px-2">15</td>

                                    </tr>
                                    <tr>
                                        <td className="border border-gray-400 p-2">Due in Next 3 To 4 Days (Jan 17 Jan 18,2026)</td>
                                        <td className="border  border-gray-400  p-2">16,000.00</td>
                                        <td className="border  border-gray-400  p-2">870.10</td>
                                        <td className="border  border-gray-400  text-right px-2">40</td>

                                    </tr>
                                    <tr>
                                        <td className="border  border-gray-400  p-2">Due in Next 1 To 2 Days (Jan 19 Jan 20,2026)</td>
                                        <td className="border  border-gray-400  p-2">16,000.00</td>
                                        <td className="border  border-gray-400  p-2">870.10</td>
                                        <td className="border  border-gray-400  text-right px-2">30</td>

                                    </tr>
                                    <tr>
                                        <td className="border  border-gray-400  p-2">Due in Next 6 Days (Jan 21 Jan 22,2026)</td>
                                        <td className="border  border-gray-400  p-2">16,000.00</td>
                                        <td className="border  border-gray-400  p-2">870.10</td>
                                        <td className="border  border-gray-400  text-right px-2">20</td>

                                    </tr>
                                    <tr>
                                        <td className="border  border-gray-400  p-2">Due After 7 Days (Jan 22,2026 and beyon)</td>
                                        <td className="border  border-gray-400  p-2">16,000.00</td>
                                        <td className="border  border-gray-400  p-2">870.10</td>
                                        <td className="border  border-gray-400  text-right px-2">80</td>

                                    </tr>
                                    <tr>
                                        <td className="border  border-gray-400  p-2"><span className='font-medium'>Total</span></td>
                                        <td className="border  border-gray-400  p-2"><span className='font-medium'>96,000.00</span></td>
                                        <td className="border  border-gray-400  p-2"><span className='font-medium'>5,220.59</span></td>
                                        <td className="border  border-gray-400  text-right px-2"><span className='font-medium'>205</span></td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='w-[640px] bg-gray-300 rounded-2xl'>
                  <InventoryTable />
                </div>
            </div>
             <div className='w-full mt-4 px-2 flex gap-1 h-screen'>
                <div className='w-[640px] bg-gray-200 rounded-lg  h-screen'>
              <ProductTable />
                </div>
                <div className='w-[640px] bg-white rounded-2xl'>
                 <div className='bg-gray-50 h-screen rounded-lg '>
                     <Barchart />
                 </div>
                </div>
            </div>
        </div>
    )
}

export default Cards