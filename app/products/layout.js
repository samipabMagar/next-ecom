import ProductsBanner from '@/components/products/Banner'
import React, { Children } from 'react'

const layout = ({children}) => {
  return (
    <div className='py-2'><ProductsBanner/>{children}</div>
  )
}

export default layout