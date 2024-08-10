import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const SendMoney = () => {
  const axiosSecure = useAxiosSecure();
  const user = JSON.parse(localStorage.getItem("user"));
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    const reciveNumber = data.number;
    const money = data.money;
    const pin = data.pin;

    const transactionData = {
      reciveNumber,
      money,
      pin,
      name: user.name,
      email: user.email,
      userNumber: user.number,
      role: "sendMoney",
      status: "done",
    };

    axiosSecure
      .put(
        `/users?number=${reciveNumber}&money=${money}&pin=${pin}&id=${user._id}`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.message) {
          Swal.fire({
            icon: "warning",
            title: "Invalid Information",
            showConfirmButton: false,
            timer: 1500,
          });
          return;
        }
        axiosSecure
          .post("/transactions", transactionData)
          .then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              Swal.fire({
                icon: "success",
                title: "Success Your Cash In",
                showConfirmButton: false,
                timer: 1500,
              });
              reset();
            } else if (res.data.message) {
              Swal.fire({
                icon: "warning",
                title: "invalid your information",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            console.log(error.message);
            Swal.fire({
              icon: "warning",
              title: "invalid your information",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className=" flex justify-center items-center">
      <form className="w-[450px] py-10 mt-10 border border-[#cccaca] px-10 shadow rounded-md">
        <h1 className="text-center text-[25px] font-bold pb-6">
          Send Your Money
        </h1>
        <div className="space-y-6">
          <div>
            <input
              {...register("number", { required: true, minLength: 11 })}
              type="number"
              name="number"
              placeholder="number"
              className="w-full px-3 py-2 border rounded-md focus:outline-none dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
            {errors.number && (
              <p className="text-red-500">Invalid Your Number</p>
            )}
          </div>
          <div>
            <input
              {...register("money", { required: true })}
              type="number"
              name="money"
              placeholder="money"
              className="w-full px-3 py-2 border rounded-md focus:outline-none dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
            {errors.money && <p className="text-red-500">Invalid Your money</p>}
          </div>
          <div>
            <input
              {...register("pin", {
                required: true,
                minLength: 5,
                maxLength: 5,
              })}
              type="password"
              name="pin"
              placeholder="PIN"
              className="w-full px-3 py-2 border rounded-md focus:outline-none dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
            {errors.pin && <p className="text-red-500">Wrong Your PIN</p>}
          </div>
          <div>
            <button
              onClick={handleSubmit(submit)}
              type="button"
              className="w-full button"
            >
              Send Money
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendMoney;
