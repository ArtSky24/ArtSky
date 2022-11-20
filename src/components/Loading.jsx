import React from 'react'
import spinner from '../spinner.svg'


export default function Loading() {
  return (
    <div className='bg-black bg-opacity-50 flex items-center justify-center fixed left-0 bottom-0 top-0 z-40 right-0'>
        <div>
            <img src={spinner} alt="spinner" className='h-24' />
            </div>
    </div>
  )
}
