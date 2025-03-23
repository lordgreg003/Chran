"use client";
import { useState } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";
import { open_sans, playfair_Display } from "@/app/ui/fonts/fonts";
 
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await emailjs.send(
        "service_i1ltxrm",
        "template_qohc3n7",
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          message: formData.message,
        },
        "Rco3tSF5o8uTVVy_g"
      );

      if (response.status === 200) {
        setIsSent(true);
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setError("Failed to send the message. Please try again.");
    }
  };

  return (
    <section>
      <div className="h-24 w-full"></div>
      <div className="h-[5rem] flex justify-center items-center w-full">
        <div className="w-[30rem] h-[80%] text-center">
          <h1
            className={`${playfair_Display.className} text-[24px] font-semibold sm:text-[29px] md:text-[35px]`}
          >
            Contact Us
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-3 justify-center">
        <div className="w-full flex items-center justify-center md:w-1/2 h-auto">
          <Image
            src="https://res.cloudinary.com/dg8cmo2gb/image/upload/v1736089430/IMG-20240612-WA0015_bxuxhy.webp"
            loading="lazy"
            alt="chran"
            width={450}
            height={450}
          />
        </div>

        {/* Right side - Contact information and form */}
        <div className="w-full md:w-1/2 p-8 md:pl-16">
          <div className="text-center md:text-left mb-8">
            <p className={`${open_sans.className} text-lg font-semibold`}>
            15 Akpa Ubeh Street off Babangida avenue by Je-Nissi Event Center,Uyo Akwa Ibom State Nigeria
            </p>
            <p className={`${open_sans.className} text-lg`}>
               center4humanrights@gmail.com | +2348023501555
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={`${open_sans.className} border-b border-gray-400 py-2 px-4 focus:outline-none w-full md:w-1/2`}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className={`${open_sans.className} border-b border-gray-400 py-2 px-4 focus:outline-none w-full md:w-1/2`}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              className={`${open_sans.className} border-b border-gray-400 py-2 px-4 focus:outline-none w-full`}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`${open_sans.className} border-b border-gray-400 py-2 px-4 focus:outline-none w-full resize-none`}
              required
            ></textarea>

            <button
              type="submit"
              className="bg-gray-800 rounded-xl text-white py-2 px-8 mt-4 hover:bg-gray-900 transition-colors"
            >
              Send
            </button>
          </form>
          {isSent && (
            <p className="text-green-500 mt-4">Message sent successfully!</p>
          )}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
      <div className="w-full  mt-4 h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15898.035734297511!2d7.920043629088101!3d5.020869519288928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d578ea16ab783%3A0x6694d5d5bf04fe07!2sJe-nissi%20Event%20Center!5e0!3m2!1sen!2sng!4v1729969228326!5m2!1sen!2sng"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
