"use client";
import sidebarLinks from "@/constants/sidebarLinks";
import Link from "next/link";
import { FaSignOutAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/auth/authSlice";

const Sidebar = () => {
  const pathname = usePathname();
  const { user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  return (
    <aside className="pt-12  fixed top-0 left-0 z-40 w-70 h-full transition-transform -translate-x-full sm:translate-x-0">
      <div className="h-full sm:pl-10 pr-5 py-4 overflow-y-auto shadow dark:bg-gray-950">
        <ul className="space-y-2 font-medium">
          {sidebarLinks.map((item) => {
            if (!item.roles.some((role) => user.roles.includes(role))) {
              return null;
            }
            const isActive = pathname.startsWith(item.route);

            return (
              <li key={item.route}>
                <Link
                  href={item.route}
                  className={`${isActive ? "bg-primary/10 text-primary" : ""} flex items-center px-2 py-1.5 text-gray-600 rounded-md dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 group`}
                >
                  <item.icon />
                  <span className="ms-3">{item.label}</span>
                </Link>
              </li>
            );
          })}
          <li>
            <button onClick={()=> dispatch(logout())} className="gap-3 cursor-pointer flex items-center justify-center px-2 py-1.5 w-full rounded-md bg-red-600 hover:bg-red-700 text-white">
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
