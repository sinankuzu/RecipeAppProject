import React,{useState} from "react";
import { Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
// import { useNavigate } from "react-router-dom";

const Navbar = ({ setLogged, logged }) => {
  // const navigate = useNavigate();
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
      <Menu>
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
      </Menu>
    </Nav>
  );
};

export default Navbar;
