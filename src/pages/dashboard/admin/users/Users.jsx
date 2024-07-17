import { CiSearch } from "react-icons/ci";

const Users = () => {
  return (
    <div>
        <div className="flex justify-end items-center mt-10">
           <div className="flex bg-white  rounded-md overflow-hidden ">
           <input type="text"  placeholder="search user" className="focus:outline-none py-2 px-4"/>
           <button className="bg-pink-500 py-2 px-4 text-[18px]"><CiSearch></CiSearch></button>
           </div>
        </div>
      <h1 className="text-[20px] font-semibold py-4">All Users</h1>
      <div className="bg-white rounded-md w-full">
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
            {[1, 2, 3, 4].map((user, id) => {
              return (
                <tr
                  key={id}
                  className="border-b dark:bg-gray-50 dark:border-gray-300 *:px-3 *:py-2 *:h-20"
                >
                  <td>{id + 1}</td>
                  <td>sagor</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          alt="user iamge"
                        />
                      </div>
                    </div>
                  </td>
                  <td>sagor@gmail.com</td>
                  <td className="font-semibold">user</td>
                  <td>user</td>
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
                        className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52 *:bgHover"
                      >
                        <li>
                          <a>Admin</a>
                        </li>
                        <li>
                          <a>Volunteer</a>
                        </li>
                        <li>
                          <a>btn</a>
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
