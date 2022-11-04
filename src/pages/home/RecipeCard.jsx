import React from 'react'
import {  RecipeCards, RecipeHeader, RecipeImage } from './HomeStyles'
// import {useNavigate} from "react-router-dom"
const RecipeCard = ({recipe1, yemekler}) => {



  return (
    <RecipeCards>
      {yemekler.map((element) => {
        const { label, image } = element;
        return (
          <div>
            <RecipeHeader>{label}</RecipeHeader>
            <RecipeImage src={image} />
            {/* <Button onClick={detayaGit}>Details</Button> */}
          </div>
        );
      })}
      
       </RecipeCards>
  );
}

export default RecipeCard