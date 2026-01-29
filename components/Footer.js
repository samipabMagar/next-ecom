import { HOME_ROUTE } from "@/constants/routes";
import Link from "next/link";
import React from "react";
import { FaLaptop, FaMailBulk } from "react-icons/fa";
import { CgMail } from 'react-icons/cg'
import {BiPhone, BiLocationPlus} from 'react-icons/bi'
import navLinks from "@/constants/navlinks";

const Footer = () => {
  return (
    <footer className="mt-5 px-10 fixed bottom-0 w-full bg-gray-800 text-white py-5 ">
        <menu className="grid grid-cols-4 gap-15">
   <div>
       <h1>
        <Link href={HOME_ROUTE} className="text-primary flex items-center font-semibold">
          {" "}
          <FaLaptop />
          eTech
        </Link>
      </h1>
      <p className="max-w-70">lorem ipsum dolor sit amet consectetur adipisicing elit.

      </p>
   </div>
      
        <div>
            <h1 className="text-gray-400 font-semibold text-xl cursor-pointer hover:text-primary">Quick Links</h1>
        <ul className="flex flex-col gap-2 mt-2">
            {
                navLinks.map((link) => {
                    return (
                        <Link className="hover:text-primary" key={link.route} href={link.route}> {link.label}</Link>
                    )
                })
            }
        </ul>
        </div>
        <div>
            <h1 className="text-gray-400 font-semibold text-xl cursor-pointer hover:text-primary">Categories</h1>
            <ul  className="flex flex-col gap-2 mt-2">
                <li className="cursor-pointer hover:text-primary">Mobile</li>
                <li className="cursor-pointer hover:text-primary">Laptop</li>
                <li className="cursor-pointer hover:text-primary">Keyboard</li>
                <li className=" cursor-pointer hover:text-primary">Mouse</li>
            </ul>
        </div>
        <div className="flex flex-col gap-2 ">
            <h3  className=" cursor-pointer text-white flex gap-2 items-center hover:text-primary"><CgMail className="text-xl"/>eTechinfo@gmail.com</h3>
            <h3 className=" cursor-pointer text-white  flex gap-2 items-center hover:text-primary"><BiPhone className="text-xl"/>9867898767</h3>
            <h3 className=" cursor-pointer flex gap-2text-white items-center  hover:text-primary"><BiLocationPlus className="text-xl"/> Pokhara, MahendraPool</h3>
        </div>
      </menu>
        
    </footer>
  );
};

export default Footer;
