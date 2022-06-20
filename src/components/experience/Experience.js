import Box from "@mui/material/Box";
import styled from "styled-components";
import {
  StyledContainer,
  MyText,
  blueColor,
  whiteColor,
  blackTextColor,
  purpleColor,
} from "../common/commonStyles";
import { Element } from "react-scroll";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { darkTheme } from "../../assets/common/commonText";

const Experience = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ExperienceElement name="experience">
      <ExperienceContainer id="experienceContainer">
        <ExperienceBox id="experienceBox">
          <ExperienceDiv>
            <MyText
              style={{
                fontSize: "52px",
                color: theme === darkTheme ? blueColor : purpleColor,
                fontWeight: "bold",
              }}
            >
              <span
                style={{
                  color: theme === darkTheme ? whiteColor : blackTextColor,
                }}
              >
                {"<"}
              </span>
              My Experience /
              <span
                style={{
                  color: theme === darkTheme ? whiteColor : blackTextColor,
                }}
              >
                {">"}
              </span>
            </MyText>
            <MyText
              style={{
                fontSize: "24px",
                marginTop: "15px",
                textAlign: "justify",
              }}
            >
              Hi! My name is Yashwanth Nagaraju. I am a developer with
              experience in frontend and backend with a passion for coding. I
              enjoy solving complex problems using a computer. I started my
              career as a software engineer. I am currently a full time Grad
              student at the University of Melbourne and work as a freelance
              developer. I help people to showcase their talent and art and to
              promote their business by designing and building accessible and
              customized websites.
            </MyText>
          </ExperienceDiv>
        </ExperienceBox>
        <ExperienceInfoBox component="div"></ExperienceInfoBox>
      </ExperienceContainer>
    </ExperienceElement>
  );
};

export default Experience;

const ExperienceElement = styled(Element)``;

const ExperienceContainer = styled(StyledContainer)`
  && {
    @media (max-width: 768px) {
      max-width: 90% !important;
      display: flex;
    }
    @media (min-width: 768px) and (max-width: 1200px) {
      max-width: 85% !important;
      display: inline-flex;
    }
    @media (min-width: 1200px) {
      max-width: 80% !important;
      display: inline-flex;
    }
  }
`;

const ExperienceBox = styled(Box)`
  align-content: baseline;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    padding-right: 2%;
    width: 70%;
  }
  @media (min-width: 1200px) and (max-width: 1400px) {
    padding-right: 2%;
    width: 65%;
  }
  @media (min-width: 1400px) {
    padding-right: 2%;
    width: 60%;
  }
`;

const ExperienceInfoBox = styled(Box)`
&&{
  align-content: baseline;
  @media (max-width: 1024px) {
    display: none;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    display: grid;
    width: 30%;
  }
  @media (min-width: 1200px) and (max-width: 1400px) {
    width: 35%;
    display: grid;
  }
  @media (min-width: 1400px) {
    width: 40%;
    display: grid;
  }
`;

const ExperienceDiv = styled.div`
  && {
    display: block;
    text-align: left;
  }
`;
