import React from 'react'
import {FcGoogle} from 'react-icons/fc'

export default function OAuth() {
  return (
    <div>

        <button className='flex items-center justify-center w-full bg-blue-300 text-white px-7 py-3 rounded font-semibold shadow-medium
        hover:bg-blue-200'>
            <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>
            Continue with google</button>
    </div>
  )
}
