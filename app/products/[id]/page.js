import React from 'react'

export const page = async({params}) => {
    const {id} = await params;
  return (
    <div>Product of id {id}</div>
  )
}

export default page;
