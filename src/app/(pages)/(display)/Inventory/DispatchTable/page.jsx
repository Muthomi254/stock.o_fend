'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faPlus,
  faTimes,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../../../../(components)/SearchBar/Search';
import DispatchForm from '../../../../(components)/Forms/DispatchForm';
import AddModal from '../../../../ui-components/AddModal';
import { Button } from 'flowbite-react';

export default function DispatchTable() {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatches = [
    {
      dispatchId: 'DSP001',
      productName: 'Example Item 1',
      productCode: 'PRD001',
      quantityDispatched: 5,
      destination: 'Warehouse A',
      date: '2024-05-23',
    },
    {
      dispatchId: 'DSP002',
      productName: 'Example Item 2',
      productCode: 'PRD002',
      quantityDispatched: 10,
      destination: 'Warehouse B',
      date: '2024-05-24',
    },
    // Add more sample data if needed
  ];

  const handleAddDispatch = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // const fetchProductData = async () => {
  //   // Mocking a fetch request
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve({ data: 'Sample Data' });
  //     }, 2000);
  //   });
  // };

  const handleViewDispatch = async () => {
    setLoading(true);
    try {
      const data = await fetchProductData();
      console.log(data); // Handle the fetched data as needed
    } catch (error) {
      console.error('Error fetching Dispatch data:', error);
    } finally {
      setLoading(false);
    }

    router.push('/Inventory/SingleDispatch');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 md:p-8 lg:p-12">
      <div className="w-full max-w-4xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            All Dispatches
          </h2>
          <Button onClick={handleAddDispatch}>
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Make Dispatch
          </Button>
        </div>
        <div>
          <AddModal
            open={isModalOpen}
            title="Make Dispatch"
            size="2xl"
            className="bg-transparent"
            onClose={handleCloseModal}
          >
            <DispatchForm onClose={handleCloseModal} />
          </AddModal>
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
                  Dispatch ID
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Product Name
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Product Code
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Quantity Dispatched
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Destination
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
              {dispatches.map((dispatch, index) => (
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
                    {dispatch.dispatchId}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    {dispatch.productName}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    {dispatch.productCode}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    {dispatch.quantityDispatched}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    {dispatch.destination}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white text-sm">
                    {dispatch.date}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    <button
                      onClick={handleViewDispatch}
                      className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 flex items-center"
                      disabled={loading}
                    >
                      {loading ? (
                        <FontAwesomeIcon
                          icon={faSpinner}
                          className="animate-spin mr-2"
                        />
                      ) : (
                        <FontAwesomeIcon icon={faEye} className="mr-2" />
                      )}
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
