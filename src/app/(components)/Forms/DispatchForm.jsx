'use client';

import React, { useState, useRef } from 'react';
import toast from 'react-hot-toast';
import { useForm, Controller, useFormState } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
 
} from '@fortawesome/free-solid-svg-icons';

export default function DispatchForm({ onClose, isUpdating }) {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const [selectedUnit, setSelectedUnit] = useState('PIECES'); // Default unit
  const [tempDispatches, setTempDispatches] = useState([]); // Temporary list of dispatches

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
      // Adding dispatches
      try {
        if (tempDispatches.length === 0) {
          setLoading(false);
          return toast.error('Please add at least one dispatch before saving.');
        }

        // Implement add logic here using tempDispatches
        // Simulate form submission
        await submitForm(tempDispatches);
        console.log('Saving new dispatches with data:', tempDispatches);
        setLoading(false); // Set loading state to false
        onClose(); // Close the form modal after saving
        toast.success('Dispatches saved successfully!', { icon: '👍' }); // Success toast
      } catch (error) {
        console.error('Error while saving dispatches:', error);
        toast.error('Error while saving dispatches. Please try again later.'); // Error toast
        setLoading(false); // Set loading state to false in case of error
      }
    } else {
      // Updating dispatch
      try {
        // Validate required fields
        const requiredFields = [
          'dispatch_name',
          'receiver',
          'dispatch_date',
          'dispatch_time',
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
        console.log('Updating dispatch with data:', formData);
        setLoading(false); // Set loading state to false
        onClose(); // Close the form modal after updating
        toast.success('Dispatch updated successfully!', { icon: '📝' }); // Success toast
      } catch (error) {
        console.error('Error while updating dispatch:', error);
        toast.error('Error while updating dispatch. Please try again later.'); // Error toast
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
    // Remove the dispatch at the specified index from tempDispatches
    const updatedDispatches = [...tempDispatches];
    updatedDispatches.splice(index, 1);
    setTempDispatches(updatedDispatches);
  };

  const handleAdd = async (data) => {
    // Check for required fields
    const formData = getValues();
    if (
      !formData.product_name ||
      !formData.destination ||
      !formData.barcode ||
      !formData.dispatch_date ||
      !formData.dispatch_time ||
      !formData.quantity
     
    ) {
      toast.error('Please fill out the form!', {
        icon: '❌',
      });
      return; // Exit the function if any required field is missing
    }

    try {
      // Save the current form data temporarily
      const newDispatch = { ...data }; // Create a copy of formData
      setTempDispatches([...tempDispatches, newDispatch]); // Add the new dispatch to tempDispatches
      console.log('Temporary added data:', newDispatch);
      toast.success('Dispatch added successfully!', {
        icon: '👍',
      });

      // Reset form fields to initial state
      reset({
        product_name: '',
        barcode: '',
        destination: '',
        dispatch_date: '',
        dispatch_time: '',
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

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <form className="w-full max-w-lg mx-auto ml-5" ref={formRef}>
          {/* Dispatch Name */}
          <div className="relative z-0 w-full mb-5 group">
            <Controller
              name="product_name"
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
                    htmlFor="product_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Product Name
                  </label>
                </>
              )}
            />
            {errors.dispatch_name && (
              <span className="text-red-500">Product Name is required</span>
            )}
          </div>
          {/* Description */}
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
            {errors.description && (
              <span className="text-red-500">Barcode is required</span>
            )}
          </div>
          {/* Receiver */}
          <div className="relative z-0 w-full mb-5 group">
            <Controller
              name="destination"
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
                    htmlFor="destination"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Destination
                  </label>
                </>
              )}
            />
            {errors.receiver && (
              <span className="text-red-500">Destination is required</span>
            )}
          </div>
          {/* Dispatch Date */}
          <div className="relative z-0 w-full mb-5 group">
            <Controller
              name="dispatch_date"
              control={control}
              defaultValue=""
              rules={{ required: isUpdating }}
              render={({ field }) => (
                <>
                  <input
                    type="date"
                    {...field}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    placeholder=" "
                    required={isUpdating}
                  />
                  <label
                    htmlFor="dispatch_date"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Dispatch Date
                  </label>
                </>
              )}
            />
            {errors.dispatch_date && (
              <span className="text-red-500">Dispatch Date is required</span>
            )}
          </div>
          {/* Dispatch Time */}
          <div className="relative z-0 w-full mb-5 group">
            <Controller
              name="dispatch_time"
              control={control}
              defaultValue=""
              rules={{ required: isUpdating }}
              render={({ field }) => (
                <>
                  <input
                    type="time"
                    {...field}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    placeholder=" "
                    required={isUpdating}
                  />
                  <label
                    htmlFor="dispatch_time"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Dispatch Time
                  </label>
                </>
              )}
            />
            {errors.dispatch_time && (
              <span className="text-red-500">Dispatch Time is required</span>
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
              name="packaging"
              control={control}
              defaultValue="PIECES"
              render={({ field }) => (
                <>
                  <select
                    {...field}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-gray-100 mt-5  dark:bg-gray-600 bg-transparent border-gray-300 appearance-none rounded-md shadow-sm dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    onChange={(e) => {
                      field.onChange(e);
                      setSelectedUnit(e.target.value); // Update selected unit
                    }}
                  >
                    <option value="PIECES">Pieces</option>
                    <option value="KILOGRAMS">Kilograms</option>
                    <option value="LITERS">Liters</option>
                  </select>

                  <label
                    htmlFor="packaging"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Packaging
                  </label>
                </>
              )}
            />
          </div>
          <div className="flex justify-center mt-4">
            {!isUpdating ? (
              <button
                type="button"
                className="px-4 py-2 mt-5 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={handleSubmit(handleAdd)}
              >
                Add Dispatch
              </button>
            ) : null}
          </div>
        </form>

        {/* Dispatch List */}
        <div className="w-full max-w-lg mx-auto ml-5 overflow-y-auto h-96">
          <h3>Add Products Of Same Destination</h3>
          <table className="min-w-full bg-white dark:bg-gray-600 divide-y divide-gray-200">
            <thead className="bg-gray-50 dark:bg-gray-600">
              <tr>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left dark:text-white text-gray-500 uppercase">
                  #
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left dark:text-white text-gray-500  uppercase">
                  Product Name
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left  dark:text-white text-gray-500 uppercase">
                  Barcode
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left dark:text-white text-gray-500 uppercase">
                  Destination
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left  dark:text-white text-gray-500 uppercase">
                  Dispatch Date
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left  dark:text-white text-gray-500 uppercase">
                  Dispatch Time
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left  dark:text-white text-gray-500 uppercase">
                  Quantity
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left  dark:text-white text-gray-500 uppercase">
                  Unit
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left  dark:text-white text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tempDispatches.map((dispatch, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {dispatch.product_name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {dispatch.barcode}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {dispatch.destination}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {dispatch.dispatch_date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {dispatch.dispatch_time}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {dispatch.quantity}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {dispatch.packaging}
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
      </div>

      <div className="flex justify-center mt-4">
        <button
          type="button"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={handleSubmit(onSubmit)}
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
    </div>
  );
};



