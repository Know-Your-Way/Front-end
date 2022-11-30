import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      from_name: "",
      last_name: "",
      contact_number: "",
      user_email: "",
      Message: "",
    },
  });
  const sendEmail = (formData) => {
    emailjs
      .send("service_rpw285v", "contact_form", formData, "Y39z6YlGoKk14XZc_")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };
  console.log(errors);
  return (
    <div className="container mx-auto bg-contact">
      <form
        onSubmit={handleSubmit(sendEmail)}
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
              <label className="leading-7 text-sm text-white"></label>
              <input
                name="from_name"
                {...register("from_name", {
                  required: "this is required",
                  maxLength: {
                    value: 20,
                    message: "maximal length for name is 20",
                  },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "only characters allowed",
                  },
                })}
                placeholder="First Name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
              <p className="text-sm italic text-rose-600">
                {errors.from_name?.message}
              </p>

              <label className="leading-7 text-sm text-white"></label>
              <input
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                {...register("last_name", {
                  required: "this is required",
                  minLength: {
                    value: 4,
                    message: "minimal length for last name is 4",
                  },
                })}
                placeholder="Last Name"
              />
              <p className="text-sm italic text-rose-600">
                {errors.last_name?.message}
              </p>
              <label className="leading-7 text-sm text-white"></label>
              <input
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                {...register("contact_number", {
                  required: "this is required",
                })}
                placeholder="Telephone Number"
                type="number"
              />
              <p className="text-sm italic text-rose-600">
                {errors.contact_number?.message}
              </p>
              <label className="leading-7 text-sm text-white"></label>
              <input
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="E-mail"
                {...register("user_email", {
                  required: "this field is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
              />
              <p className="text-sm italic text-rose-600">
                {errors.user_email?.message}
              </p>
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-white">Message</label>
              <textarea
                {...register("message", { required: "Please enter a message" })}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                placeholder="Write your message here"
                name="message"
              ></textarea>
            </div>
            <button
              className="text-gray-600 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
              type="submit"
            >
              Send
            </button>
            {/*<div className="row">{result ? <Result /> : null}</div> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
