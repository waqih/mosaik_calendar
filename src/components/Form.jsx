// EventForm.js
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikInput from './Input'; // Adjust the path as needed

const validationSchema = Yup.object({
  title: Yup.string().required('Event title is required'),
  startTime: Yup.date().required('Start time is required').nullable(),
  endTime: Yup.date()
    .required('End time is required')
    .nullable()
    .when('startTime', {
      is: (startTime) => startTime !== undefined,
      then: Yup.date().min(Yup.ref('startTime'), 'End time must be after start time'),
    }),
});

const EventForm = ({ onClose }) => {
  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission logic
    console.log('Form submitted with values:', values);
    resetForm(); // Reset the form fields
    onClose(); // Close the modal after submission
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-lg w-[400px]">
      <h2 className="text-xl font-bold mb-4">Add Event</h2>
      <Formik
        initialValues={{ title: '', startTime: '', endTime: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <FormikInput label="Event Title" name="title" />
            <FormikInput label="Start Time" name="startTime" type="datetime-local" />
            <FormikInput label="End Time" name="endTime" type="datetime-local" />
            <div className="flex w-full gap-4">
            <button
                type="button"
                onClick={onClose}
                className="inline-flex justify-center py-2 w-1/2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#233038] hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 w-1/2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FF6F00] hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Save
              </button>
             
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EventForm;
