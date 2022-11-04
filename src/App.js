import React from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/details/Details";





const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/details/:label" element=<Details/>/>
      </Routes>
      
       {/* <Login /> */}

      <Home /> 
          {/* <About /> */}

      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
