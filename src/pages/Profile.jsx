import React from 'react'
import { useState } from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import {doc, updateDoc} from 'firebase/firestore'
import { db } from '../firebase'
export default function Profile() {
  const [changeDetail , setChangeDetail] = useState(false)
  const navigate = useNavigate()
  const auth = getAuth()
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })
  const {name, email} = formData
  const logout =(e)=>{
    e.preventDefault()
    auth.signOut()
    navigate("/login")
    
  }

  const editProfile = ()=>{
    
    setChangeDetail((prevstate)=>!prevstate)
    changeDetail && onSubmit();
  }
  
  const changeProfile = (e)=>{
    setFormData((prevstate)=>({
      ...prevstate,
      [e.target.id]: e.target.value,

    }))
  }

  //-------------------------------CHANGE PROFILE DETAILS------------------------------------//
const onSubmit= async()=>{
  try {

    //update in firebase auth
    if(auth.currentUser.displayName !== name){
      await updateProfile(auth.currentUser, {
        displayName: name,
      })
     

//update in firestore database

const docRef = doc(db, "users", auth.currentUser.uid)
await updateDoc(docRef, {
  name, 

})
toast.success("Profile has been updated")

    }
 

  } catch (error) {
    toast.error("Something wrong in applying profile")
    
  }
    //-------------------------------CHANGE PROFILE DETAILS------------------------------------//
  
}
  return (
    <>
    <div className='max-w-6xl mx-auto flex justify-center items-center flex-col'  >
   <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
    <h1 className='text-3xl mt-6 text-center font-bold'>MY PROFILE</h1>
   </section>
   <div className='w-full md:w-[50%] mt-6 px-3'>
    <form>
      
      <input type="name" id="name" value={name} disabled={!changeDetail} onChange={changeProfile}
      className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition 
      ease-in-out  && ${changeDetail ? "bg-blue-300  focus:bg-blue-300" : ""}`}/>


      <input type="email" id="email" value={email} disabled={!changeDetail} onChange={changeProfile}
      className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition 
      ease-in-out && ${changeDetail ? "bg-blue-300 focus:bg-blue-300": ""}` }/>
    </form>
    <div className='flex justify-between whitespace-nowrap'>


    <p>Do you want to change your profile? <span onClick={editProfile} className='text-yellow-300 font-bold cursor-pointer hover:text-yellow-700'>
     {changeDetail ? "Apply" : "Edit"}</span></p>
    <button className='bg-blue-500 text-sm w-32 rounded  shadow-lg hover:bg-blue-300' onClick={logout}>Sign out</button>
    </div>
   </div>
   </div>
    </>
  )
}
