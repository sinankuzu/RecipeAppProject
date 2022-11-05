import React from 'react'
import { DetailContainer, DetailPart, HeaderContainer, ImgContainer, IngredContainer, OtherPart } from './DetailsStyles'
import { useLocation } from 'react-router-dom'
const Details = ({yemekler}) => {
  console.log(yemekler)
  // const location = useLocation();
 
  // const recipeAr = location.state.yemekler
  return (
    <DetailContainer>
    
      <HeaderContainer>

      </HeaderContainer>

      <DetailPart>

      <OtherPart></OtherPart>

      <ImgContainer></ImgContainer>

      <IngredContainer>assa</IngredContainer>

      </DetailPart>

    </DetailContainer>
  )
}

export default Details