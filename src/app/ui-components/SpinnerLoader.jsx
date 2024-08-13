
'use client';
import React from 'react'
import {
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SpinnerLoader() {


  return (

    <div className="absolute inset-0 flex items-center justify-center bg-gray-100  dark:bg-transparent-100 bg-opacity-25 z-50">
        <FontAwesomeIcon
          icon={faSpinner}
          className="h-16 w-16 text-green-600 dark:text-green-400 animate-spin"
        />
    </div>
  );
}


