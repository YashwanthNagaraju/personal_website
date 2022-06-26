import React, { useContext } from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import {
  StyledContainer,
  MyText,
  CommonDiv,
  TagSpan,
  HeaderText,
} from "../common/commonStyles";
import { Element } from "react-scroll";
import { ThemeContext } from "../../App";
import { Fade } from "react-awesome-reveal";

const Experience = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ExperienceElement id="expElement" name="experience">
      <ExperienceContainer id="experienceContainer">
        <ExperienceBox id="experienceBox">
          <Fade triggerOnce>
            <CommonDiv>
              <HeaderText
                newtheme={theme}
              >
                <TagSpan newtheme={theme}>{"<"}</TagSpan>
                My Experience /<TagSpan newtheme={theme}>{">"}</TagSpan>
              </HeaderText>
              <MyText
                style={{
                  marginTop: "15px",
                  textAlign: "justify",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </MyText>
            </CommonDiv>
          </Fade>
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
