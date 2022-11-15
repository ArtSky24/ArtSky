import React from 'react'
import { useLocation, useNavigate  } from 'react-router-dom'

export default function Header() {

    const location  = useLocation()
    const navigate = useNavigate()
    console.log(location.pathname)
    const pathMatch = (route)=>{
        if(route === location.pathname){
            return true
        }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>

        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img src="https://artsky.io/wp-content/uploads/2022/10/artsky-LOGO-1-1.png"
                alt="logo" className=' h-5 cursor-pointer' onClick={()=> navigate('/')}/>

            </div>
            <div>
                <ul className='flex space-x-10 '>
                    <li  className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer
                     ${pathMatch("/") && "text-black border-b-red-500"}`} onClick={()=> navigate("/")}>Home</li>


                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer
                     ${pathMatch("/offers") && "text-black border-b-red-500"}`} onClick={()=> navigate("/offers")}>Offers</li>


                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer
                     ${pathMatch("/login") && "text-black border-b-red-500"}` } onClick={()=> navigate("/login")}>Login</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
