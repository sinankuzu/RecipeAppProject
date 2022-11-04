import React from "react";
import { Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  const clarus = `<CLARUSWAY>`
  return (
    <Nav>
      <Logo onClick={()=>navigate("/")}>{clarus}</Logo>
      <Menu>
        <MenuLink onClick={() => navigate("/about")}>About</MenuLink>
        <MenuLink onClick={() => navigate("/github")}>Github</MenuLink>
        <MenuLink>Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
