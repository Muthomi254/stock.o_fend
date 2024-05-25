"use client";

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
import ReturnForm from '../../../../(components)/Forms/ReturnForm';


const Return = {
  returnCode: 'RTN001',
  productName: 'Example Item 1',
  productCode: 'PRD001',
  barcode: '1234567890123', // Added barcode information
  quantityReturned: 3,
  expectedRefund: 45.0,
  date: '2024-05-23',
};

export default function SingleReturn() {
  const router = useRouter();
  const [showReturnForm, setShowReturnForm] = useState(false);

  const handleBack = () => {
    router.back();
  };

  const handleEditReturn = () => {
    setShowReturnForm(!showReturnForm);
  };

  const handleDeleteReturn = () => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete this return?',
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
                success: 'Return deleted successfully!',
                error: 'Error deleting return. Please try again.',
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
      <div className="container mx-auto px-4 py-8 flex bg-gray-100 dark:bg-gray-900 ">
        <div className="w-full max-w-4xl rounded-lg shadow-lg p-8 flex flex-col justify-center">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Single Return
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={handleEditReturn}
                className={`flex items-center text-white ${
                  showReturnForm
                    ? 'bg-red-500 hover:bg-red-700 dark:bg-red-800 hover:animate-pulse animate-bounce'
                    : 'bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700'
                } flex items-center text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 dark:focus:ring-green-800`}
              >
                <FontAwesomeIcon
                  icon={showReturnForm ? faTimes : faEdit} // Change icon based on showReturnForm state
                  className="mr-2"
                />
                {showReturnForm ? 'Close' : 'Edit'}
              </button>
              <button
                onClick={handleDeleteReturn}
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
                Return Code:
              </span>
              <span className="text-gray-900 dark:text-white">
                {Return.returnCode}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Product Name:
              </span>
              <span className="text-gray-900 dark:text-white">
                {Return.productName}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Product Code:
              </span>
              <span className="text-gray-900 dark:text-white">
                {Return.productCode}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Barcode:
              </span>
              <span className="text-gray-900 dark:text-white">
                {Return.barcode}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Quantity Returned:
              </span>
              <span className="text-gray-900 dark:text-white">
                {Return.quantityReturned}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Expected Refund:
              </span>
              <span className="text-gray-900 dark:text-white">
                Ksh {Return.expectedRefund.toFixed(2)}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Date:
              </span>
              <span className="text-gray-900 dark:text-white">
                {Return.date}
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
        {/* Display ReturnForm to the right side when showReturnForm is true */}
        {showReturnForm && (
          <div className="w-full max-w-sm ml-8 p-2">
            <ReturnForm />
          </div>
        )}
      </div>
    </div>
  );
}
