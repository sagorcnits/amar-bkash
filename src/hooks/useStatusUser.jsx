import useAxiosSecure from "./useAxiosSecure";

const useStatusUser = () => {
  const axiosSecure = useAxiosSecure();

  const statusHandle = (status, _id) => {
    axiosSecure
      .put(`/users?status=${status}&id=${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return statusHandle;
};

export default useStatusUser;
