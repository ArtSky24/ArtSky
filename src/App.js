
import React from "react";
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPass from "./pages/ForgotPass";
import Header from "./components/Header";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import CreateList from "./pages/CreateList";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <div>
     <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/profile' element={<PrivateRoute/>}>
        <Route path='/profile' element={<Profile/>}/>
        </Route>
      
        <Route path='/Login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/forgot-pass' element={<ForgotPass/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/createList' element={<CreateList/>}/>

      </Routes>
     </Router>
     <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </div>
  );
}

export default App;
