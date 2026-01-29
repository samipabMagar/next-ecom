import ProductsBanner from '@/components/products/Banner'
import React, { Children } from 'react'

const layout = ({children}) => {
  return (
    <div><ProductsBanner/>{children}</div>
  )
}

export default layout