import React from 'react';

const ContactForm = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Contact Us Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Contact Us</h1>
      
      <div className="max-w-4xl w-full space-y-8 grid grid-cols-1 md:grid-cols-2 md:gap-16">
        {/* Contact Form */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Leave a message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="border rounded-lg p-3 w-full bg-gray-100 placeholder-gray-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your e-mail"
                className="border rounded-lg p-3 w-full bg-gray-100 placeholder-gray-500"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="border rounded-lg p-3 w-full bg-gray-100 placeholder-gray-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border rounded-lg p-3 w-full h-32 bg-gray-100 placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-orange-400 text-white font-semibold py-3 px-6 rounded-lg"
            >
              Send a message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-orange-50 p-8 rounded-lg text-gray-700 space-y-4">
          <div>
            <h3 className="font-semibold">Phone:</h3>
            <p className="text-lg">+94 71 124 4485</p>
          </div>
          <div>
            <h3 className="font-semibold">Email:</h3>
            <p className="text-lg">support@asacademy.lk</p>
          </div>
          <div>
            <h3 className="font-semibold">Address:</h3>
            <p className="text-lg">113/1, Katugastota Road, Kandy, Sri Lanka</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
