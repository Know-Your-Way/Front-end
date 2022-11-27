import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Result, schema } from "../../components/ContactComponents";
import validate from "validate.js";

const Contact = () => {
  const [result, showResult] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rpw285v",
        "contact_form",
        e.target,
        "Y39z6YlGoKk14XZc_"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
      showResult(true)
      if(showResult === true){
        e.target.reset();
      }
    
    
  };
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (e) => {
    e.persist();
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      },
      touched: {
        ...formState.touched,
        [e.target.name]: true,
      },
    }));
  };
  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className="container mx-auto bg-contact">
      <form
        action=""
        onSubmit={sendEmail}
        className="text-gray-600 body-font relative"
      >
        <div className="container px-5 py-24 mx-auto flex">
          <img
            src="/Asset/Contact.svg"
            alt="hero_img"
            className="object-contain"
          />
          <div className="lg:w-1/3 md:w-1/2 bg-gray-500 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-white text-lg mb-1 font-medium title-font">
              Contact us
            </h2>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-white">
                First name
              </label>
              <input
                placeholder="First Name"
                label="Name *"
                variant="outlined"
                size="medium"
                name="from_name"
                id="name"
                fullWidth
                helperText={hasError("from_name") ? formState.errors.from_name[0] : null}
                error={hasError("from_name")}
                onChange={handleChange}
                type="text"
                value={formState.values.from_name || ""}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
              <label for="last_name" className="leading-7 text-sm text-white">
                Last name
              </label>
              <input
                placeholder="Last Name"
                label="last_name *"
                variant="outlined"
                size="medium"
                name="last_name"
                id="name"
                fullWidth
                helperText={hasError("last_name") ? formState.errors.last_name[0] : null}
                error={hasError("last_name")}
                onChange={handleChange}
                type="text"
                value={formState.values.last_name || ""}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
              <label for="contact_number" className="leading-7 text-sm text-white">
                Telephone number
              </label>
              <input
                placeholder="Enter a number"
                label="contact_number *"
                variant="outlined"
                size="medium"
                name="contact_number"
                fullWidth
                helperText={hasError("contact_number") ? formState.errors.contact_number[0] : null}
                error={hasError("contact_number")}
                onChange={handleChange}
                type="text"
                value={formState.values.contact_number || ""}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
              <label for="email" className="leading-7 text-sm text-white">
                Email
              </label>
              <input
                placeholder="E-mail"
                label="E-mail *"
                variant="outlined"
                size="medium"
                name="user_email"
                fullWidth
                helperText={hasError('user_email') ? formState.errors.user_email[0] : null}
                error={hasError('user_email')}
                onChange={handleChange}
                type="email"
                value={formState.values.user_email || ''}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-white">
                Message
              </label>
              <textarea
                 placeholder="Write your message here"
                 label="message *"
                 variant="outlined"
                 size="medium"
                 name="message"
                 fullWidth
                 helperText={hasError('message') ? formState.errors.message[0] : null}
                 error={hasError('message')}
                 onChange={handleChange}
                 type="message"
                 value={formState.values.message || ''}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              disabled={!formState.isValid}
              className="text-gray-600 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
            >
              Send
            </button>
            <div className="row">{result ? <Result /> : null}</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
