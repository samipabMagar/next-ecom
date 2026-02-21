import {
  FaChartPie,
  FaShoppingBag,
  FaShoppingCart,
  FaUsersCog,
  FaUserCog
} from "react-icons/fa";
import {
  DASHBOARD_ROUTE,
  PRODUCT_MANAGEMENT_ROUTE,
  ORDER_MANAGEMENT_ROUTE,
  USER_MANAGEMENT_ROUTE,
  PROFILE_ROUTE,
} from "./routes";
import { ROLE_ADMIN, ROLE_MERCHANT, ROLE_USER } from "./roles";

const sidebarLinks = [
  {
    icon: FaChartPie,
    label: "Dashboard",
    route: DASHBOARD_ROUTE,
    roles: [ROLE_ADMIN, ROLE_MERCHANT, ROLE_USER]
  },
  {
    icon: FaShoppingBag,
    label: "Product Management",
    route: PRODUCT_MANAGEMENT_ROUTE,
    roles: [ROLE_ADMIN, ROLE_MERCHANT]
  },
  {
    icon: FaShoppingCart,
    label: "Order Management",
    route: ORDER_MANAGEMENT_ROUTE,
    roles: [ROLE_ADMIN, ROLE_MERCHANT]
  },
  {
    icon: FaUsersCog,
    label: "User Management",
    route: USER_MANAGEMENT_ROUTE,
    roles: [ROLE_ADMIN]
  },
  {
    icon: FaUserCog,
    label: "Profile",
    route: PROFILE_ROUTE,
    roles:[ROLE_ADMIN, ROLE_MERCHANT, ROLE_USER]
  }
];

export default sidebarLinks;
