import React from 'react'
import Link from 'next/link'
import { HOME_ROUTE } from '@/constants/routes';
import { FaLaptop } from 'react-icons/fa';

const Logo = () => {
  return (
    <h1 className="text-primary text-xl  font-semibold">
          <Link className="flex  items-center" href={HOME_ROUTE}>
            <FaLaptop /> eTech
          </Link>
        </h1>
  )
}

export default Logo