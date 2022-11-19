import React from 'react'
import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
export  function AuthStatus() {
    const [login,setLogin] = useState(false)
    const[checkStatus, setCheckStatus] = useState(true)

    useEffect(()=>{
  const auth = getAuth()
  onAuthStateChanged(auth, (user)=>{
    if(user){
        setLogin(true)
    }
    setCheckStatus(false)
  })
    }, [])

  return {login, checkStatus}
}
