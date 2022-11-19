import React, { useState } from 'react'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import OAuth from '../components/OAuth'
import {getAuth,createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { db } from '../firebase'
import { serverTimestamp, setDoc } from 'firebase/firestore'
import { doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'



export default function SignUp() {

    const navigate = useNavigate()
   
 
    const [showPassword, setShowPassword]  = useState(false)
    const [formData, setFormData] = useState({
       name: "",
        email: "",
        password: ""
    })
    const {name, email, password} = formData;

    const handleEmail = (e)=>{
setFormData((prevState)=>({

    ...prevState,
    [e.target.id]: e.target.value


}))


    }
    const toggleHide = ()=>{
        setShowPassword((prevState)=>!prevState)
        }
        const toggleShow = ()=>{
            setShowPassword((prevState)=>!prevState)
            }





            const submitEmail= async(e)=>{
           e.preventDefault()
           try {
            const auth = getAuth()
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
            updateProfile(auth.currentUser, {displayName: name})
        
            const user = userCredentials.user




            const formDataCopy = {...formData}
            delete formDataCopy.password
            formDataCopy.timestamp = serverTimestamp()
            await setDoc(doc(db, "users", user.uid), formDataCopy)
            navigate("/")
            toast.success("Welcome to ArtSky")

            
           } catch (error) {
            toast.error("Something wrong in registration")
            
           }

            }
            
  return (
   <section>
    <h1 className='text-3xl text-center mt-6 font-bold'>SIGN UP</h1>
    <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6 mt-10'>
            <img src="https://p.kindpng.com/picc/s/736-7367127_file-oxygen-apps-preferences-login-page-images-hd.png" alt="user-login" 
            className='h-full rounded-2xl'/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
            <form onSubmit={submitEmail} >
  
        
            <input  type="name" id="name" value={name} onChange={handleEmail} placeholder="Full name"
                
                className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"/>



                <input  type="email" id="email" value={email} onChange={handleEmail} placeholder="Email Address"
                
                className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"/>
                
                <div className='relative mb-6'>
                  


                <input  type={showPassword ? "text": "password"} id="password" value={password} onChange={handleEmail} placeholder="Password"

                
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"/>
               {showPassword ? <AiFillEyeInvisible className='absolute right-3 top-3 text-xl cursor-pointer' onClick={toggleHide} /> 
               
               
               : <AiFillEye className='absolute right-3 top-3 text-xl cursor-pointer' onClick={toggleShow} />}


               <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
               <p className='mb-6'> have an account? <Link to="/login" className='text-green-300 font-bold'>Log in</Link></p>
               <p>
                <Link to="/forgot-pass" className='text-blue-300 font-bold'>Forgot password?</Link>
               </p>

               </div>
                </div>
                <div>
                <button type='submit' className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium rounded shadow-md
                hover:bg-blue-700 duration-150 hover:shadow-lg
                '>SIGN UP</button>
                </div>
                <div className='my-4'>
                  <p className='text-center font-semibold'>OR</p>
                </div>
                <div>
                   
                </div>
            </form>
            <OAuth/>
           
        </div>
    </div>
   </section>
  )
}
