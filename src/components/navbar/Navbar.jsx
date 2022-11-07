import React, { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
// import { useNavigate } from "react-router-dom";

const Navbar = ({ setLogged, logged, setSimge,simge }) => {
  // const navigate = useNavigate();

  const simgeDegis = () => {
    setSimge(!simge);
    console.log("basildi");
  };

  const clarus = `<CLARUSWAY>`;
  
  console.log(logged, "logged edildi mi")
 
  const cevir = () => {
    localStorage.removeItem("kullanici")
    setLogged(false)
  };
  return (
    <Nav>
      <Logo
        onClick={(e) => {
          logged === false ? e.preventDefault() : console.log("clicked");
          setSimge(true)

        }}
        to={"/home"}
      >
        {clarus}
        <span>RECIPE</span>
      </Logo>
      <Menu style={{ overflow: simge ? "hidden" : "visible" }}>
        <MenuLink
          onClick={(e) => {
            logged === false ? e.preventDefault() : console.log("clicked");
            setSimge(true);
          }}
          to={"/about"}
        >
          About
        </MenuLink>
        <a href="https://github.com/sinankuzu" target="_blank">
          Github
        </a>

        <MenuLink onClick={(e)=>{cevir(); setSimge(true)}} to="/">
          Logout
        </MenuLink>
        <Hamburger onClick={simgeDegis}>menuyu ac</Hamburger>
      </Menu>
    </Nav>
  );
};

export default Navbar;
