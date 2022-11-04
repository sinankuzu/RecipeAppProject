import React,{useState} from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";
import mealSvg from "../../assets/meal.svg";
const Login = () => {
const[nickName, setNickname]=useState();





  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />
        <Header>{"<Clarusway/>"}Recipe</Header>
        {/* login sayfasındaki yuvarlak olayın içindeki yazı (Header) */}

        <StyledForm  >
          {/* 3 kutunun olduğu form  */}
          <StyledInput type="text" placeholder="username" required onChange={(e)=>setNickname(e.target.value)}/>


          <StyledInput type="password" placeholder="password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
