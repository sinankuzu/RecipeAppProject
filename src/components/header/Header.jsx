import React from "react";
import { useState } from "react";
import {
  FormContainer,
  HeaderContainer,
  MainHeader,
  FoodInput,
  Button,
  Select,
} from "./HeaderStyles";

const Header = ({ setQuery, getData, setInputValue, setOgun }) => {
  
  
  return (
    <div>
      <HeaderContainer>
        <MainHeader> FOOD APP</MainHeader>
        <FormContainer>
          <FoodInput type="text" onChange={(e) => setQuery(e.target.value)} />
          <Button onClick={getData}>Search</Button>
          <Select onChange={(e) => setOgun(e.target.value)}>
            <option value="Breakfast">Breakfast</option>
            <option value="Dinner">Dinner</option>
            <option value="Lunch">Lunch</option>
            <option value="Snack">Snack</option>
            <option value="Teatime">Teatime</option>
          </Select>
        </FormContainer>
      </HeaderContainer>
    </div>
  );
};

export default Header;
