import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import {
  MyText,
  primaryBgColor,
  secondColor,
  StyledContainer,
} from "../common/commonStyles";
import { Element } from "react-scroll";
import { Stack } from "react-bootstrap";

export const Home = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => {
        if (seconds === 4) {
          return 0;
        }
        return seconds + 1;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <HomeElement name="home">
      <StyledContainer id="homeContainer">
        {/* <HomeStack id="homeStack" direction="row" spacing={2}> */}
        <HomeBox id="homeBox">
          <NameDiv>
            <MyText style={{ fontSize: "36px", color: secondColor }}>
              Hello there,
            </MyText>
            <HomeHeading component="h1">I'm Yashwanth,</HomeHeading>
            <HomeHeading>Web Developer<span style={{ fontSize: "6rem", color: secondColor }}>.</span></HomeHeading>
            <MyText style={{ fontSize: "24px", marginTop: "15px", }}>
              An enthusiastic web developer with a passion to design and code user interfaces for people and their business.
            </MyText>
          </NameDiv>
        </HomeBox>
        <HomeInfoBox
          component="img"
          alt="Yashwanth Nagaraju's photo - he ain't good looking"
          src={require("../../assets/images/john.png")}
          id="imageHomeBox"
        ></HomeInfoBox>
        {/* </HomeStack> */}
      </StyledContainer>
    </HomeElement>
  );
};

const HomeElement = styled(Element)`
  background-color: ${primaryBgColor};
`;

const ImageDiv = styled.div``;

const HomeStack = styled(Stack)`
  && {
    width: 100%;
    @media (max-width: 767px) {
      padding: 15% 0%;
      display: block;
    }
    @media (min-width: 768px) {
      display: flex;
    }
  }
`;

const NameDiv = styled.div`
  && {
    display: block;
    text-align: left;
  }
`;

export const NameHeading = styled(Typography)`
  display: inline-grid;
  font-family: Impact !important;
  text-transform: uppercase;
  z-index: 1;
`;

const HomeBox = styled(Box)`
  align-content: baseline;
  display: flex;
  @media (max-width: 767px) {
    height:50vh
    width: 80%;
  }
  @media (min-width: 768px) {
    padding-right:8%;
    width: 50%;
  }
`;

const HomeInfoBox = styled(Box)`
  display: grid;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);
  align-content: baseline;
  @media (max-width: 767px) {
    padding-top:10%;
    height:50vh
    width: 80%;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const HomeHeading = styled(MyText)`
  && {
    display: block;
    text-align: left;
    line-height: 1;
    @media (max-width: 374px) {
      font-size: 3.5rem !important;
    }
    @media (min-width: 375px) and (max-width: 424px) {
      font-size: 3.5rem !important;
    }
    @media (min-width: 425px) and (max-width: 599px) {
      font-size: 3.5rem !important;
    }
    @media (min-width: 600px) and (max-width: 767px) {
      font-size: 3.5rem !important;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: 4rem !important;
    }
    @media (min-width: 1024px) and (max-width: 1199px) {
      font-size: 5.5rem !important;
    }
    @media (min-width: 1200px) {
      font-size: 5.5rem !important;
    }
  }
`;
