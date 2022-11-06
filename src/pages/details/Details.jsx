import React from "react";
import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  IngredContainer,
  OtherPart,
} from "./DetailsStyles";
import { useLocation } from "react-router-dom";
import diet from "../../assets/diet.svg";
const Details = () => {
  const location = useLocation();

  const recipeAr = location.state.element.recipe;

  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>Margarita Pizza With Fresh Mozzzarella & Basil</h1>
        <img src={diet} alt="" />
      </HeaderContainer>

      <DetailPart>
        <OtherPart>
          <ul>
            <li>
              {recipeAr.totalNutrients.CA.label}:
              {Math.floor(recipeAr.totalNutrients.CA.quantity)}
              {recipeAr.totalNutrients.CA.unit}
            </li>
            <li>
              {recipeAr.totalNutrients.CHOCDF.label}:
              {Math.floor(recipeAr.totalNutrients.CHOCDF.quantity)}
              {recipeAr.totalNutrients.CHOCDF.unit}
            </li>
            <li>
              {recipeAr.totalNutrients.CHOLE.label}:
              {Math.floor(recipeAr.totalNutrients.CHOLE.quantity)}
              {recipeAr.totalNutrients.CHOLE.unit}
            </li>
            <li>
              {recipeAr.totalNutrients.ENERC_KCAL.label}:
              {Math.floor(recipeAr.totalNutrients.ENERC_KCAL.quantity)}
              {recipeAr.totalNutrients.ENERC_KCAL.unit}
            </li>
            <li>
              {recipeAr.totalNutrients.FAT.label}:
              {Math.floor(recipeAr.totalNutrients.FAT.quantity)}
              {recipeAr.totalNutrients.FAT.unit}
            </li>
            <li>
              {recipeAr.totalNutrients.PROCNT.label}:
              {Math.floor(recipeAr.totalNutrients.PROCNT.quantity)}
              {recipeAr.totalNutrients.PROCNT.unit}
            </li>
            <li>
              {recipeAr.totalNutrients.SUGAR.label}:
              {Math.floor(recipeAr.totalNutrients.SUGAR.quantity)}
              {recipeAr.totalNutrients.SUGAR.unit}
            </li>
            <li>
              {recipeAr.totalNutrients.WATER.label}:
              {Math.floor(recipeAr.totalNutrients.WATER.quantity)}
              {recipeAr.totalNutrients.WATER.unit}
            </li>
          </ul>
        </OtherPart>

        <ImgContainer>
          <img src={recipeAr.image} alt="" />
        </ImgContainer>

        <IngredContainer>
          <ol>
            {recipeAr.ingredients.map((element, index) => {
              return <li key={index}>{element.text}</li>;
            })}
          </ol>
        </IngredContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;
