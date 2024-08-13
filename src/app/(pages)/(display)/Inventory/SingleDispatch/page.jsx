'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faEdit,
  faTrash,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import DispatchForm from '../../../../(components)/Forms/DispatchForm';

const Dispatch = {
  dispatchId: 'DSP001',
  productName: 'Example Item 1',
  productCode: 'PRD001',
  barcode: '1234567890123', // Added barcode information
  quantityDispatched: 5,
  destination: 'Warehouse A',
  date: '2024-05-23',
};

export default function SingleDispatch() {
  const router = useRouter();
  const [showDispatchForm, setShowDispatchForm] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false); // Add isUpdating state

  const handleBack = () => {
    router.back();
  };

  const handleEditDispatch = () => {
    setShowDispatchForm(!showDispatchForm);
    setIsUpdating(!isUpdating); // Toggle isUpdating state
  };

  const handleDeleteDispatch = () => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete this dispatch?',
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
                success: 'Dispatch deleted successfully!',
                error: 'Error deleting dispatch. Please try again.',
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
      <div className="container mx-auto px-4 py-8 flex bg-gray-100 dark:bg-gray-900">
        <div className="w-full max-w-4xl rounded-lg shadow-lg p-8 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Single Dispatch
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={handleEditDispatch}
                className={`flex items-center text-white ${
                  showDispatchForm
                    ? 'bg-red-500 hover:bg-red-700 dark:bg-red-800 hover:animate-pulse animate-bounce'
                    : 'bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700'
                } focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 dark:focus:ring-green-800`}
              >
                <FontAwesomeIcon
                  icon={showDispatchForm ? faTimes : faEdit} // Change icon based on showDispatchForm state
                  className="mr-2"
                />
                {showDispatchForm ? 'Close' : 'Edit'}
              </button>
              <button
                onClick={handleDeleteDispatch}
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
                Dispatch ID:
              </span>
              <span className="text-gray-900 dark:text-white">
                {Dispatch.dispatchId}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Product Name:
              </span>
              <span className="text-gray-900 dark:text-white">
                {Dispatch.productName}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Product Code:
              </span>
              <span className="text-gray-900 dark:text-white">
                {Dispatch.productCode}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Barcode:
              </span>
              <span className="text-gray-900 dark:text-white">
                {Dispatch.barcode}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Quantity Dispatched:
              </span>
              <span className="text-gray-900 dark:text-white">
                {Dispatch.quantityDispatched}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Destination:
              </span>
              <span className="text-gray-900 dark:text-white">
                {Dispatch.destination}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Date:
              </span>
              <span className="text-gray-900 dark:text-white">
                {Dispatch.date}
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
        {/* Display DispatchForm to the right side when showDispatchForm is true */}
        {showDispatchForm && (
          <div className="w-full max-w-sm ml-8 p-2">
            <DispatchForm
              isUpdating={(isUpdating, setIsUpdating)}
              onClose={() => setShowProductForm(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
