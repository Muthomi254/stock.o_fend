'use client';

import React, { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import { useForm, Controller, useFormState } from 'react-hook-form';
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
  const [tempProducts, setTempProducts] = useState([]); // Temporary list of products


  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm();


const onSubmit = async (formData) => {
  setLoading(true);

  if (!isUpdating) {
    // Adding products
    try {
      if (tempProducts.length === 0) {
        setLoading(false);
        return toast.error('Please add at least one product before saving.');
      }

      // Implement add logic here using tempProducts
      // Simulate form submission
      await submitForm(tempProducts);
      console.log('Saving new products with data:', tempProducts);
      setLoading(false); // Set loading state to false
      onClose(); // Close the form modal after Saving
      toast.success('Products Saved successfully!', { icon: '👍' }); // Success toast
    } catch (error) {
      console.error('Error while Saving products:', error);
      toast.error('Error while Saving products. Please try again later.'); // Error toast
      setLoading(false); // Set loading state to false in case of error
    }
  } else {
    // Updating products
    try {
      // Validate required fields
      const requiredFields = [
        'stock_name',
        'supplier',
        'buying_price',
        'selling_price',
        'quantity',
      ];
      for (const field of requiredFields) {
        if (!formData[field]) {
          setLoading(false);
          return toast.error(
            `${field.replace('_', ' ').toUpperCase()} is required.`
          );
        }
      }

      // Simulate form submission
      await submitForm(formData);

      // Implement update logic here using formData
      console.log('Updating product with data:', formData);
      setLoading(false); // Set loading state to false
      onClose(); // Close the form modal after updating
      toast.success('Product updated successfully!', { icon: '📝' }); // Success toast
    } catch (error) {
      console.error('Error while updating product:', error);
      toast.error('Error while updating product. Please try again later.'); // Error toast
      setLoading(false); // Set loading state to false in case of error
    }
  }
};


  const submitForm = async (formData) => {
    // Simulate form submission function
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(formData);
      }, 1000); // Simulate 1 second delay
    });
  };

  const handleDelete = (index) => {
    // Remove the product at the specified index from tempProducts
    const updatedProducts = [...tempProducts];
    updatedProducts.splice(index, 1);
    setTempProducts(updatedProducts);
  };

  const handleAdd = async (data) => {
    // Check for required fields
        const formData = getValues();
    if (
      !formData.stock_name ||
      !formData.supplier ||
      !formData.buying_price ||
      !formData.selling_price
    ) {
      toast.error('Please fill out the form!', {
        icon: '❌',
      });
      return; // Exit the function if any required field is missing
    }

    try {
      // Save the current form data temporarily
      const newProduct = { ...data }; // Create a copy of formData
      setTempProducts([...tempProducts, newProduct]); // Add the new product to tempProducts
      console.log('Temporary Added data:', newProduct);
      toast.success('Product added successfully!', {
        icon: '👍',
      });

      // Reset form fields to initial state
      reset({
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
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form. Please try again later.', {
        icon: '❌',
      });
    }
  };

  // const handleUnitChange = (e) => {
  //   setSelectedUnit(e.target.value);
  // };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <form
          className="w-full max-w-lg mx-auto ml-5"
          // onSubmit={handleSubmit(onSubmit)}
          ref={formRef}
        >
          {/* Stock Name */}
          <div className="relative z-0 w-full mb-5 group">
            <Controller
              name="stock_name"
              control={control}
              defaultValue=""
              rules={{ required: isUpdating }}
              render={({ field }) => (
                <>
                  <input
                    type="text"
                    {...field}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    placeholder=" "
                    required={isUpdating}
                  />
                  <label
                    htmlFor="stock_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Stock Name
                  </label>
                </>
              )}
            />
            {errors.stock_name && (
              <span className="text-red-500">Stock Name is required</span>
            )}
          </div>
          {/* Description */}
          <div className="relative z-0 w-full mb-5 group">
            <Controller
              name="description"
              control={control}
              defaultValue=""
              rules={{ required: isUpdating }}
              render={({ field }) => (
                <>
                  <input
                    type="text"
                    {...field}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    placeholder=" "
                    required={isUpdating}
                  />
                  <label
                    htmlFor="description"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Description
                  </label>
                </>
              )}
            />
            {errors.description && (
              <span className="text-red-500">Description is required</span>
            )}
          </div>
          {/* Barcode */}
          <div className="relative z-0 w-full mb-5 group">
            <Controller
              name="barcode"
              control={control}
              defaultValue=""
              rules={{ required: isUpdating }}
              render={({ field }) => (
                <>
                  <input
                    type="text"
                    {...field}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    placeholder=" "
                    required={isUpdating}
                  />
                  <label
                    htmlFor="barcode"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Barcode
                  </label>
                </>
              )}
            />
            {errors.barcode && (
              <span className="text-red-500">Barcode is required</span>
            )}
          </div>
          {/* Supplier */}
          <div className="relative z-0 w-full mb-5 group">
            <Controller
              name="supplier"
              control={control}
              defaultValue="Jumia"
              rules={{ required: isUpdating }}
              render={({ field }) => (
                <div>
                  <select
                    {...field}
                    className="block py-2.5 px-0 w-full  text-sm text-gray-900 dark:text-gray-100 mt-5  dark:bg-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    required={isUpdating}
                  >
                    <option value="Jumia">Jumia</option>
                    <option value="Statpack">Statpack</option>
                    <option value="Naivas">Naivas</option>
                    <option value="Rosakid">Rosakid</option>
                    <option value="Masoko">Masoko</option>
                    <option value="Sokowatch">Sokowatch</option>
                  </select>
                  <label
                    htmlFor="supplier"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Supplier
                  </label>
                </div>
              )}
            />
          </div>
          {/* Category */}
          <div className="relative z-0 w-full mb-5 group">
            <Controller
              name="category"
              control={control}
              rules={{ required: isUpdating }}
              defaultValue="Electronics"
              render={({ field }) => (
                <>
                  <select
                    {...field}
                    className="block py-2.5 px-0 w-full  text-sm text-gray-900 dark:text-gray-100 mt-5  dark:bg-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    required={isUpdating}
                  >
                    <option value="Electronics">Electronics</option>
                    <option value="Home and Kitchen">Home and Kitchen</option>
                    <option value="Beauty and Personal Care">
                      Beauty and Personal Care
                    </option>
                    <option value="Fashion">Fashion</option>
                    <option value="Baby Products">Baby Products</option>
                    <option value="Sports">Sports</option>
                    <option value="Automotive">Automotive</option>
                    <option value="Other">Other</option>
                  </select>
                  <label
                    htmlFor="category"
                    className="peer-focus:font-medium  absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Category
                  </label>
                </>
              )}
            />
          </div>
          {/* Buying Price */}
          <div className="relative z-0 w-full mb-5 group">
            <Controller
              name="buying_price"
              control={control}
              defaultValue=""
              rules={{ required: isUpdating }}
              render={({ field }) => (
                <>
                  <input
                    type="number"
                    {...field}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    placeholder=" "
                    required={isUpdating}
                  />
                  <label
                    htmlFor="buying_price"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Buying Price
                  </label>
                </>
              )}
            />
            {errors.buying_price && (
              <span className="text-red-500">Buying Price is required</span>
            )}
          </div>
          {/* Selling Price */}
          <div className="relative z-0 w-full mb-5 group">
            <Controller
              name="selling_price"
              control={control}
              defaultValue=""
              rules={{ required: isUpdating }}
              render={({ field }) => (
                <>
                  <input
                    type="number"
                    {...field}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    placeholder=" "
                    required={isUpdating}
                  />
                  <label
                    htmlFor="selling_price"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Selling Price
                  </label>
                </>
              )}
            />
            {errors.selling_price && (
              <span className="text-red-500">Selling Price is required</span>
            )}
          </div>
          {/* Quantity */}
          <div className="relative z-0 w-full mb-5 group">
            <Controller
              name="quantity"
              control={control}
              defaultValue=""
              rules={{ required: isUpdating }}
              render={({ field }) => (
                <>
                  <input
                    type="number"
                    {...field}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    placeholder=" "
                    required={isUpdating}
                  />
                  <label
                    htmlFor="quantity"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Quantity
                  </label>
                </>
              )}
            />
            {errors.quantity && (
              <span className="text-red-500">Quantity is required</span>
            )}
          </div>
          {/* Unit */}
          <div className="relative z-0 w-full mb-5 group">
            <Controller
              name="unit"
              control={control}
              defaultValue="PIECES"
              rules={{ required: isUpdating }}
              render={({ field }) => (
                <div>
                  <select
                    {...field}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-gray-100 mt-5  dark:bg-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    required={isUpdating}
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
              )}
            />
          </div>
          {!isUpdating ? (
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={() => handleAdd(getValues())}
            >
              Add
            </button>
          ) : null}
        </form>
        
        <div className="w-full max-w-lg mx-auto ml-5 overflow-y-auto h-96">
          {!isUpdating ? (
            <h5 className="text-sm font-bold dark:text-gray-100 mb-4">
              Add Products From Same Supplier:
            </h5>
          ) : null}

          <table className="min-w-full bg-white dark:bg-gray-600 divide-y divide-gray-200">
            <thead className="bg-gray-50 dark:bg-gray-600">
              <tr>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left dark:text-white text-gray-500 uppercase">
                  #
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left dark:text-white text-gray-500 uppercase">
                  Stock Name
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left dark:text-white text-gray-500 uppercase">
                  Description
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left dark:text-white text-gray-500 uppercase">
                  Supplier
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left dark:text-white text-gray-500 uppercase">
                  Barcode
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left dark:text-white text-gray-500 uppercase">
                  Category
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left dark:text-white text-gray-500 uppercase">
                  Buying Price
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left dark:text-white text-gray-500 uppercase">
                  Selling Price
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left dark:text-white text-gray-500 uppercase">
                  Quantity
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left dark:text-white text-gray-500 uppercase">
                  Unit
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left dark:text-white text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tempProducts.map((product, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {product.stock_name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {product.description}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {product.supplier}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {product.barcode}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {product.buying_price}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {product.selling_price}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {product.quantity}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {product.unit}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <button
                      type="button"
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDelete(index)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <form
          className="w-full max-w-lg mx-auto ml-5"
          onSubmit={handleSubmit(onSubmit)}
          ref={formRef}
        >
          <div className="flex justify-end items-end mt-5">
            <button
              type="submit"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              disabled={loading}
            >
              {isUpdating
                ? loading
                  ? 'Updating... ⏳'
                  : 'Update 📝'
                : loading
                ? 'Saving... ⏳'
                : 'Save💾'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}



