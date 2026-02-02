import Image from 'next/image'
import React from 'react'

const ProductCard = ({_id, name, brand, price, category,imageUrls }) => {
  return (
    <>
    <div>
     {
      imageUrls && imageUrls.length > 0 && (
         <Image src={imageUrls[0]} width={500} height={500} alt='img'/>
      )
     }
     <h2>{brand}</h2>
      <div>
        <h2>{name}</h2>
        <h2>{category}</h2>
        <div>
          <span>Rs. {price}</span>
          <span>LRs. {price * 1.05}</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductCard