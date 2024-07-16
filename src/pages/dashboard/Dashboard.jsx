import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
const Dashboard = () => {
  return (
    <section className="flex gap-2"> 
      <div className="h-screen  bg-white w-[250px] fixed hidden lg:block">
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
              to="/dashboard/adminHome"
            >
              <span>Admin Home</span>
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
              to="/dashboard/all-users"
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
              to="/dashboard/all-blood-donation-request"
            >
              <span>Donations</span>
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
              to="/dashboard/content-management"
            >
              <span>Content</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending flex"
                  : isActive
                  ? "dashbord-active sideBar-nav"
                  : "sideBar-nav"
              }
              to="/dashboard/profile"
            >
              <span>Profile</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <main className="w-full  lg:ml-[250px] bg-[#eaecec] h-screen">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </main>
    </section>
  );
};

export default Dashboard;
