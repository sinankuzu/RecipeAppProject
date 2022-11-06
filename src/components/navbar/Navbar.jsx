import React, { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
// import { useNavigate } from "react-router-dom";

const Navbar = ({ setLogged, logged }) => {
  // const navigate = useNavigate();
  const [simge, setSimge] = useState({overflow:"hidden"});
  const simgeDegis = ()=>{
    setSimge(!simge)
  console.log("basildi")
  }

 
  
  const clarus = `<CLARUSWAY>`;
  console.log(logged, "nav syafasi");
  const cevir = () => {
    setLogged(false);
  };
  return (
    <Nav>
      <Logo
        onClick={(e) => {
          !logged ? e.preventDefault() : console.log("clicked");
        }}
        to={"/home"}
      >
        {clarus}
        <span>RECIPE</span>
      </Logo>
      <Menu style={{ overflow: simge ? "hidden" : "visible" }}>
        <MenuLink
          onClick={(e) => {
            !logged ? e.preventDefault() : console.log("clicked");
          }}
          to={"/about"}
        >
          About
        </MenuLink>
        <a href="https://github.com/sinankuzu" target="_blank">
          Github
        </a>

        <MenuLink onClick={cevir} to="/">
          Logout
        </MenuLink>
        <Hamburger onClick={simgeDegis}>menuyu ac</Hamburger>
      </Menu>
    </Nav>
  );
};

export default Navbar;
