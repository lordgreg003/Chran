// components/Contact.tsx
import React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white py-16 px-8 md:px-24 lg:px-48">
      {/* Left side - Background image */}
      <div className="w-full md:w-1/2 h-80 bg-cover bg-center" style={{ backgroundImage: `url('/path-to-your-desert-image.jpg')` }}></div>

      {/* Right side - Contact information and form */}
      <div className="w-full md:w-1/2 p-8 md:pl-16">
        {/* Contact Information */}
        <div className="text-center md:text-left mb-8">
          <p className="text-lg font-semibold">500 Terry Francine Street, San Francisco, CA 94158</p>
          <p className="text-lg">info@mysite.com | 123-456-7890</p>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              placeholder="First Name"
              className="border-b border-gray-400 py-2 px-4 focus:outline-none w-full md:w-1/2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border-b border-gray-400 py-2 px-4 focus:outline-none w-full md:w-1/2"
            />
          </div>

          <input
            type="email"
            placeholder="Email *"
            className="border-b border-gray-400 py-2 px-4 focus:outline-none w-full"
          />

          <textarea
            placeholder="Message"
            rows={4}
            className="border-b border-gray-400 py-2 px-4 focus:outline-none w-full resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-gray-800 text-white py-2 px-8 mt-4 hover:bg-gray-900 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
