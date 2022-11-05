import React from "react";
import {
  AboutContainer,
  StyledImage,
  HeaderContainer,
  InfoContainer,
} from "./AboutStyles";
import coding from "../../assets/coding.svg"

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={coding} />
      <p>
        About Software Developer <span>ED BEN</span>
      </p>
      <InfoContainer>
        I'm Ed. <br />
        i'm currently learning Full-Stack development Languages. <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ut. <br />
        <a href="">Send email:</a> edwardabnne@gmail.com
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
