import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import {
  MyText,
  blueColor,
  StyledContainer,
  purpleColor,
  CommonDiv,
  GeneralText,
} from "../common/commonStyles";
import { Element } from "react-scroll";
import { jelloHorz, trackingInAnimation } from "../common/animations";
import { ThemeContext } from "../../App";
import { darkTheme } from "../../assets/common/commonText";
import { Zoom } from "react-awesome-reveal";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [subtitle, setSubtitle] = useState("A Web Developer");
  const subtitleTexts = [
    "A Web Developer",
    "An Artist(Kind Of..)",
    "Eternally Hungry",
    "A thrifty Student",
    "Skilled Junk Food Eater",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      const select = Math.floor(Math.random() * 5);
      setSubtitle(subtitleTexts[select]);
    }, 3000);
    return () => clearInterval(interval);
  });

  const introString = ["I", "'", "m"];
  const nameString = ["Y", "a", "s", "h", "w", "a", "n", "t", "h", ","];

  return (
    <HomeElement id="homeElement" name="home">
      <HomeContainer id="homeContainer" maxWidth="xl">
        <HomeBox id="homeBox" sx={{ flexGrow: 1 }}>
          <Zoom triggerOnce>
            <CommonDiv>
              <GeneralText
                style={{
                  fontSize: "36px",
                  color: theme === darkTheme ? blueColor : purpleColor,
                  fontWeight: "bold",
                }}
              >
                Hello there.
              </GeneralText>
              <HomeHeading component="h1" tabIndex={1}>
                {introString.map((char, index) => (
                  <NameSpan key={index} newtheme={theme}>
                    {char}
                  </NameSpan>
                ))}{" "}
                {nameString.map((char, index) => (
                  <NameSpan key={index} newtheme={theme}>
                    {char}
                  </NameSpan>
                ))}
              </HomeHeading>
              <SubHeading key={subtitle} id="subHeading" change={subtitle}>
                {subtitle}
                <span
                  style={{
                    color: theme === darkTheme ? blueColor : purpleColor,
                  }}
                >
                  .
                </span>
              </SubHeading>
              <SubText style={{ marginTop: "15px" }}>
                An enthusiastic web developer with a passion to design and code
                user interfaces for people and their business.
              </SubText>
            </CommonDiv>
          </Zoom>
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

const HomeElement = styled(Element)``;

const HomeContainer = styled(StyledContainer)`
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

const HomeHeading = styled(GeneralText)`
  && {
    display: block;
    font-weight: bold;
    text-align: left;
    line-height: 1;
    @media (max-width: 374px) {
      font-size: 2.5rem !important;
    }
    @media (min-width: 375px) and (max-width: 425px) {
      font-size: 2.5rem !important;
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

const SubHeading = styled(HomeHeading)`
  animation: ${trackingInAnimation};
  -webkit-animation: ${trackingInAnimation};
`;

const SubText = styled(MyText)`
  && {
    @media (min-width: 1024px) {
      max-width: 90% !important;
    }
  }
`;

const NameSpan = styled.span`
  && {
    &:hover {
      display: inline-flex;
      -webkit-animation: ${jelloHorz} 0.8s both;
      animation: ${jelloHorz} 0.8s both;
      color: ${(props) =>
        props.newtheme === darkTheme ? blueColor : purpleColor};
    }
  }
`;
