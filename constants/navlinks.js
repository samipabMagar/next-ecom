const {
  HOME_ROUTE,
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  PRODUCT_ROUTE,
} = require("./routes");

const navLinks = [
  {
    label: "Home",
    route: HOME_ROUTE,
  },
  {
    label: "Products",
    route: PRODUCT_ROUTE,
  },
  {
    label: "About",
    route: ABOUT_ROUTE,
  },
  {
    label: "Contact",
    route: CONTACT_ROUTE,
  },
];

export default navLinks;