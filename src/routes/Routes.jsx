import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Users from "../pages/dashboard/admin/users/Users";
import TransactionsAgent from "../pages/dashboard/agent/transactions/TransactionsAgent";
import Dashboard from "../pages/dashboard/Dashboard";
import Overview from "../pages/dashboard/overview/Overview";
import Transactions from "../pages/dashboard/shared/Transactions";
import CashIn from "../pages/dashboard/user/cashIn/CashIn";
import CashOut from "../pages/dashboard/user/cashOut/CashOut";
import SendMoney from "../pages/dashboard/user/sendMoney/SendMoney";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <Overview></Overview>,
      },

      {
        path: "/dashboard/overview",
        element: <Overview></Overview>,
      },

      {
        path: "/dashboard/sendMoney",
        element: <SendMoney></SendMoney>,
      },

      {
        path: "/dashboard/cashIn",
        element: <CashIn></CashIn>,
      },

      {
        path: "/dashboard/cashOut",
        element: <CashOut></CashOut>,
      },

      {
        path: "/dashboard/transactions-history",
        element: <Transactions></Transactions>,
      },

      {
        path: "/dashboard/transactions",
        element: <TransactionsAgent></TransactionsAgent>,
      },

      {
        path: "/dashboard/users",
        element: <Users></Users>,
      },
    ],
  },
]);

export default router;
