"use client";
import React, { useState } from 'react';

const Donate = () => {
  const [amount, setAmount] = useState<number | string>(""); // Track amount
  const [frequency, setFrequency] = useState<string>("monthly"); // Frequency (One-time or Monthly)
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility

  // Admin account number (can be changed)
  const adminAccountNumber = "1234567890";

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleFrequencyChange = (value: string) => {
    setFrequency(value);
  };

  const handleDonate = () => {
    setIsModalOpen(true); // Show modal on donation click
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <section className="bg-blue-500 py-12 dark:bg-[#2D2D2D]">
        <div className='h-10'></div>
      <div className="bg-white dark:bg-[#1E1E1E]  p-8 rounded-lg max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-blue-500 mb-4 dark:text-[#E0E0E0] ">Make a Donation</h2>
        <p className="text-center text-blue-700 mb-6 dark:text-[#E0E0E0]">
          This is your campaign description. It’s a great place to tell visitors what this campaign is about, 
          connect with your donors, and draw attention to your cause.
        </p>

        {/* Frequency Options */}
        <div className="flex justify-center mb-6">
          <button 
            className={`px-6 py-2 rounded-full ${frequency === 'one-time' ? 'bg-blue-500 text-white dark:text-black' : 'bg-gray-200 dark:text-black'}`}
            onClick={() => handleFrequencyChange('one-time')}
          >
            One time
          </button>
          <button 
            className={`px-6 py-2 rounded-full ml-4 ${frequency === 'monthly' ? 'bg-blue-500 text-white dark:text-black' : 'bg-gray-200 dark:text-black'}`}
            onClick={() => handleFrequencyChange('monthly')}
          >
            Monthly
          </button>
        </div>

        {/* Amount Options */}
        <div className="flex justify-center mb-6">
          {['10', '50', '100', '200'].map((value) => (
            <button
              key={value}
              className={`px-6 py-2 rounded-full m-2 ${amount === value ? 'bg-blue-500 text-white dark:text-black' : 'bg-gray-200 dark:text-black'}`}
              onClick={() => setAmount(value)}
            >
              ₦{value}
            </button>
          ))}
          <input
            type="number"
            placeholder="Enter amount"
            className="px-4 py-2 rounded-full border-2 border-gray-300"
            value={amount === 'Other' ? '' : amount}
            onChange={handleAmountChange}
          />
        </div>

        {/* Donate Button */}
        <div className="text-center">
          <button
            onClick={handleDonate}
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 dark:bg-[#2D2D2D] transition duration-300 "
          >
            Donate
          </button>
        </div>

        {/* Modal Popup */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg max-w-sm w-full">
              <h3 className="text-xl font-semibold text-center text-blue-500 mb-4">Donation Summary</h3>
              <p className="text-center text-blue-700 mb-4">
                You have selected to donate <strong>₦{amount}</strong>.
              </p>
              <p className="text-center text-blue-700 mb-6">
                Please transfer the amount to the following account:
              </p>
              <div className="mb-6 text-center">
                <p className="font-bold text-lg">Admin Account Number:</p>
                <p className="text-xl">{adminAccountNumber}</p>
              </div>
              <div className="flex justify-center">
                <button 
                  onClick={handleCloseModal}
                  className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Donate;
