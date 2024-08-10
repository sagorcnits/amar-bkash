import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const TransactionsAgent = () => {
  const axiosSecure = useAxiosSecure();
  const user = JSON.parse(localStorage.getItem("user"));
  const {
    data: transactions = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/transactions/${user.number}`);
      return res.data;
    },
  });

  const handleTransaction = (id) => {
    console.log(id);
    axiosSecure
      .put(`/transactions/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.agentUserUpdate) {
          refetch();
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <h1 className="text-[20px] font-semibold py-4">All Transactions</h1>
      <div className="bg-white rounded-md w-full overflow-auto">
        {transactions.length > 0 ? (
          <table className="w-full p-6 text-[17px] text-left whitespace-nowrap z-0">
            <thead>
              <tr className="bg-[#d1d0d0]">
                <th className="p-3">No:</th>
                <th className="p-3">Name</th>
                <th className="p-3">Photo</th>
                <th className="p-3">Email</th>
                <th className="p-3">Number</th>
                <th className="p-3">Money</th>
                <th className="p-3">Role</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {transactions?.map((user, id) => {
                const { _id, money, name, email, userNumber, role, status } =
                  user;
                return (
                  <tr
                    key={id}
                    className="border-b dark:bg-gray-50 dark:border-gray-300 *:px-3 *:py-2 *:h-20"
                  >
                    <td>{id + 1}</td>
                    <td>{name}</td>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="https://lh3.googleusercontent.com/a/ACg8ocJHNtFThSGq16tvsVl2iDzNlEK1q6dDeDVVwJrQhVNtn7AUgug=s288-c-no"
                            alt="user iamge"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{email}</td>
                    <td>{userNumber}</td>
                    <td>{money}</td>
                    <td className="font-semibold">{role}</td>
                    <td
                      className={`${
                        status == "active" ? "text-green" : "text-red-500"
                      }`}
                    >
                      {status}
                    </td>
                    <td>
                      <span
                        onClick={() => handleTransaction(_id)}
                        className="cursor-pointer"
                      >
                        ✔
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : <h1 className="text-center text-[50px]">No Data</h1>}
      </div>
    </>
  );
};

export default TransactionsAgent;
