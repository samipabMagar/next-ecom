import React from 'react'
import { FaImage } from 'react-icons/fa';

const LoadingCard = () => {
  return <div className="bg-white shadow rounded-xl  mt-5 py-2 px-4 animate-pulse ">
        <div className="h-52 group relative">
          
          <div className="w-full h-48 bg-gray-100 rounded flex items-center justify-center"><FaImage className="text-gray-300 text-6xl"/></div>
       
          <span className="absolute top-5 right-3 bg-gray-300 w-10 h-5 rounded-full">
          
          </span>
        </div>
        
        <div className="flex flex-col gap-1 mt-5">
          
            <h2 className="w-40 bg-gray-300 h-6"></h2>
          
          <h2 className="w-15 bg-gray-300 h-5 rounded-lg  ">
            
          </h2>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div className="bg-gray-200 w-24 h-5"></div>
              <div className=" w-20 h-5  bg-gray-100 text-sm">
                
              </div>
            </div>
            <button className="bg-gray-300 min-w-10 h-10 text-lg cursor-pointer rounded-full text-white hover:bg-secondary">
              
            </button>
          </div>
        </div>
      </div>
}

export default LoadingCard;