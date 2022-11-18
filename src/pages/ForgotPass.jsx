import React, { useState } from 'react'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import OAuth from '../components/OAuth'
export default function ForgotPass() {
   
    const [email, setEmail] = useState("")

      
 
 

    const handleEmail = (e)=>{

setEmail(e.target.value)


    }
 
  return (
   <section>
    <h1 className='text-3xl text-center mt-6 font-bold'>Forgot password?</h1>
    <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6 mt-10'>
            <img src="https://p.kindpng.com/picc/s/736-7367127_file-oxygen-apps-preferences-login-page-images-hd.png" alt="user-login" 
            className='h-full rounded-2xl'/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
            <form >
           
                 

                <input  type="email" id="email" value={email} onChange={handleEmail} placeholder="Email Address"
                
                className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"/>
                
                <div className='relative mb-6'>
                  


               


               <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
               <p className='mb-6'> have an account? <Link to="/sign-in" className='text-green-300 font-bold'>Log in</Link></p>
               <p>
                <Link to="/sign-up" className='text-blue-300 font-bold'>Register</Link>
               </p>

               </div>
                </div>
                <div>
                <button type='submit' className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium rounded shadow-md
                hover:bg-blue-700 duration-150 hover:shadow-lg
                '>Reset Password</button>
                </div>
                <div className='my-4'>
                  <p className='text-center font-semibold'>OR</p>
                </div>
                <div>
                    <OAuth/>
                </div>
            </form>
           
        </div>
    </div>
   </section>
  )
}
