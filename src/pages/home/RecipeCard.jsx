import React, {useState} from "react";
import { Button, MainContainer, RecipeCards, RecipeHeader, RecipeImage } from "./HomeStyles";
import { useNavigate } from "react-router-dom";

// import {useNavigate} from "react-router-dom"
const RecipeCard = ({ recipe1, yemekler,inputValue }) => {
  let navigate = useNavigate();
  
  // const detayaGit = () => {
  //   navigate("/details", { state: { recipe1 } });
  // };

  return (
    <MainContainer>
      {yemekler
        .filter((filtered) =>
          filtered.recipe.label.toLowerCase().includes(inputValue)
        )
        .map((element) => {
          
             const { label, image } = element.recipe; 
          
          return (
            <RecipeCards key={label}>
              <RecipeHeader>{label}</RecipeHeader>
              <RecipeImage src={image} />
              <Button
                onClick={() => navigate(`/details/${element.recipe.label}`)}
              >
                Details
              </Button>
            </RecipeCards>
          );
        })}
    </MainContainer>
  );
};

export default RecipeCard;
