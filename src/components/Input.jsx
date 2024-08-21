// FormikInput.js
import React from 'react';
import { Field, ErrorMessage } from 'formik';

const FormikInput = ({ label, name, type = 'text', ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <Field
        type={type}
        name={name}
        className="mt-1 block w-full rounded-md border p-[10px] border-gray-400 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 sm:text-sm"
        {...props}
      />
      <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
    </div>
  );
};

export default FormikInput;
