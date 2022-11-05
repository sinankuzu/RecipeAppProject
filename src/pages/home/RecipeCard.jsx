import React from "react";
import { Button, RecipeCards, RecipeHeader, RecipeImage } from "./HomeStyles";
import { useNavigate } from "react-router-dom";
// import {useNavigate} from "react-router-dom"
const RecipeCard = ({ recipe1, yemekler }) => {
  let navigate = useNavigate();

  // const detayaGit = () => {
  //   navigate("/details", { state: { recipe1 } });
  // };

  return (
    <div>
      {yemekler.map((element) => {
        const { label, image } = element.recipe;
        return (
          <RecipeCards key={element.title}>
            <RecipeHeader>{label}</RecipeHeader>
            <RecipeImage src={image} />
            <Button onClick={() => navigate(`/details/${label}`)}>Details</Button>
          </RecipeCards>
        );
      })}
    </div>
  );
};

export default RecipeCard;
