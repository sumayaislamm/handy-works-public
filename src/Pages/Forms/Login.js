import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);



  let signInErrorMessage;

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if(loading || gLoading){
    return <Loading></Loading>
  }

  if(error || gError){
    signInErrorMessage = <p className="label-text-alt text-red-500 my-4">{error?.message || gError?.message}</p>
  }

  if (user || gUser) {
    navigate(from, { replace: true});
  }
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex lg:h-screen justify-center items-center">
      <div className="card lg:w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <input className="btn w-full max-w-xs btn-outline text-center justify-center btn-accent" type="submit" value="Login" />
          </form>
          <small><p className="my-5">New to Handy Works? 
            <Link to="/register" className="text-blue-500"> CREATE NEW ACCOUNT!
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

export default Login;
