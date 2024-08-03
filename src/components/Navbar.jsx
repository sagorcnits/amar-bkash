import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const sideBarRef = useRef();
  const user = JSON.parse(localStorage.getItem("user"));
  const role = "user";
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const openSideBar = () => {
    sideBarRef.current.style.left = 0;
  };

  const closeSideBar = () => {
    sideBarRef.current.style.left = "-250px";
  };

  console.log(user);

  return (
    <>
      <div className="navbar border-b border-[#c5c3c3] px-6">
        <div className="flex-1 flex gap-2 items-center">
          <FaBars
            onClick={openSideBar}
            className="block md:hidden text-[20px] cursor-pointer"
          ></FaBars>
          <h1 className="font-bold">Sagor Hossain</h1>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://lh3.googleusercontent.com/a/ACg8ocJHNtFThSGq16tvsVl2iDzNlEK1q6dDeDVVwJrQhVNtn7AUgug=s288-c-no"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={logout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        ref={sideBarRef}
        className="h-screen  bg-white w-[250px] fixed -left-[250px] top-0 duration-500"
      >
        <div className="flex justify-between items-center px-4">
          <h1 className="text-[20px]  p-3 text-center">AmarBkash</h1>
          <MdOutlineClose
            onClick={closeSideBar}
            className="text-[24px] cursor-pointer"
          ></MdOutlineClose>
        </div>
        {role === "admin" ? (
          <ul className="*:mt-2 border-b pb-6 border-dashed p-3">
            <li>
              <NavLink
                onClick={closeSideBar}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "dashbord-active sideBar-nav"
                    : "sideBar-nav"
                }
                to="/dashboard/overview"
              >
                <span>Overview</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeSideBar}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "dashbord-active sideBar-nav"
                    : "sideBar-nav"
                }
                to="/dashboard/users"
              >
                <span>Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeSideBar}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "dashbord-active sideBar-nav"
                    : "sideBar-nav"
                }
                to="/dashboard/transactions"
              >
                <span>Transactions History</span>
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul className="*:mt-2 border-b pb-6 border-dashed p-3">
            <li>
              <NavLink
                onClick={closeSideBar}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "dashbord-active sideBar-nav"
                    : "sideBar-nav"
                }
                to="/dashboard/overview"
              >
                <span>Overview</span>
              </NavLink>
            </li>
            {role === "user" ? (
              <>
                <li>
                  <NavLink
                    onClick={closeSideBar}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "dashbord-active sideBar-nav"
                        : "sideBar-nav"
                    }
                    to="/dashboard/sendMoney"
                  >
                    <span>Send Money</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={closeSideBar}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "dashbord-active sideBar-nav"
                        : "sideBar-nav"
                    }
                    to="/dashboard/cashIn"
                  >
                    <span>Cash In</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={closeSideBar}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "dashbord-active sideBar-nav"
                        : "sideBar-nav"
                    }
                    to="/dashboard/cashOut"
                  >
                    <span>Cash Out</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    onClick={closeSideBar}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "dashbord-active sideBar-nav"
                        : "sideBar-nav"
                    }
                    to="/dashboard/sendMoney"
                  >
                    <span>Transactions</span>
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink
                onClick={closeSideBar}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "dashbord-active sideBar-nav"
                    : "sideBar-nav"
                }
                to="/dashboard/transactions"
              >
                <span>Transactions History</span>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
