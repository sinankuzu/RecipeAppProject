import React from "react";
import { Button, MainContainer, RecipeCards, RecipeHeader, RecipeImage } from "./HomeStyles";
import { useNavigate } from "react-router-dom";

import "./RecipeSSS.css"


const RecipeCard = ({ yemekler,inputValue,recipe1 }) => {
  let navigate = useNavigate();
  
  
  // const detayaGit = () => {
  //   navigate("/details", { state: { recipe1 } });
  // };

  return (
    <MainContainer>
      {recipe1
        .filter((filtered) =>
          filtered.recipe.label.toLowerCase().includes(inputValue)
        )
        .map((element,index) => {
          
             const { label, image } = element.recipe; 
          
          return (
            <RecipeCards key={index}>
              <RecipeHeader>{label}</RecipeHeader>
              <RecipeImage src={image} />
              <Button onClick={() => navigate("/details", {state:{element}})}>Details</Button>
              
            </RecipeCards>
          );
        })}
    </MainContainer>
  );
};

export default RecipeCard;
