import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import {AuthStatus} from '../hooks/AuthStatus'
import Loading from './Loading'


export default function PrivateRoute() {
  const {login, checkStatus} = AuthStatus()
  if(checkStatus){
    return <div><Loading/></div>
  }
  return login ? <Outlet/>: <Navigate to ="/login/"/>
}
