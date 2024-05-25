'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faEdit,
  faTrash,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import SupplierForm from '../../../../(components)/Forms/SupplierForm'; // Adjust the path accordingly
import toast from 'react-hot-toast';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function SupplierDetails() {
  const router = useRouter();
  const [showSupplierForm, setShowSupplierForm] = useState(false);

  // Sample data for display purposes
   const supplier = {
     supplierCode: 'SUP001', // Added supplierCode
     name: 'Supplier 1',
     companyName: 'Duka',
     email: 'supplier@example.com',
     phone: '123-456-7890',
     address: '123 Main St, City, Country',
     stockName: '{product.stockName}',
   };


  const handleBack = () => {
    router.back();
  };

  const handleEditSupplier = () => {
    setShowSupplierForm(!showSupplierForm);
  };

  const handleDeleteSupplier = () => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete this supplier?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            // Simulate deletion process
            toast.promise(
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  // Assume deletion is successful
                  resolve();
                }, 1000);
              }),
              {
                loading: 'Deleting...',
                success: 'Supplier deleted successfully!',
                error: 'Error deleting supplier. Please try again.',
              }
            );
          },
        },
        {
          label: 'No',
        },
      ],
    });
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-8 flex">
        <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Supplier Details
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={handleEditSupplier}
                className={`flex items-center text-white ${
                  showSupplierForm
                    ? 'bg-red-500 hover:bg-red-700 dark:bg-red-800 hover:animate-pulse animate-bounce'
                    : 'bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700'
                } flex items-center text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 dark:focus:ring-green-800`}
              >
                <FontAwesomeIcon
                  icon={showSupplierForm ? faTimes : faEdit} // Change icon based on showSupplierForm state
                  className="mr-2"
                />
                {showSupplierForm ? 'Close' : 'Edit'}
              </button>
              <button
                onClick={handleDeleteSupplier}
                className="flex items-center text-white bg-red-300 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-300 dark:hover:bg-red-800 dark:focus:ring-red-800"
              >
                <FontAwesomeIcon icon={faTrash} className="mr-2" />
                Delete
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Supplier Code: {/* Add Supplier Code */}
              </span>
              <span className="text-gray-900 dark:text-white">
                {supplier.supplierCode}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Delivery Name:
              </span>
              <span className="text-gray-900 dark:text-white">
                {supplier.name}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Company Name:
              </span>
              <span className="text-gray-900 dark:text-white">
                {supplier.companyName}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Email:
              </span>
              <span className="text-gray-900 dark:text-white">
                {supplier.email}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Phone:
              </span>
              <span className="text-gray-900 dark:text-white">
                {supplier.phone}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Address:
              </span>
              <span className="text-gray-900 dark:text-white">
                {supplier.address}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Product Name:
              </span>
              <span className="text-gray-900 dark:text-white">
                {supplier.stockName}
              </span>
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={handleBack}
              className="flex items-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Back
            </button>
          </div>
        </div>
        {/* Display SupplierForm to the right side when showSupplierForm is true */}
        {showSupplierForm && (
          <div className="w-full max-w-sm ml-8  bg-transparent">
            <SupplierForm />
          </div>
        )}
      </div>
    </div>
  );
}
