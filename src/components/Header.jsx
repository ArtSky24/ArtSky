import React, { useEffect } from 'react'
import { useLocation, useNavigate  } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'
export default function Header() {
    const [pages, setPages] = useState("Sign in")
    const auth = getAuth()

    const location  = useLocation()
    const navigate = useNavigate()
 
    const pathMatchRoute = (route)=>{
        if(route === location.pathname){
            return true
        }
    }
    useEffect(()=>{
        
onAuthStateChanged(auth, (user)=>{
    if(user){
        setPages("Profile")
    }
    else {
        setPages("Sign in")
    }
})



    }, [auth])
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
                     ${pathMatchRoute("/") && "text-black border-b-red-500"}`} onClick={()=> navigate("/")}>Home</li>


                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer
                     ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`} onClick={()=> navigate("/offers")}>Offers</li>


                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer
                     ${(pathMatchRoute("/login") || pathMatchRoute("/profile"))&& "text-black border-b-red-500"}` } 
                     onClick={()=> navigate("/profile")}>
                        
                      {pages}</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
