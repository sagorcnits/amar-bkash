import useTransactions from "../../../hooks/useTransactions";

const Transactions = () => {
  const [transactions, isPending, refetch] = useTransactions();

  console.log(transactions);

  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          Recent Transactions
        </h2>
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
                        status == "done" ? "text-green" : "text-red-500"
                      }`}
                    >
                      {status}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : <h1 className="text-center text-[50px]">No Data</h1>}
      </div>
      </div>
    </div>
  );
};

export default Transactions;
