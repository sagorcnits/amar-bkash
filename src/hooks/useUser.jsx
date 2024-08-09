import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const axiosPublic = useAxiosPublic();
  const {
    data: userData = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user.email}`);
      return res.data;
    },
  });

  return [userData, refetch, isPending];
};

export default useUser;
