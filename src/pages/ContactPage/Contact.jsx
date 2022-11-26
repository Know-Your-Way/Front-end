
import React, { useState } from 'react';
import emailjs from '@emailjs/browser'

const Result = () => {
 return(
  <p className="mb-8 text-secondary leading-relaxed">Your message has been succesfully sent</p>
 )
}

const Contact = () => {
  const [result, showResult] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rpw285v', 'contact_form',e.target , 'Y39z6YlGoKk14XZc_')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
          console.log(error.text);

      });
      e.target.reset();
      showResult(true)

  };

  return (
    <div className="container mx-auto bg-contact">
      <form action="" onSubmit={sendEmail} className="text-gray-600 body-font relative">
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
                type="text"
                id="email"
                name="from_name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
              <label for="email" className="leading-7 text-sm text-white">
                Last name
              </label>
              <input
                type="text"
                id="email"
                name="last_name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
              <label for="email" className="leading-7 text-sm text-white">
                Telephone number
              </label>
              <input
                type="text"
                id="email"
                name="contact_number"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
              <label for="email" className="leading-7 text-sm text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
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
            <input type="submit" value="Send" />Button
            </button> 
            <div className='row'>{
              result ? <Result/> : null
            }
            </div>
          </div>
        </div>
      </form>
    </div>
  
  );
};

export default Contact;