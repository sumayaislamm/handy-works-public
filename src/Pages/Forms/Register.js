import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";

const Register = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, userError] = useUpdateProfile(auth);


  const navigate = useNavigate();


  let signInErrorMessage;

  if(loading || gLoading || updating){
    return <Loading></Loading>
  }

  if(error || gError || userError){
    signInErrorMessage = <p className="label-text-alt text-red-500 my-4">{error?.message || gError?.message || userError?.message}</p>
  }

  if (user || gUser) {
    console.log(user || gUser);
  }
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name});
    console.log('update done');
    navigate('/');
  };
  return (
    <div className="flex lg:h-screen justify-center items-center">
    <div className="card lg:w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-center text-2xl font-bold">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}> 


          {/* name  */}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name",{
                required:{
                  value: true,
                  message: 'Name is required'
                }
                })}
            />
          <label className="label">
          {errors.name?.type === "required" && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
          </label>
          </div>

       
       {/* email  */}


          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
              {...register("email",{
                required:{
                  value: true,
                  message: 'Email is required'
                },
                pattern: {
                  value: /[A-Za-z]{3}/,
                  message: 'Provide a valid email' 
                }})}
            />
          <label className="label">
          {errors.email?.type === "required" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
          {errors.email?.type === "pattern" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
          </label>
          </div>


          {/* password */}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
              {...register("password",{
                required:{
                  value: true,
                  message: 'Password is required'
                },
                minLength: {
                  value: 6,
                  message: 'Must be 6 characters or longer' 
                }})}
            />
          <label className="label">
          {errors.password?.type === "required" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
          {errors.password?.type === "minLength" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
          </label>
          </div>
           {signInErrorMessage}
          <input className="btn w-full max-w-xs btn-outline text-center justify-center btn-accent" type="submit" value="Register" />
        </form>
        <small><p className="my-5">Already Have an account? 
          <Link to="/login" className="text-blue-500"> LOG-IN HERE!
        </Link></p></small>
        <div className="divider">OR</div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-accent btn-outline"
        >
          Continue With Google
        </button>
      </div>
    </div>
  </div>
  );
};

export default Register;