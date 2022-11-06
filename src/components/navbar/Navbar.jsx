import React from "react";
import { Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  const clarus = `<CLARUSWAY>`
  return (
    <Nav>
      <Logo to="home">{clarus}<span>RECIPE</span></Logo>
      <Menu>
        <MenuLink to="/about">About</MenuLink>
        <a href="https://github.com/" target="_blank">
          Github
        </a>

        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
