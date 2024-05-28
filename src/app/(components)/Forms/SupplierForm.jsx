'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function SupplierForm({ isUpdating, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      if (isUpdating) {
        await updateSupplier(data);
        toast.success('Supplier updated successfully!', { icon: '👍' });
      } else {
        await addSupplier(data);
        toast.success('Supplier added successfully!', { icon: '✅' });
      }
      onClose(); // Close the form modal after successful submission
    } catch (error) {
      console.error('Form submission error:', error);
      if (isUpdating) {
        toast.error(
          'Error while updating the supplier. Please try again later.'
        );
      } else {
        toast.error('Error while adding the supplier. Please try again later.');
      }
    }

    setLoading(false);
  };

  const addSupplier = async (formData) => {
    // Simulate adding supplier logic
    return new Promise((resolve) => {
      setTimeout(() => {
        // Assume supplier added successfully
        resolve();
      }, 1000); // Simulate 1 second delay
    });
  };

  const updateSupplier = async (formData) => {
    // Simulate updating supplier logic
    return new Promise((resolve) => {
      setTimeout(() => {
        // Assume supplier updated successfully
        resolve();
      }, 1000); // Simulate 1 second delay
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent dark:bg-gray-900">
      <form
        className="w-full max-w-lg mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        {isUpdating && (
          <h2 className="font-bold pb-5 text-lg text-green-500">
            Update Supplier Details
          </h2>
        )}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="company_name"
            id="company_name"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
              errors.company_name ? 'border-red-500' : 'border-gray-300'
            } appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer`}
            placeholder=" "
            {...register('company_name', { required: true })}
          />
          <label
            htmlFor="company_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Company Name
          </label>
          {errors.company_name && (
            <p className="text-red-500 text-sm">Company Name is required</p>
          )}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer`}
            placeholder=" "
            {...register('email', { required: true })}
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
          {errors.email && (
            <p className="text-red-500 text-sm">Email is required</p>
          )}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="tel"
            name="phone"
            id="phone"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer`}
            placeholder=" "
            {...register('phone', { required: true })}
          />
          <label
            htmlFor="phone"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone
          </label>
          {errors.phone && (
            <p className="text-red-500 text-sm">Phone is required</p>
          )}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="address"
            id="address"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
              errors.address ? 'border-red-500' : 'border-gray-300'
            } appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer`}
            placeholder=" "
            {...register('address', { required: true })}
          />
          <label
            htmlFor="address"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Address
          </label>
          {errors.address && (
            <p className="text-red-500 text-sm">Address is required</p>
          )}
        </div>

        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          disabled={isSubmitting || loading}
        >
          {isSubmitting || loading
            ? 'Submitting...'
            : isUpdating
            ? 'Update'
            : 'Create'}
        </button>
      </form>
    </div>
  );
}


// 'use client';

// import React, { useState, useRef } from 'react';
// import { useRouter } from 'next/navigation';
// import toast from 'react-hot-toast';

// export default function SupplierForm(isUpdating, onClose) {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const formRef = useRef(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Set loading state to true during form submission

//     // Use toast.promise to handle loading state and toast notifications
//     await toast.promise(
//       submitForm(), // Example function for form submission
//       {
//         loading: 'Adding ...', // Display loading message
//         success: () => {
//           formRef.current.reset(); // Reset the form upon successful submission
//           return toast('Good Job! Supplier Added successfully!', {
//             icon: '👏',
//           }); // Return success message
//         },
//         error: (error) => {
//           console.error('Form submission error:', error);
//           return toast.error(
//             'Error while Adding a Supplier. Please try again later.'
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

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
//       <form
//         className="w-full max-w-lg mx-auto"
//         onSubmit={handleSubmit}
//         ref={formRef}
//       >
//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             type="text"
//             name="company_name"
//             id="company_name"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
//             placeholder=" "
//             required
//           />
//           <label
//             htmlFor="company_name"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Company Name
//           </label>
//         </div>

//         {/* <div className="relative z-0 w-full mb-5 group">
//           <input
//             type="text"
//             name="delivery_name"
//             id="delivery_name"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
//             placeholder=" "
//             required
//           />
//           <label
//             htmlFor="delivery_name"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Delivery Name
//           </label>
//         </div> */}

//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             type="email"
//             name="email"
//             id="email"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
//             placeholder=" "
//             required
//           />
//           <label
//             htmlFor="email"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Email
//           </label>
//         </div>
//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             type="tel"
//             name="phone"
//             id="phone"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
//             placeholder=" "
//             required
//           />
//           <label
//             htmlFor="phone"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Phone
//           </label>
//         </div>
//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             type="text"
//             name="address"
//             id="address"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
//             placeholder=" "
//             required
//           />
//           <label
//             htmlFor="address"
//             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Address
//           </label>
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
