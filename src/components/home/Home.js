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
      <HomeContainer id="homeContainer" maxWidth="xl">
        <HomeBox id="homeBox" sx={{ flexGrow: 1 }}>
          <NameDiv>
            <MyText style={{ fontSize: "36px", color: secondColor }}>
              Hello there. I'm{" "}
            </MyText>
            <HomeHeading component="h1" tabIndex={1}>
              Yashwanth Nagaraju,
            </HomeHeading>
            <HomeHeading>
              {subtitle}
              <span style={{ fontSize: "1.2em", color: secondColor }}>.</span>
            </HomeHeading>
            <SubText style={{ fontSize: "24px", marginTop: "15px" }}>
              An enthusiastic web developer with a passion to design and code
              user interfaces for people and their business.
            </SubText>
          </NameDiv>
        </HomeBox>
        <HomeInfoBox
          component="img"
          alt="Yashwanth Nagaraju's photo - he ain't good looking"
          src={require("../../assets/images/john.png")}
          id="imageHomeBox"
        ></HomeInfoBox>
      </HomeContainer>
    </HomeElement>
  );
};

export default Home;

const HomeElement = styled(Element)`
  background-color: ${primaryBgColor};
`;

const HomeContainer = styled(StyledContainer)`
  && {
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
      max-width: 80% !important;
      display: inline-flex;
    }
  }
`;

const HomeBox = styled(Box)`
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

const HomeInfoBox = styled(Box)`
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg);
  align-content: baseline;
  @media (max-width: 1024px) {
    display: none;
  }
  @media (min-width: 1024px) and (max-width: 1200px) {
    display: grid;
    width: 30%;
  }
  @media (min-width: 1200px) and (max-width: 1400px) {
    display: grid;
    width: 35%;
  }
  @media (min-width: 1400px) {
    display: grid;
    width: 40%;
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
      font-size: 3rem !important;
    }
    @media (min-width: 375px) and (max-width: 425px) {
      font-size: 3rem !important;
    }
    @media (min-width: 425px) and (max-width: 600px) {
      font-size: 3.5rem !important;
    }
    @media (min-width: 600px) and (max-width: 768px) {
      font-size: 3.5rem !important;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 4rem !important;
    }
    @media (min-width: 1024px) and (max-width: 1200px) {
      font-size: 4rem !important;
    }
    @media (min-width: 1200px) and (max-width: 1400px) {
      font-size: 4.5rem !important;
    }
    @media (min-width: 1400px) and (max-width: 1536px) {
      font-size: 4.5rem !important;
    }
    @media (min-width: 1536px) {
      font-size: 5rem !important;
    }
  }
`;

const SubText = styled(MyText)`
  && {
    @media (min-width: 1024px) {
      max-width:90% !important;
  }
`;
