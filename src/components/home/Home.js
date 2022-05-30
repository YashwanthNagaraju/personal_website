import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import {
  MyText,
  primaryBgColor,
  secondColor,
  StyledContainer,
} from "../common/commonStyles";
import { Element } from "react-scroll";
import { Grid, Paper, Stack } from "@mui/material";

const Home = () => {
  const [subtitle, setSubtitle] = useState("A Web Developer");

  const subtitleTexts = [
    "A Web Developer",
    "An Artist(Well kinda..)",
    "Eternally Hungry",
  ];
  useEffect(() => {
    // setTimeout(() => {
      const interval = setInterval(() => {
        const select = Math.floor(Math.random() * 3);
        setSubtitle(subtitleTexts[select]);
      }, 2000);
      return () => clearInterval(interval);
    // }, 5000);
  }, []);

  return (
    <HomeElement name="home">
      <HomeContainer id="homeContainer">
        <HomeBox id="homeBox">
          <Grid id="homeGrid" container spacing={2}>
            <LeftGridItem id="homeGridInfo" item lg={8}>
              <NameDiv>
                <MyText style={{ fontSize: "36px", color: secondColor }}>
                  Hello there. I'm{" "}
                </MyText>
                <HomeHeading component="h1" tabIndex={1}>
                  Yashwanth Nagaraju,
                </HomeHeading>
                <HomeHeading component="h2">
                  {subtitle}
                  <span style={{ fontSize: "1.2em", color: secondColor }}>
                    .
                  </span>
                </HomeHeading>
                <MyText style={{ fontSize: "24px", marginTop: "15px" }}>
                  An enthusiastic web developer with a passion to design and
                  code user interfaces for people and their business.
                </MyText>
              </NameDiv>
            </LeftGridItem>
            <RightGridItem id="homeGridImage" item lg={4}>
              <HomeInfoBox
                component="img"
                alt="Yashwanth Nagaraju's photo - he ain't good looking"
                src={require("../../assets/images/john.png")}
                id="imageHomeBox"
              ></HomeInfoBox>
            </RightGridItem>
          </Grid>
        </HomeBox>
      </HomeContainer>
    </HomeElement>
  );
};

export default Home;

const HomeElement = styled(Element)`
  background-color: ${primaryBgColor};
`;

const GridItem = styled(Grid)``;
const LeftGridItem = styled(GridItem)`
  && {
    padding: 8% 0% 0% 0%!important;
  }
`;

const RightGridItem = styled(GridItem)`
  && {
    padding: 0%!important;
  }
`;

const SubTitle = styled(MyText)`
display: block;
text-align: left;
line-height: 1;
`;

const HomeContainer = styled(StyledContainer)`
  && {
    @media (max-width: 767px) {
      display: block;
    }
    @media (min-width: 768px) {
      display: flex;
    }
  }
`;

const HomeBox = styled(Box)`
  align-content: baseline;
  display: flex;
  @media (max-width: 767px) {
    height: 100vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 768px) {
    padding-right: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HomeInfoBox = styled(Box)`
  display: grid;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg);
  align-content: baseline;
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) {
    margin-left: 10%;
  }
`;

const NameDiv = styled.div`
  && {
    display: block;
    text-align: left;
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
      font-size: 5rem !important;
    }
    @media (min-width: 1200px) {
      font-size: 5rem !important;
    }
  }
`;
