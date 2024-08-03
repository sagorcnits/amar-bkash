import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUserData = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: users = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["usersData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });

  return [users, refetch, isPending];
};

export default useUserData;
