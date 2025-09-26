import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import loginLottie from "../../assets/Lottie/registerLottie.json.json";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../firebase/FirebaseAuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          showConfirmButton: true,
          confirmButtonText: "OK",
          timer: 2000,
          timerProgressBar: true,
        });
        navigate("/"); // login successful হলে home এ redirect
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
          showConfirmButton: true,
          confirmButtonText: "OK",
        });
      });
  };

  const onSubmit = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome back, ${data.email}!`,
          timer: 2000,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen my-7 rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Lottie Animation */}
        <div className="w-full lg:w-1/2">
          <Lottie animationData={loginLottie} loop={true} />
        </div>

        {/* Login Form */}
        <div className="card bg-base-100 w-full max-w-md shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-4">Login now!</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              {/* Email */}
              <div className="form-control">
                <label className="label">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </span>
                )}
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <a href="#" className="link link-hover text-sm">
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </form>
            <button onClick={handleGoogleSignIn} className="btn btn-outline">
              Sign In With Google <FcGoogle size={25} />
            </button>
          </div>

          <p className="text-center pb-3">
            Don't Have An Account{" "}
            <Link className="text-blue-500 underline" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
