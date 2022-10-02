import React from "react";
import { useForm } from "react-hook-form";
import "./CountDown.css";

const ContactUs = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div id="contact" className="w-full max-h-screen flex">
      <div className="bg-green-500">
        <h1 className="text-white text-center py-8 text-3xl ">
          Contact with us
        </h1>
        <form className="grid grid-rows-3 " onSubmit={handleSubmit(onSubmit)}>
          <p className="font-bold text-green-900 px-4">
            Name:
            <input
              className=" w-96 px-20 my-4 py-2 mx-20 text-black bg-green-100"
              placeholder="Type Your Name"
              {...register("name")}
            />{" "}
          </p>
          <p className="font-bold text-green-900 px-4">
            Address:
            <input
              className=" w-96 px-20 my-4 py-2 mx-20 text-black bg-green-100"
              placeholder="Type Your Address"
              {...register("address")}
            />
          </p>
          <p className="font-bold text-green-900 px-4">
            Email:
            <input
              className=" w-96 px-20 my-4 py-2 mx-20 bg-green-100"
              placeholder="Enter Your Email"
              {...register("email")}
            />
          </p>
          <input
            className=" ml-56 my-4 py-2  text-center text-white w-20 bg-green-900"
            type="submit"
          />
        </form>
      </div>

      <div>
        <img
          className=" contactuspic "
          src="https://i.ibb.co/ZMw9L8j/pexels-secret-garden-2879817.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ContactUs;
