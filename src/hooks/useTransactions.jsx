import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTransactions = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)
  const axiosSecure = useAxiosSecure();
  const {
    data: transactions = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      if (user.role == "admin") {
        const res = await axiosSecure.get(`/transactions`);
        return res.data;
      }
     
      const res = await axiosSecure.get(`/transactions?userNumber=${user.number}`);
      return res.data;
    },
  });

  return [transactions, isPending, refetch];
};

export default useTransactions;
