import React from "react";
import { Logo, Menu, MenuLink, Nav } from "./NavbarStyles";


const Navbar = () => {
  const clarus = `<CLARUSWAY>`
  return (
  <Nav>
    <Logo>{clarus}</Logo>
    <Menu>
      <MenuLink>About</MenuLink>
      <MenuLink>Github</MenuLink>
      <MenuLink>Logout</MenuLink>
    </Menu>
  </Nav>
  );
};

export default Navbar;
