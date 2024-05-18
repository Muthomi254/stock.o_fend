'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import close icon
import ProductForm from '../../../(components)/Forms/ProductForm'; // Adjust the path accordingly

export default function ProductTable() {
  const router = useRouter();
  const [showProductForm, setShowProductForm] = useState(false); // State to control visibility of ProductForm

  const products = [
    {
      stockName: 'Example Item 1',
      stockCode: 'STK001',
      barcode: '1234567890123',
      sellingPrice: 15.0,
      quantity: 10,
    },
    {
      stockName: 'Example Item 2',
      stockCode: 'STK002',
      barcode: '1234567890124',
      sellingPrice: 20.0,
      quantity: 5,
    },
    {
      stockName: 'Example Item 3',
      stockCode: 'STK003',
      barcode: '1234567890125',
      sellingPrice: 25.0,
      quantity: 8,
    },
    {
      stockName: 'Example Item 1',
      stockCode: 'STK001',
      barcode: '1234567890123',
      sellingPrice: 15.0,
      quantity: 10,
    },
    {
      stockName: 'Example Item 2',
      stockCode: 'STK002',
      barcode: '1234567890124',
      sellingPrice: 20.0,
      quantity: 5,
    },
    {
      stockName: 'Example Item 3',
      stockCode: 'STK003',
      barcode: '1234567890125',
      sellingPrice: 25.0,
      quantity: 8,
    },
    {
      stockName: 'Example Item 1',
      stockCode: 'STK001',
      barcode: '1234567890123',
      sellingPrice: 15.0,
      quantity: 10,
    },
    {
      stockName: 'Example Item 2',
      stockCode: 'STK002',
      barcode: '1234567890124',
      sellingPrice: 20.0,
      quantity: 5,
    },
    {
      stockName: 'Example Item 3',
      stockCode: 'STK003',
      barcode: '1234567890125',
      sellingPrice: 25.0,
      quantity: 8,
    },
    {
      stockName: 'Example Item 1',
      stockCode: 'STK001',
      barcode: '1234567890123',
      sellingPrice: 15.0,
      quantity: 10,
    },
    {
      stockName: 'Example Item 2',
      stockCode: 'STK002',
      barcode: '1234567890124',
      sellingPrice: 20.0,
      quantity: 5,
    },
    {
      stockName: 'Example Item 3',
      stockCode: 'STK003',
      barcode: '1234567890125',
      sellingPrice: 25.0,
      quantity: 8,
    },
    {
      stockName: 'Example Item 1',
      stockCode: 'STK001',
      barcode: '1234567890123',
      sellingPrice: 15.0,
      quantity: 10,
    },
    {
      stockName: 'Example Item 2',
      stockCode: 'STK002',
      barcode: '1234567890124',
      sellingPrice: 20.0,
      quantity: 5,
    },
    {
      stockName: 'Example Item 3',
      stockCode: 'STK003',
      barcode: '1234567890125',
      sellingPrice: 25.0,
      quantity: 8,
    },
  ];

  const handleAddProduct = () => {
    // Toggle the state to show/hide ProductForm
    setShowProductForm(!showProductForm);
  };

  const handleViewProduct = () => {
    // Navigate to SingleProduct page
    router.push('/SingleProduct');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 md:p-8 lg:p-12 ">
      <div className="w-full max-w-4xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            All Products
          </h2>
          <button
            onClick={handleAddProduct} // Call handleAddProduct on button click
            className={`flex items-center text-white ${
              showProductForm
                ? 'bg-red-600 hover:bg-red-700 dark:bg-red-600 animate-bounce hover:animate-pulse'
                : 'bg-blue-600 hover:bg-blue-700'
            } focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-4`}
          >
            <FontAwesomeIcon
              icon={showProductForm ? faTimes : faPlus} // Change icon based on showProductForm state
              className="mr-2"
            />
            {showProductForm ? 'Close' : 'Add'}{' '}
            {/* Change button text based on showProductForm state */}
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-400 dark:bg-gray-700">
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  #
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Stock Name
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Stock Code
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Barcode
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Quantity
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Selling Price
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
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
                    {product.stockName}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    {product.stockCode}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    {product.barcode}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    {product.quantity}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    Ksh {product.sellingPrice.toFixed(2)}
                  </td>
                  <td className="px-4 py-2 text-gray-900 dark:text-white">
                    <button
                      onClick={handleViewProduct}
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
      {/* Display ProductForm within a div when showProductForm is true */}
      {showProductForm && (
        <div className="pr-5 mr-5 ">
          <ProductForm />
        </div>
      )}
    </div>
  );
}
