import React, { useState } from 'react';

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission logic here
    // You can send the form data to your backend, show a confirmation message, etc.
    onClose(); // Close the modal after submission
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? 'block' : 'hidden'
      } bg-gray-900 bg-opacity-50`}
    >
      <div className="bg-white text-black p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Book Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-semibold">
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 mr-2"
            >
              Book
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white rounded-md p-2 hover:bg-gray-500"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
