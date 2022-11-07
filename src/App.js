import React from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Login, { backendeYolla } from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/details/Details";
import { useState, useEffect } from "react";






const App = () => {
  const [simge, setSimge] = useState(true);
 const [logged, setLogged] = useState(false)
 
useEffect(() => {
  const items = localStorage.getItem("kullanici")
   if ( items !== null) {
     setLogged(true);
     
   }
}, [])


  return (
    <div>
      <BrowserRouter>
        <Navbar setLogged={setLogged} logged={logged} setSimge={setSimge} simge={simge} />
        <div onClick={()=>{setSimge(true)}}>
        <Routes >
          <Route path="/home" element={<Home />} />
          <Route path="/details/" element={<Details />} />
          <Route exact path="/" element={<Login setLogged={setLogged} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {logged ? <Footer /> : ""}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
