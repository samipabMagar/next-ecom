import Link from 'next/link'
import React from 'react'

const ProductManagementPage = () => {
  return (
    <div>
      <h2>ProductManagementPage</h2>
      <Link href={"product-management/add"}> Add Product</Link>
    </div>
  )
}

export default ProductManagementPage