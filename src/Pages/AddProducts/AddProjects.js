import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);
  
  const onSubmit = (data) => {
    console.log(data);

    const userReview = {
      userReview: user.displayName,
      userDescription: data.description,
      rating: data.rating,
    };
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json"
        // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },

      body: JSON.stringify(userReview)
        .then((res) => res.json())
        .then((inserted) => {
          if (inserted.insertedId) {
            toast.success("Added New Product Successfully");

            reset();
          } else {
            toast.error("Failed add to the data");
          }
        }),
    });
  
  };
  return (
    <div>
      <h1 className=" text-center mt-16 text-5xl font-bold">
        Add a <span className="text-cyan-500"> review </span> here!!
      </h1>
      <div className="flex justify-center items-center my-16">
        <form className="text-xl" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-rows-3 gap-10 w-40">
            <input
              className="p-3 border border-indigo-600"
              disabled
              value={user?.displayName || ""}
              {...register("name")}
              placeholder="Name"
              {...register("name", { required: true, maxLength: 20 })}
            />

            <textarea
             
              className=" p-3 border border-indigo-600"
              placeholder="Description"
              {...register("description")}
            />

            <input
              className="p-3 border border-indigo-600"
              placeholder="Price"
              type="number"
              {...register("price")}
            />

          </div>
          <input
            className="bg-gradient-to-r from-cyan-500 to-blue-500 btn text-neutral mt-5 text-center justify-center flex"
            type="submit"
            value="Add Review"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
