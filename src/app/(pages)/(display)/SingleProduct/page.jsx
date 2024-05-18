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
import ProductForm from '../../../(components)/Forms/ProductForm'; // Adjust the path accordingly
import toast from 'react-hot-toast';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function StockDetails() {
  const router = useRouter();
  const [showProductForm, setShowProductForm] = useState(false);

  // Sample data for display purposes
  const product = {
    stockCode: 'STK123',
    stockName: 'Example Item',
    description: 'This is an example description of the stock item.',
    buyingPrice: 10.0,
    sellingPrice: 15.0,
    barcode: '1234567890123',
    quantity: 100,
  };

  const handleBack = () => {
    router.back();
  };
  const handleEditProduct = () => {
    setShowProductForm(!showProductForm);
  };

  const handleDeleteProduct = () => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete this product?',
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
                success: 'Product deleted successfully!',
                error: 'Error deleting product. Please try again.',
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
              Stock Details
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={handleEditProduct}
                className={`flex items-center text-white ${
                  showProductForm
                    ? 'bg-red-500 hover:bg-red-700 dark:bg-red-800 hover:animate-pulse animate-bounce'
                    : 'bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700'
                } flex items-center text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 dark:focus:ring-green-800`}
              >
                <FontAwesomeIcon
                  icon={showProductForm ? faTimes : faEdit} // Change icon based on showProductForm state
                  className="mr-2"
                />
                {showProductForm ? 'Close' : 'Edit'}
              </button>
              <button
                onClick={handleDeleteProduct}
                className="flex items-center text-white bg-red-300 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-300 dark:hover:bg-red-800 dark:focus:ring-red-800"
              >
                <FontAwesomeIcon icon={faTrash} className="mr-2" />
                Delete
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {' '}
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Stock Code:
              </span>
              <span className="text-gray-900 dark:text-white">
                {product.stockCode}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Stock Name:
              </span>
              <span className="text-gray-900 dark:text-white">
                {product.stockName}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Description:
              </span>
              <span className="text-gray-900 dark:text-white">
                {product.description}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Buying Price:
              </span>
              <span className="text-gray-900 dark:text-white">
                Ksh {product.buyingPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Selling Price:
              </span>
              <span className="text-gray-900 dark:text-white">
                Ksh {product.sellingPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Barcode:
              </span>
              <span className="text-gray-900 dark:text-white">
                {product.barcode}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 dark:text-gray-400">
                Quantity:
              </span>
              <span className="text-gray-900 dark:text-white">
                {product.quantity}
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
        {/* Display ProductForm to the right side when showProductForm is true */}
        {showProductForm && (
          <div className="w-full max-w-sm ml-8  bg-transparent">
            <ProductForm />
          </div>
        )}
      </div>
    </div>
  );
}