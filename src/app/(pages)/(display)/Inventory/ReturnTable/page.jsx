"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../../../../(components)/SearchBar/Search';
import ReturnForm from '../../../../(components)/Forms/ReturnForm';


export default function ReturnTable() {
  const router = useRouter();
  const [showReturnForm, setShowReturnForm] = useState(false);

  const returns = [
    {
      returnId: 'RTN001',
      productName: 'Example Item 1',
      productCode: 'PRD001',
      quantityReturned: 3,
      expectedRefund: 45.0,
      date: '2024-05-23',
    },
    {
      returnId: 'RTN002',
      productName: 'Example Item 2',
      productCode: 'PRD002',
      quantityReturned: 2,
      expectedRefund: 40.0,
      date: '2024-05-24',
    },
    // Add more sample data if needed
  ];

  const handleAddReturn = () => {
    setShowReturnForm(!showReturnForm);
  };

  const handleViewReturn = () => {
    router.push('/Inventory/SingleReturn');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 md:p-8 lg:p-12">
      <div className="w-full max-w-4xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            All Returns
          </h2>
          <button
            onClick={handleAddReturn}
            className={`flex items-center text-white ${
              showReturnForm
                ? 'bg-red-600 hover:bg-red-700 dark:bg-red-600 animate-bounce hover:animate-pulse'
                : 'bg-blue-600 dark:bg-blue-600  hover:bg-blue-700'
            } focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:focus:ring-blue-800 mr-4`}
          >
            <FontAwesomeIcon
              icon={showReturnForm ? faTimes : faPlus}
              className="mr-2"
            />
            {showReturnForm ? 'Close' : 'Add'}
          </button>
        </div>
        <div className="overflow-x-auto">
          <SearchBar />

          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-400 dark:bg-gray-700">
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  #
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Return ID
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Product Name
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Product Code
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Quantity Returned
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Expected Refund
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Date
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {returns.map((ret, index) => (
                <tr
                  key={index}
                  className={`border-b ${
                    index % 2 === 0
                      ? 'bg-gray-200 dark:bg-gray-800'
                      : 'bg-white dark:bg-gray-900'
                  }`}
                >
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    {ret.returnId}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    {ret.productName}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    {ret.productCode}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    {ret.quantityReturned}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    {ret.expectedRefund}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white text-sm">
                    {ret.date}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    <button
                      onClick={handleViewReturn}
                      className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2"
                    >
                      <FontAwesomeIcon icon={faEye} className="mr-2" />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showReturnForm && (
        <div className="pr-5 mr-5">
          {/* You can include the ReturnForm component here */}
          <ReturnForm/>
        </div>
      )}
    </div>
  );
}
