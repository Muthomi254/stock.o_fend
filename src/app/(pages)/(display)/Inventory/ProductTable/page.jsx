'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons'; // Import close icon
import ProductForm from '../../../../(components)/Forms/ProductForm'; // Adjust the path accordingly
import SearchBar from '../../../../(components)/SearchBar/Search';
import AddModal from '../../../../ui-components/AddModal'
import {  Button } from 'flowbite-react';

export default function ProductTable() {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const products = [
    {
      stockName: 'Example Item 1',
      stockCode: 'STK001',
      barcode: '1234567890123',
      category: 'Cars',
      sellingPrice: 15.0,
      quantity: 10,
    },
    {
      stockName: 'Example Item 2',
      stockCode: 'STK002',
      barcode: '1234567890124',
      category: 'Cars',
      sellingPrice: 20.0,
      quantity: 5,
    },
    {
      stockName: 'Example Item 3',
      stockCode: 'STK003',
      barcode: '1234567890125',
      category: 'Cars',
      sellingPrice: 25.0,
      quantity: 8,
    },
    {
      stockName: 'Example Item 1',
      stockCode: 'STK001',
      barcode: '1234567890123',
      category: 'Cars',
      sellingPrice: 15.0,
      quantity: 10,
    },
    {
      stockName: 'Example Item 2',
      stockCode: 'STK002',
      barcode: '1234567890124',
      category: 'Cars',
      sellingPrice: 20.0,
      quantity: 5,
    },
    {
      stockName: 'Example Item 3',
      stockCode: 'STK003',
      barcode: '1234567890125',
      category: 'Cars',
      sellingPrice: 25.0,
      quantity: 8,
    },
    {
      stockName: 'Example Item 1',
      stockCode: 'STK001',
      barcode: '1234567890123',
      category: 'Cars',
      sellingPrice: 15.0,
      quantity: 10,
    },
    {
      stockName: 'Example Item 2',
      stockCode: 'STK002',
      barcode: '1234567890124',
      category: 'Cars',
      sellingPrice: 20.0,
      quantity: 5,
    },
    {
      stockName: 'Example Item 3',
      stockCode: 'STK003',
      barcode: '1234567890125',
      category: 'Cars',
      sellingPrice: 25.0,
      quantity: 8,
    },
    {
      stockName: 'Example Item 1',
      stockCode: 'STK001',
      barcode: '1234567890123',
      category: 'Cars',
      sellingPrice: 15.0,
      quantity: 10,
    },
    {
      stockName: 'Example Item 2',
      stockCode: 'STK002',
      barcode: '1234567890124',
      category: 'Cars',
      sellingPrice: 20.0,
      quantity: 5,
    },
    {
      stockName: 'Example Item 3',
      stockCode: 'STK003',
      barcode: '1234567890125',
      category: 'Cars',
      sellingPrice: 25.0,
      quantity: 8,
    },
    {
      stockName: 'Example Item 1',
      stockCode: 'STK001',
      barcode: '1234567890123',
      category: 'Cars',
      sellingPrice: 15.0,
      quantity: 10,
    },
    {
      stockName: 'Example Item 2',
      stockCode: 'STK002',
      barcode: '1234567890124',
      category: 'Cars',
      sellingPrice: 20.0,
      quantity: 5,
    },
    {
      stockName: 'Example Item 3',
      stockCode: 'STK003',
      barcode: '1234567890125',
      category: 'Cars',
      sellingPrice: 25.0,
      quantity: 8,
    },
  ];

  const handleAddProduct = () => {
    // Toggle the state to show/hide ProductForm
    setModalOpen(true);
  };
  const handleOpenModal = () => {
    setModalOpen(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Replace this function with your actual async function
  const fetchProductData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Product Data Loaded');
      }, 1000); // Simulates an API call delay
    });
  };
 const handleViewProduct = async () => {
   setLoading(true);
   try {
     const data = await fetchProductData();
     console.log(data); // Handle the fetched data as needed
   } catch (error) {
     console.error('Error fetching product data:', error);
   } finally {
     setLoading(false);
   }
       router.push('/Inventory/SingleProduct');

 };
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 md:p-8 lg:p-12 ">
      <div className="w-full max-w-4xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            All Products
          </h2>
          <Button onClick={handleAddProduct}>
            {' '}
            <FontAwesomeIcon
              icon={faPlus} // Change icon based on showProductForm state
              className="mr-2"
            />
            Add Product
          </Button>
        </div>
        <div>
          <AddModal
            open={isModalOpen}
            title="Add Product"
            size="2xl"
            className="bg-transparent"
            onClose={handleCloseModal}
          >
            <ProductForm onClose={handleCloseModal} />
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
                  Stock Name
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Stock Code
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Barcode
                </th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                  Category
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
                    {product.category}
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
      {/* Display ProductForm within a div when showProductForm is true */}
    </div>
  );
}
