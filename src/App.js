
import React from "react";
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPass from "./pages/ForgotPass";

function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/forgot-pass' element={<ForgotPass/>}/>
        <Route path='/offers' element={<Offers/>}/>

      </Routes>
     </Router>
    </div>
  );
}

export default App;
