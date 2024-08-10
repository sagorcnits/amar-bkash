import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));


  return (
    <section className="flex gap-2">
      <div className="h-screen  bg-white w-[250px] fixed hidden md:block">
        <h1 className="text-[20px]  p-3 text-center">AmarBkash</h1>
        {user?.role === "admin" ? (
          <ul className="*:mt-2 border-b pb-6 border-dashed p-3">
            <li>
              <NavLink
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
            {user?.role === "user" ? (
              <>
                <li>
                  <NavLink
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
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "dashbord-active sideBar-nav"
                        : "sideBar-nav"
                    }
                    to="/dashboard/transactions"
                  >
                    <span>Transactions</span>
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "dashbord-active sideBar-nav"
                    : "sideBar-nav"
                }
                to="/dashboard/transactions-history"
              >
                <span>Transactions History</span>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
      <main className="w-full  md:ml-[250px] bg-[#eaecec] h-screen">
        <Navbar></Navbar>
        <div className="p-4">
          <Outlet></Outlet>
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
