import React from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    const url = `http://localhost:5000/product`;
    fetch(url,{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(result =>{
      console.log(result);
    })
  };
  return (
    <div>
      <h1 className=" text-center mt-16 text-5xl font-bold">Add a  <span className='text-cyan-500'> review </span> here!! 
      </h1>
    <div className='flex justify-center items-center my-16'>
      <form className='text-xl' onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-rows-3 gap-10 w-40'>

      <input className='p-3 border border-indigo-600' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
      
      <textarea className=' p-3 border border-indigo-600' placeholder='Description' {...register("description")} />
      
      <input className='p-3 border border-indigo-600' placeholder='Price' type="number" {...register("price")} />

      <input className='p-3 border border-indigo-600' placeholder='Photo URl' type="text" {...register("img")} />
      </div>
      <input className='bg-gradient-to-r from-cyan-500 to-blue-500 btn text-neutral mt-5 text-center justify-center flex' type="submit" value="Add Review" />
    </form>
    </div>
    </div>
  );
};

export default AddProducts;