import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userdata from "./Userdata";
import Home from "./Home";
import Navbar from './Navbar';


export default function RouterPage() {
  return (
    <div>
   
<BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />}/> 
        <Route path="/Userdata" element={<Userdata/>} />
        <Route path="/Navbar" element={<Navbar />} />
         
        
      </Routes>
    </BrowserRouter>


    </div>
  )
}
