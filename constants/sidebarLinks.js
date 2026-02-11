import {
  FaChartPie,
  FaShoppingBag,
  FaShoppingCart,
  FaUsersCog,
} from "react-icons/fa";
import {
  ADMIN_DASHBOARD_ROUTE,
  PRODUCT_MANAGEMENT_ROUTE,
  ORDER_MANAGEMENT_ROUTE,
  USER_MANAGEMENT_ROUTE,
} from "./routes";

const sidebarLinks = [
  {
    icon: FaChartPie,
    label: "Dashboard",
    route: ADMIN_DASHBOARD_ROUTE,
  },
  {
    icon: FaShoppingBag,
    label: "Product Management",
    route: PRODUCT_MANAGEMENT_ROUTE,
  },
  {
    icon: FaShoppingCart,
    label: "Order Management",
    route: ORDER_MANAGEMENT_ROUTE,
  },
  {
    icon: FaUsersCog,
    label: "User Management",
    route: USER_MANAGEMENT_ROUTE,
  },
];

export default sidebarLinks;
