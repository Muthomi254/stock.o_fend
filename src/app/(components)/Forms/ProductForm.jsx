'use client';

import React, { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faTag,
  faInfo,
  faUser,
  faBarcode,
  faLayerGroup,
  faDollarSign,
  faMoneyBill,
  faCubes,
  faBoxOpen,
} from '@fortawesome/free-solid-svg-icons';

export default function ProductForm({ onClose, isUpdating }) {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const [selectedUnit, setSelectedUnit] = useState('PIECES'); // Default unit
  const [isAdding, setIsAdding] = useState(true); // New state variable
  const [formData, setFormData] = useState({
    stock_name: '',
    description: '',
    barcode: '',
    supplier: 'Jumia',
    category: 'Electronics',
    buying_price: '',
    selling_price: '',
    quantity: '',
    unit: 'PIECES',
  });

  const [tempProducts, setTempProducts] = useState([]); // Temporary list of products

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Check if tempProducts is empty and not in update mode
    // if (tempProducts.length === 0 && isAdding) {
    //   setLoading(false);
    //   return toast.error('Please add at least one product before saving.');
    // }

    // If in update mode, handle update directly
    if (isUpdating) {
      try {
        // Implement update logic here
        console.log('Updating product with data:', formData);
        setLoading(false); // Set loading state to false
        onClose(); // Close the form modal after updating
        toast.success('Product updated successfully!', { icon: '🔄' }); // Success toast
      } catch (error) {
        console.error('Error while updating product:', error);
        toast.error('Error while updating product. Please try again later.'); // Error toast
      }
      return; // Exit the function
    }

    // Check if form fields are valid before saving
    // if (!validateForm()) {
    //   setLoading(false);
    //   return toast.error('Please fill out all required fields.');
    // }

    if (isAdding) {
      try {
        // Implement add logic here using formData
        console.log('Adding new product with data:', formData);
        setLoading(false); // Set loading state to false
        onClose(); // Close the form modal after adding
        toast.success('Product added successfully!', { icon: '👍' }); // Success toast
      } catch (error) {
        console.error('Error while adding product:', error);
        toast.error('Error while adding product. Please try again later.'); // Error toast
      }
    } else {
      // Handle any other cases
    }
    setLoading(false); // Set loading state to false
  };

  const submitForm = async (formData) => {
    // Simulate form submission function
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(formData);
      }, 1000); // Simulate 1 second delay
    });
  };

  const handleUnitChange = (e) => {
    setSelectedUnit(e.target.value);
  };

  const handleDelete = (index) => {
    // Remove the product at the specified index from tempProducts
    const updatedProducts = [...tempProducts];
    updatedProducts.splice(index, 1);
    setTempProducts(updatedProducts);
  };
  const handleSave = () => {
    // Save the current form data temporarily
    const newProduct = { ...formData }; // Create a copy of formData
    setTempProducts([...tempProducts, newProduct]); // Add the new product to tempProducts
    console.log('Temporary Added data:', newProduct);
    toast.success('Product Added successfully!', {
      icon: '👍',
    });

    // Reset form fields to initial state
    setFormData({
      stock_name: '',
      description: '',
      barcode: '',
      supplier: '',
      category: 'electronics',
      buying_price: '',
      selling_price: '',
      quantity: '',
      unit: 'PIECES',
    });
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <form className="w-full max-w-lg mx-auto ml-5" ref={formRef}>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="stock_name"
              id="stock_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              value={formData.stock_name}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="stock_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Stock Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="description"
              id="description"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              value={formData.description}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="description"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="barcode"
              id="barcode"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              value={formData.barcode}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="barcode"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Barcode
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <select
              name="supplier"
              id="supplier"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-gray-100 mt-5  dark:bg-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              value={formData.supplier}
              onChange={handleChange}
              required
            >
              {/* Placeholder option */}
              <option value="Jumia">Jumia</option>
              <option value="Statpack">Statpack</option>
              <option value="Naivas">Naivas</option>
              <option value="Rosakid">Rosakid</option>
            </select>
            <label
              htmlFor="supplier"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Supplier
            </label>

            <div className="relative z-0 w-full mb-5 group">
              <select
                name="category"
                id="category"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-gray-100 mt-5  dark:bg-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                value={formData.category}
                onChange={handleChange}
                required
              >
                {/* Placeholder option */}
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Groceries">Groceries</option>
                <option value="Home">Home</option>
                <option value="Beauty">Beauty</option>
                <option value="Sports">Sports</option>
                <option value="Automotive">Automotive</option>
              </select>
              <label
                htmlFor="category"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Category
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="buying_price"
              id="buying_price"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              value={formData.buying_price}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="buying_price"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Buying Price
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="selling_price"
              id="selling_price"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              value={formData.selling_price}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="selling_price"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Selling Price
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 flex items-center group">
            <input
              type="number"
              name="quantity"
              id="quantity"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=""
              value={formData.quantity}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="quantity"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Quantity
            </label>
            <div className="relative z-0 w-full mb-5 group">
              <select
                id="unit"
                name="unit"
                value={selectedUnit}
                onChange={handleUnitChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-gray-100 mt-5  dark:bg-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                required
              >
                <option value="PIECES">Pieces</option>
                <option value="BOXES">Boxes</option>
                <option value="ROLLS">Rolls</option>
                <option value="METERS">Meters</option>
                <option value="CARTONS">Cartons</option>
                <option value="SQUARE_FEET">Square Feet</option>
                <option value="LITERS">Liters</option>
                <option value="KILOGRAMS">Kilograms</option>
                <option value="GRAMS">Grams</option>
              </select>
              <label
                htmlFor="unit"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Packaging
              </label>
            </div>
          </div>
          {!isUpdating ? (
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={handleSave}
            >
              Add
            </button>
          ) : null}
        </form>
        <div className="col-span-1 pl-10">
          <h2 className="text-lg font-bold mb-4">Added Products:</h2>
          <ol>
            {tempProducts.map((product, index) => (
              <li
                key={index}
                className={`border p-4 mb-4 rounded-lg shadow ${
                  index % 2 === 0
                    ? 'bg-gray-200 dark:bg-gray-800'
                    : 'bg-white dark:bg-gray-900'
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="font-bold text-lg">{index + 1}:</div>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faTag}
                      className="mr-1 text-green-900"
                    />{' '}
                    Stock Name: {product.stock_name}
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faInfo}
                      className="mr-1 text-green-900"
                    />{' '}
                    Description: {product.description}
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="mr-1 text-green-900"
                    />{' '}
                    Supplier: {product.supplier}
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faBarcode}
                      className="mr-1 text-green-900"
                    />{' '}
                    Barcode: {product.barcode}
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faLayerGroup}
                      className="mr-1 text-green-900"
                    />{' '}
                    Category: {product.category}
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faDollarSign}
                      className="mr-1 text-green-900"
                    />{' '}
                    Buying Price: {product.buying_price}
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faMoneyBill}
                      className="mr-1 text-green-900"
                    />{' '}
                    Selling Price: {product.selling_price}
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCubes}
                      className="mr-1 text-green-900"
                    />{' '}
                    Quantity: {product.quantity}
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faBoxOpen}
                      className="mr-1 text-green-900"
                    />{' '}
                    Unit: {product.unit}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="flex  justify-center items-center  ">
        <button
          type="button" /* Change type to "button" */
          onClick={handleSubmit}
          className=" text-white m-10 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          disabled={loading} // Disable the button when loading is true
        >
          {loading ? 'Saving...' : 'Save'}
        </button>
      </div>
    </div>
  );
}
