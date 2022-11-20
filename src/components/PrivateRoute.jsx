import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import {AuthStatus} from '../hooks/AuthStatus'

export default function PrivateRoute() {
  const {login, checkStatus} = AuthStatus()
  if(checkStatus){
    return <h1>Loading....</h1>
  }
  return login ? <Outlet/>: <Navigate to ="/login/"/>
}
