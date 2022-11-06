import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
const Login = ({setLogged}) => {
  const [nickName, setNickname] = useState();
  const navigate = useNavigate();

  const backendeYolla = (e) => {
    e.preventDefault();
    // localStorage.setItem("kullanici", JSON.stringify(nickName));
    navigate("/home");
    setLogged(true)
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />
        <Header>{"<Clarusway/>"}Recipe</Header>
        {/* login sayfasındaki yuvarlak olayın içindeki yazı (Header) */}

        <StyledForm onSubmit={backendeYolla}>
          {/* 3 kutunun olduğu form  */}
          <StyledInput
            type="text"
            placeholder="username"
            required
            onChange={(e) => setNickname(e.target.value)}
          />

          <StyledInput type="password" placeholder="password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
