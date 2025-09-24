import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import registerLottie from "../../assets/Lottie/registerLottie.json.json";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../firebase/FirebaseAuthProvider";

const Register = () => {
  const { creatUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    creatUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: `Welcome, ${data.name}!`,
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
          <Lottie animationData={registerLottie} loop={true} />
        </div>

        {/* Registration Form */}
        <div className="card bg-base-100 w-full max-w-md shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-4">
              Register now!
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              {/* Name */}
              <div className="form-control">
                <label className="label">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </span>
                )}
              </div>

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
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                      message:
                        "Password must contain uppercase and lowercase letters",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </span>
                )}
              </div>

              {/* Photo Upload */}
              <div className="form-control">
                <label className="label">Photo</label>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full"
                  {...register("photo", { required: "Photo is required" })}
                />
                {errors.photo && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.photo.message}
                  </span>
                )}
              </div>

              {/* Already have account */}
              <div className="text-right">
                <a href="/login" className="link link-hover text-sm">
                  Already have an account? Login
                </a>
              </div>

              {/* Register Button */}
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </form>
          </div>
          <p className="text-center pb-3">
            Already Have An Account{" "}
            <Link className="text-blue-500 underline" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
