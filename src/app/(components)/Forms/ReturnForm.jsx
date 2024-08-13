'use client';

import React, { useState, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function InventoryReturnForm({ onClose, isUpdating }) {
  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const [selectedUnit, setSelectedUnit] = useState('PIECES'); // Default unit
  const [tempProducts, setTempProducts] = useState([]); // Temporary list of products

  const onSubmit = async (data) => {
    setLoading(true); // Set loading state to true during form submission

    // Use toast.promise to handle loading state and toast notifications
    await toast.promise(
      submitForm(data), // Example function for form submission
      {
        loading: 'Submitting...', // Display loading message
        success: () => {
          reset(); // Reset the form upon successful submission
          setSelectedUnit('PIECES'); // Reset unit selection
          return toast('Inventory return submitted successfully!', {
            icon: '👍',
          }); // Return success message
        },
        error: (error) => {
          console.error('Form submission error:', error);
          return toast.error(
            'Error while submitting inventory return. Please try again later.'
          ); // Return error message
        },
      }
    );

    setLoading(false); // Set loading state to false after form submission completes
  };

  const submitForm = async (data) => {
    // Simulate form submission function
    // Replace this with your actual form submission logic
    // For demonstration purposes, add a delay using setTimeout
    return new Promise((resolve) => {
      setTimeout(() => {
        // Assume form submission is successful
        resolve();
      }, 1000); // Simulate 1 second delay
    });
  };

  const handleUnitChange = (e) => {
    setSelectedUnit(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent dark:bg-gray-900">
      <form
        className="w-full max-w-lg mx-auto"
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
      >
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
            defaultValue=""
            rules={{ required: 'Supplier is required' }}
            render={({ field }) => (
              <>
                <input
                  type="text"
                  {...field}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="supplier"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Supplier
                </label>
              </>
            )}
          />
          {errors.supplier && (
            <span className="text-red-500">{errors.supplier.message}</span>
          )}
        </div>

        {/* Product Name */}
        <div className="relative z-0 w-full mb-5 group">
          <Controller
            name="product_name"
            control={control}
            defaultValue=""
            rules={{ required: 'Product Name is required' }}
            render={({ field }) => (
              <>
                <input
                  type="text"
                  {...field}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
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
          {errors.product_name && (
            <span className="text-red-500">{errors.product_name.message}</span>
          )}
        </div>

        {/* Refund Price */}
        <div className="relative z-0 w-full mb-5 group">
          <Controller
            name="refund_price"
            control={control}
            defaultValue=""
            rules={{ required: 'Refund price is required' }}
            render={({ field }) => (
              <>
                <input
                  type="number"
                  {...field}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="refund_price"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Refund
                </label>
              </>
            )}
          />
          {errors.refund_price && (
            <span className="text-red-500">{errors.refund_price.message}</span>
          )}
        </div>

        {/* Quantity and Unit */}
        <div className="relative z-0 w-full mb-5 flex items-center group">
          <Controller
            name="quantity"
            control={control}
            defaultValue=""
            rules={{ required: 'Quantity is required' }}
            render={({ field }) => (
              <>
                <input
                  type="number"
                  {...field}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=""
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
          <select
            className="text-sm text-gray-900 mt-1 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:bg-gray-600 dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600"
            value={selectedUnit}
            onChange={handleUnitChange}
          >
            <option value="KG">KG</option>
            <option value="LITRE">LITRE</option>
            <option value="GRAMS">GRAMS</option>
            <option value="ML">ML</option>
            <option value="PIECES">PIECES</option>
          </select>
        </div>

        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          disabled={loading} // Disable button during form submission
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}



// import React, { useState, useRef } from 'react';
// import { useRouter } from 'next/navigation';
// import { useForm, Controller, useFormState } from 'react-hook-form';
// import toast from 'react-hot-toast';

// export default function InventoryReturnForm() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const formRef = useRef(null);
//   const [selectedUnit, setSelectedUnit] = useState('PIECES'); // Default unit

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Set loading state to true during form submission

//     // Use toast.promise to handle loading state and toast notifications
//     await toast.promise(
//       submitForm(), // Example function for form submission
//       {
//         loading: 'Submitting...', // Display loading message
//         success: () => {
//           formRef.current.reset(); // Reset the form upon successful submission
//           setSelectedUnit('PIECES'); // Reset unit selection
//           return toast('Inventory return submitted successfully!', {
//             icon: '👍',
//           }); // Return success message
//         },
//         error: (error) => {
//           console.error('Form submission error:', error);
//           return toast.error(
//             'Error while submitting inventory return. Please try again later.'
//           ); // Return error message
//         },
//       }
//     );

//     setLoading(false); // Set loading state to false after form submission completes
//   };

//   const submitForm = async () => {
//     // Simulate form submission function
//     // Replace this with your actual form submission logic
//     // For demonstration purposes, add a delay using setTimeout
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         // Assume form submission is successful
//         resolve();
//       }, 1000); // Simulate 1 second delay
//     });
//   };
//   const handleUnitChange = (e) => {
//     setSelectedUnit(e.target.value);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-transparent dark:bg-gray-900">
//       <form
//         className="w-full max-w-lg mx-auto"
//         onSubmit={handleSubmit}
//         ref={formRef}
//       >
//         {/* Barcode */}
//         <div className="relative z-0 w-full mb-5 group">
//           <Controller
//             name="barcode"
//             control={control}
//             defaultValue=""
//             rules={{ required: isUpdating }}
//             render={({ field }) => (
//               <>
//                 <input
//                   type="text"
//                   {...field}
//                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
//                   placeholder=" "
//                   required={isUpdating}
//                 />
//                 <label
//                   htmlFor="barcode"
//                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                 >
//                   Barcode
//                 </label>
//               </>
//             )}
//           />
//           {errors.barcode && (
//             <span className="text-red-500">Barcode is required</span>
//           )}
//         </div>
//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             type="text"
//             name="supplier"
//             id="supplier"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
//             placeholder=" "
//             required
//           />
//           <label
//             htmlFor="supplier"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Supplier
//           </label>
//         </div>

//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             type="text"
//             name="product_name"
//             id="product_name"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
//             placeholder=" "
//             required
//           />
//           <label
//             htmlFor="product_name"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Product Name
//           </label>
//         </div>
//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             type="number"
//             name="refund_price"
//             id="refund_price"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
//             placeholder=" "
//             required
//           />
//           <label
//             htmlFor="refund_price"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Refund
//           </label>
//         </div>

//         <div className="relative z-0 w-full mb-5 flex items-center group">
//           <input
//             type="number"
//             name="quantity"
//             id="quantity"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
//             placeholder=""
//             required
//           />
//           <label
//             htmlFor="quantity"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Quantity
//           </label>
//           <select
//             className="text-sm text-gray-900 mt-1 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:bg-gray-600 dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600"
//             value={selectedUnit}
//             onChange={handleUnitChange}
//           >
//             <option value="KG">KG</option>
//             <option value="LITRE">LITRE</option>
//             <option value="GRAMS">GRAMS</option>
//             <option value="ML">ML</option>
//             <option value="PIECES">PIECES</option>
//           </select>
//         </div>
//         <button
//           type="submit"
//           className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
//           disabled={loading} // Disable button during form submission
//         >
//           {loading ? 'Submitting...' : 'Submit'}
//         </button>
//       </form>
//     </div>
//   );
// }
