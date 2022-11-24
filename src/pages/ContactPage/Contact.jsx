import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto bg-contact">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex">
          <img src='/Asset/Contact.svg' alt='hero_img' className='object-contain' />
          <div className="lg:w-1/3 md:w-1/2 bg-gray-500 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-white text-lg mb-1 font-medium title-font">
              Contact us
            </h2>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-white">
                First name
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
              <label for="email" className="leading-7 text-sm text-white">
                Last name
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
              <label for="email" className="leading-7 text-sm text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-gray-600 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
