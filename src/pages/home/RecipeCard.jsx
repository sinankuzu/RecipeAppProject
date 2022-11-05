import React, {useState} from "react";
import { Button, MainContainer, RecipeCards, RecipeHeader, RecipeImage } from "./HomeStyles";
import { useNavigate } from "react-router-dom";
import Details from "../details/Details";
import "./RecipeSSS.css"


const RecipeCard = ({ yemekler,inputValue }) => {
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
        .map((element,index) => {
          
             const { label, image } = element.recipe; 
          
          return (
            <RecipeCards key={index}>
              <RecipeHeader>{label}</RecipeHeader>
              <RecipeImage src={image} />
              <Button onClick={() => navigate("/details")}>Details</Button>
              <div className="gizlen">{<Details yemekler={yemekler} />}</div>
            </RecipeCards>
          );
        })}
    </MainContainer>
  );
};

export default RecipeCard;
