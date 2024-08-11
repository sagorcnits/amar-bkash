import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useUserData from "../../../../hooks/useUserData";

const Users = () => {
  const [searchResult, setSearchResult] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [users, refetch, isPending] = useUserData();
  const axiosSecure = useAxiosSecure();

  const statusHandle = (status, _id) => {
    axiosSecure
      .put(`/users?status=${status}&id=${_id}`)
      .then((res) => {
        console.log(res.data);
        refetch();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const submit = (data) => {
    const searchText = data.search;
    axiosSecure
      .get(`/users?search=${searchText}`)
      .then((res) => {
        setSearchResult(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  console.log(searchResult);

  return (
    <div>
      <div className="flex justify-end items-center mt-10">
        <form onSubmit={handleSubmit(submit)}>
          <div className="flex bg-white  rounded-md overflow-hidden">
            <input
              {...register("search", { required: true })}
              type="text"
              placeholder="search user"
              className="focus:outline-none py-2 px-4"
              name="search"
            />
            <button className="bg-pink-500 py-2 px-4 text-[18px]">
              <CiSearch></CiSearch>
            </button>
          </div>
          {errors.search && (
            <p className="text-red-500">Please Provide Value</p>
          )}
        </form>
      </div>
      <h1 className="text-[20px] font-semibold py-4">All Users</h1>
      <div className="bg-white rounded-md w-full overflow-auto">
        <table className="w-full p-6 text-[17px] text-left whitespace-nowrap z-0">
          <thead>
            <tr className="bg-[#d1d0d0]">
              <th className="p-3">No:</th>
              <th className="p-3">Name</th>
              <th className="p-3">Photo</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, id) => {
              const { _id, name, email, number, role, status } = user;
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
                  <td className="font-semibold">{role}</td>
                  <td
                    className={`${
                      status == "active" ? "text-green" : "text-red-500"
                    }`}
                  >
                    {status}
                  </td>
                  <td>
                    <div className="dropdown dropdown-left dropdown-end">
                      <div tabIndex={0} className="cursor-pointer btn">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4 fill-current text-[#27AE60]"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                        </svg>
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52 *:bgHover *:text-[18px] *:font-semibold"
                      >
                        <li className="text-green">
                          <a onClick={() => statusHandle("active", _id)}>
                            active
                          </a>
                        </li>
                        <li>
                          <a onClick={() => statusHandle("block", _id)}>
                            block
                          </a>
                        </li>
                        <li className="text-red-800">
                          <a onClick={() => statusHandle("remove", _id)}>
                            remove
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
