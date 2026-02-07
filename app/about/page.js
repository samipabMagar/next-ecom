"use client"
import { decrement, increaseByAmount, increment } from '@/redux/counter/counterSlice';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// export const metadata = {
//   title: "About | | eTech"
// }
const page = () => {
  const [num , setNum ] = useState(1);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const theme = useSelector((state) => state.userPreferences.theme);
  return (
    <div>About page
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button> 
      <input onChange={(e) => setNum(e.target.value)} placeholder='enter a number'/> 
      <button onClick={() => dispatch(increaseByAmount(Number(num)))}>Increase by amount</button>  
      {theme}
    </div> 
  )
}

export default page