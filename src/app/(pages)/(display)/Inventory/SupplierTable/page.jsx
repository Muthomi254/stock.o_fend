'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Updated import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faPlus,
  faTimes,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import SupplierForm from '../../../../(components)/Forms/SupplierForm'; // Adjust the path accordingly
import SearchBar from '../../../../(components)/SearchBar/Search';
import AddModal from '../../../../ui-components/AddModal';
import {  Button } from 'flowbite-react';



export default function SupplierTable() {
  const router = useRouter();
    const [isModalOpen, setModalOpen] = useState(false);
  const [showSupplierForm, setShowSupplierForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const suppliers = [
    {
      supplierCode: 'SUP001', // Added supplierCode
      name: 'Supplier 1',
      companyName: 'Jumia',
      email: 'supplier1@example.com',
      phone: '+254799572055',
      address: '123 Main St, City, Country',
    },
    {
      supplierCode: 'SUP002', // Added supplierCode
      name: 'Supplier 2',
      companyName: 'Safaricom',
      email: 'supplier2@example.com',
      phone: '098-765-4321',
      address: '456 Market St, City, Country',
    },
    // Add more supplier objects as needed
  ];

  const handleAddSupplier = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleViewSupplier = () => {
    setLoading(true);
    router.push('/Inventory/SingleSupplier')
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 md:p-8 lg:p-12 ">
      <div className="w-full max-w-4xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            All Suppliers
          </h2>
          <Button onClick={handleAddSupplier}>
            <FontAwesomeIcon
              icon={faPlus} // Change icon based on showSupplierForm state
              className="mr-2"
            />
            Add Supplier
          </Button>
        </div>
        <div>
          <AddModal
            open={isModalOpen}
            title="Create Supplier"
            size="xl"
            styles="pills"
            className="bg-transparent "
            onClose={handleCloseModal}
          >
            <SupplierForm onClose={handleCloseModal} />
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
                  Supplier Code
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Company Name
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Email
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Phone
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Address
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map((supplier, index) => (
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
                    {supplier.supplierCode}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    {supplier.companyName}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    {supplier.email}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    {supplier.phone}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    {supplier.address}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    <button
                      onClick={handleViewSupplier}
                      className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2"
                      disabled={loading} // Disable button when loading
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
      {showSupplierForm && (
        <div className="pr-5 mr-5 ">
          <SupplierForm />
        </div>
      )}
    </div>
  );
}
