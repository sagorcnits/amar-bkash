import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    const email = data.email;
    const pin = data.pin;
    const userData = { email, pin };
    console.log(userData);
    axiosPublic
      .post("/jwt", userData)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.userData));
        }
        Swal.fire({
          icon: "success",
          title: "Success Your Login",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        setTimeout(() => {
          const token = localStorage.getItem("token");
          if (token) {
            navigate("dashboard");
          }
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col w-[450px] p-6 rounded-md sm:p-10 bg-[#ebe8e8]">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm dark:text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <form className="space-y-12">
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm">Email</label>
              <input
                {...register("email", { required: true })}
                type="text"
                name="email"
                placeholder="email or number"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
              {errors.email && (
                <p className="text-red-500">Invalid Your Name or number</p>
              )}
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">Password</label>
              </div>
              <input
                {...register("pin", { required: true })}
                type="password"
                name="pin"
                placeholder="5-digit PIN"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
              {errors.pin && <p className="text-red-500">Wrong Your PIN</p>}
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                onClick={handleSubmit(submit)}
                type="button"
                className="w-full px-8 py-3 font-semibold rounded-md button"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Don't have an account yet?
              <Link to="/register">Sign Up</Link>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
