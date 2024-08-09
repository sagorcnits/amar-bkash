import axios from "axios";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
    
  // axiosSecure.interceptors.request.use(
  //   function (config) {
  //     const token = localStorage.getItem("token");
  //     config.headers.authorization = `Bearer ${token}`;
  //     return config;
  //   },
  //   async function (error) {
  //     return Promise.reject(error);
  //   }
  // );

  //response

  // axiosSecure.interceptors.response.use(
  //   function (response) {
  //     return response;
  //   },

  //   async function (error) {
  //     const status = error.response.status;
  //     if (status == 401 || status == 403) {
  //       // await LogOutUser();
  //       // console.log("hello");
  //       // <Navigate to="/login"></Navigate>;
  //     }

  //     return Promise.reject(error);
  //   }
  // );

  return axiosSecure;
};

export default useAxiosSecure;
