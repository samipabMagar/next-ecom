import React from 'react'
export const metadata = {
  title: "Contact | | eTech"
}
const page = async({searchParams }) => {
  const {id} = await searchParams;
 
  if(!Number.isInteger(Number(id))){
    throw new Error("Invalid ID parameter");
  }
  return (
    <div>contact page</div>
  )
}

export default page