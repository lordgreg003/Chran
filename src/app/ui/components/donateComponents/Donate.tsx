"use client";
import React, { useState } from "react";
import { playfair_Display, open_sans } from "../../fonts/fonts";

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
      <div className="h-10"></div>
      <div className="bg-white dark:bg-[#1E1E1E] p-6 md:p-8 rounded-lg max-w-3xl mx-auto w-full">
        <h2
          className={`${playfair_Display.className} text-2xl md:text-3xl font-semibold text-center text-blue-500 mb-4 dark:text-[#E0E0E0]`}
        >
          Make a Donation
        </h2>
        <p
          className={`${open_sans.className} text-center text-sm md:text-base text-blue-700 mb-6 dark:text-[#E0E0E0]`}
        >
          This is your campaign description. It’s a great place to tell visitors what this campaign is about, connect with your donors, and draw attention to your cause.
        </p>

        {/* Frequency Options */}
        <div className="flex flex-wrap justify-center mb-6 gap-2">
          <button
            className={`${open_sans.className} px-4 py-2 rounded-full ${
              frequency === "one-time"
                ? "bg-blue-500 text-white dark:text-black"
                : "bg-gray-200 dark:text-black"
            }`}
            onClick={() => handleFrequencyChange("one-time")}
          >
            One time
          </button>
          <button
            className={`${open_sans.className} px-4 py-2 rounded-full ${
              frequency === "monthly"
                ? "bg-blue-500 text-white dark:text-black"
                : "bg-gray-200 dark:text-black"
            }`}
            onClick={() => handleFrequencyChange("monthly")}
          >
            Monthly
          </button>
        </div>

        {/* Amount Options */}
        <div className="flex flex-wrap justify-center mb-6 gap-2">
          {["10", "50", "100", "200"].map((value) => (
            <button
              key={value}
              className={`${open_sans.className} px-4 py-2 rounded-full ${
                amount === value
                  ? "bg-blue-500 text-white dark:text-black"
                  : "bg-gray-200 dark:text-black"
              }`}
              onClick={() => setAmount(value)}
            >
              ₦{value}
            </button>
          ))}
          <input
            type="number"
            placeholder="Enter amount"
            className={`${open_sans.className} px-4 py-2 rounded-full border-2 border-gray-300 w-full md:w-auto`}
            value={amount === "Other" ? "" : amount}
            onChange={handleAmountChange}
          />
        </div>

        {/* Donate Button */}
        <div className="text-center">
          <button
            onClick={handleDonate}
            className={`${open_sans.className} px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 dark:bg-[#2D2D2D] transition duration-300 w-full md:w-auto`}
          >
            Donate
          </button>
        </div>

        {/* Modal Popup */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white dark:bg-[#1E1E1E] p-6 rounded-lg max-w-xs w-full mx-4">
              <h3
                className={`${playfair_Display.className} text-lg font-semibold text-center text-blue-500 mb-4 dark:text-[#E0E0E0]`}
              >
                Donation Summary
              </h3>
              <p
                className={`${open_sans.className} text-center text-blue-700 mb-4 dark:text-[#E0E0E0]`}
              >
                You have selected to donate <strong>₦{amount}</strong>.
              </p>
              <p
                className={`${open_sans.className} text-center text-blue-700 mb-6 dark:text-[#E0E0E0]`}
              >
                Please transfer the amount to the following account:
              </p>
              <div className="mb-6 text-center">
                <p
                  className={`${open_sans.className} font-bold text-base`}
                >
                  Admin Account Number:
                </p>
                <p className={`${playfair_Display.className} text-lg`}>
                  {adminAccountNumber}
                </p>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 dark:bg-[#2D2D2D] bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300"
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
