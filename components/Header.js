import navLinks from '@/constants/navlinks';
import { HOME_ROUTE } from '@/constants/routes';
import Link from 'next/link';
import React from 'react'
import { FaBars, FaLaptop, FaMoon, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
   <>
   <header className='flex justify-between py-4 shadow px-10 sticky top-0'>
    <h1 className='text-primary  font-semibold'><Link className='flex  items-center' href={HOME_ROUTE}><FaLaptop/> eTech</Link></h1>
    <nav className='md:flex hidden gap-8'>
        {
            navLinks.map((link) => {
                return (
                    <Link className='text-gray-700 font-semibold  hover:text-primary' key={link.route} href={link.route} >{link.label}</Link>
                )
            })
        }
    </nav>
    <div className='flex gap-2'>
        <button className='text-gray-700 hover:text-primary cursor-pointer'>
            <FaMoon/>
        </button>
        <button className='text-gray-700 hover:text-primary cursor-pointer'>
<FaShoppingCart/>
        </button>
        <button className='text-gray-700 hover:text-primary cursor-pointer'>
<FaUser/>
        </button >
        <button className='block md:hidden text-gray-700 hover:text-primary cursor-pointer'>
<FaBars/>
        </button>
    </div>
   </header>
   </>
  )
}

export default Header