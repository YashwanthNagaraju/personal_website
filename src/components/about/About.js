import Box from "@mui/material/Box";
import styled from "styled-components";
import {
  StyledContainer,
  MyText,
  blueColor,
  TagSpan,
} from "../common/commonStyles";
import { Element } from "react-scroll";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const About = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <AboutElement name="about">
      <AboutContainer id="aboutContainer">
        {/* <AboutStack id="AboutStack" direction="row" spacing={2}> */}
        <AboutBox id="aboutBox">
          <AboutDiv>
            <MyText
              style={{
                fontSize: "52px",
                color: blueColor,
                fontWeight: "bold",
              }}
            >
              <TagSpan changeColor={{ theme }}>{"<"}</TagSpan>
              About Me/
              <TagSpan changeColor={{ theme }}>{">"}</TagSpan>
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
          </AboutDiv>
        </AboutBox>
        <AboutInfoBox component="div" id="imageAboutBox">
          <Box
            component="img"
            style={{ paddingLeft: "30%" }}
            alt="Yashwanth Nagaraju's photo - he ain't good looking"
            src={require("../../assets/images/about.png")}
          ></Box>
        </AboutInfoBox>
      </AboutContainer>
    </AboutElement>
  );
};

export default About;

const AboutContainer = styled(StyledContainer)`
  && {
    -webkit-animation: fade-in 1.5s cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
    animation: fade-in 1.5s cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
    @-webkit-keyframes fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @media (max-width: 375px) {
      max-width: 90% !important;
      display: flex;
    }
    @media (min-width: 375px) and (max-width: 425px) {
      max-width: 90% !important;
      display: flex;
    }
    @media (min-width: 425px) and (max-width: 600px) {
      max-width: 90% !important;
      display: flex;
    }
    @media (min-width: 600px) and (max-width: 768px) {
      max-width: 90% !important;
      display: flex;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      max-width: 85% !important;
      display: inline-flex;
    }
    @media (min-width: 1024px) and (max-width: 1200px) {
      max-width: 85% !important;
      display: inline-flex;
    }
    @media (min-width: 1200px) {
      padding: 0% 20%
      max-width: 80% !important;
      display: inline-flex;
    }
  }
`;

const AboutBox = styled(Box)`
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

const AboutInfoBox = styled(Box)`
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

const AboutDiv = styled.div`
  && {
    display: block;
    text-align: left;
  }
`;

const AboutElement = styled(Element)``;
