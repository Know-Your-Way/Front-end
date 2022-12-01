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


  return (

    <section className=" bg-contact pb-10">
      <div className=" container  mx-auto">
        <h2 className=" pt-5 md:ml-8 md:text-3xl mb-4 font-medium text-white">
          Contact us
        </h2>
        <div className="md:ml-20 ml-10 grid md:grid-cols-2 ">
          <div className=" bg-gray-600 w-96 p-5 rounded-xl  ">
            <form 
              onSubmit={handleSubmit(sendEmail)}
              className="text-gray-60 justify-center">
              <label className="leading-7 text-lg text-white">First Name</label>
              <br />
              <input className=" w-80 my-1 py-1 rounded-md"
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
              ></input>
              <p className="text-sm italic text-rose-600">
                {errors.from_name?.message}
              </p>

              <label className="leading-7 text-lg text-white">Last Name</label>

              <br />
              <input className="w-80 my-1 py-1 rounded-md"
                {...register("last_name", {
                  required: "this is required",
                  minLength: {
                    value: 4,
                    message: "minimal length for last name is 4",
                  },
                })}
              />
              <p className="text-sm italic text-rose-600">
                {errors.last_name?.message}
              </p>
              <label className="leading-7 text-lg text-white">Telephone Number</label>

              <br />
              <input className="w-80 my-1 py-1 rounded-md"
                {...register("contact_number", {
                  required: "this is required",
                })}
                placeholder=""
                type="number"
              />
              <p className="text-sm italic text-rose-600">
                {errors.contact_number?.message}
              </p>
              <label className="leading-7 text-lg text-white">Email</label>

              <br />
              <input className="w-80 my-1 py-1 rounded-md"
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
              <label className="leading-7 text-lg text-white">Message</label>

              <br />
              <textarea className="w-80 my-1 py-1 rounded-md"
                {...register("message", { required: "Please enter a message" })}
                placeholder="Write your message here"
                name="message"
              ></textarea>
              <br />
              <button className="bg-blue-600 my-2 text-white py-2 px-5 rounded-lg ml-60" type="submit">Send</button>
            </form>
          </div>
            <img
              src="/Asset/Contact.svg"
              alt="hero_img"
              className="mt-20 mb-10"
            />

        </div>
      </div>
    </section>

  )
};

export default Contact
