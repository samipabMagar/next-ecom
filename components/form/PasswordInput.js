import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const PasswordInput = (props) => {
    const [show, setShow] = useState(false);
  return (
     <div className='relative'>
        <input
              {...props}
              placeholder="Please enter your password"
              className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-primary outline-none px-3 py-3 w-full"
              required
              type={show ? "text": "password"}
            />
            <button onClick={() => setShow(!show)} type='button' className='absolute cursor-pointer top-6 right-3'>{show ? <FaEye/> : <FaEyeSlash/>}</button>
     </div>
  )
}

export default PasswordInput