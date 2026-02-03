"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const DEFAULT_SORT = JSON.stringify({
    createdAt: -1
})
const ProductFilter = () => {
    const [sort, setSort] = useState(DEFAULT_SORT);
    const router = useRouter();

    const filterProducts = () => {
        router.push(`?sort=${sort}`);
    }
  return (
 <aside className='shadow-md py-4 px-6 rounded-xl'>
   <h1 className='text-xl font-semibold mb-2'> Products Filter</h1>
   <div className=''>
     <h4 className='font-medium mb-2'>Sort By:</h4>
     <select onChange={(e) => setSort(e.target.value)} className='text-gray-800 outline-0 rounded-md border-gray-300 border px-2 py-1' name='sort'>
        <option value={JSON.stringify({createdAt: -1})}>Latest</option>
        <option value={JSON.stringify({createdAt: 1})}>Oldest</option>
        <option value={JSON.stringify({price: 1})}>Price: Low to High</option>
        <option value={JSON.stringify({price: -1})}>Price: High to Low</option>
        <option value={JSON.stringify({name: 1})}>Name: A-Z</option>
        <option value={JSON.stringify({name: -1})}>Name: Z-A</option>
     </select>
     <button onClick={() => filterProducts()} className='mt-2 bg-primary text-white rounded-md py-1 px-5'>Filter Products</button>
   </div>
 </aside>
  )
}

export default ProductFilter