import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);
  
  const onSubmit = (data) => {
    console.log(data);

    const userReview = {
      userReview: user.name
    };
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },

      body: JSON.stringify(userReview) })
        .then((res) => res.json())
        .then((inserted) => {
          if (inserted.insertedId) {
            toast.success("Added New Product Successfully");

            reset();
          } else {
            toast.error("Failed add to the data");
          }
        });
  
  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      <h1 className=" text-center mt-16 text-3xl font-bold">
        Add a <span className="text-green-600"> review </span> here!!
      </h1>
      <div className="flex justify-center items-center my-16">
        <form className="text-xl" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-rows-3 gap-4 ">
            <input
              className="p-5 border border-green-600"
              placeholder="Name"
              {...register("name")}
            />

            <textarea
             
              className=" p-5 border border-green-600"
              placeholder="Description"
              {...register("description")}
            />

            <input
              className="p-5 border border-green-600"
              placeholder="Price"
              type="number"
              {...register("price")}
            />

          </div>
          <input
            className="bg-gradient-to-r from-green-900 to-green-100 btn text-black mt-5 text-center justify-center flex"
            type="submit"
            value="Add Review"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
