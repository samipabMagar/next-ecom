"use client"
import Image from 'next/image'
import React from 'react'
import bannerImg from '../../assets/images/product-banner.jpg'
import { FaGift, FaImage } from 'react-icons/fa'


const Banner = () => {
  return (
    <section className='bg-linear-to-r relative text-white flex justify-between px-2 items-center py-2 from-primary/80 md:h-52 md:px-20 h-40 overflow-hidden to-secondary/80 w-full rounded-lg'> 
    <Image fill alt={"Product Banner"} src={bannerImg}  className='absolute bottom-0 left-0 object-cover -z-10'/>
    <div className=''>
        <h2 className='text-xl md:text-4xl font-semibold md:mb-2'>Black friday sale</h2>
        <h2 className='text-xl font-semibold'><span className='text-xl md:text-3xl text-pink-400 font-extrabold'>30% <span className='text-sm md:text-lg'>off</span></span> Every Products</h2>
        <button  className='py-1 px-3 md:py-2 md:px-4 md:text-xl cursor-pointer bg-white text-gray-700 rounded-lg mt-5 md:mt-7 text-sm font-semibold'>Buy Now</button>
    </div>
    <div><FaGift className='text-4xl md:text-5xl'/></div>
    </section>
  )
}

export default Banner