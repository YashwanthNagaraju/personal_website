import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { primaryBgColor, TopContainer } from "../common/commonStyles";
import { Element } from "react-scroll";
import {
  AnimeSubTitle,
  CookSubTitle,
  IdeaSubTitle,
  LotrSubTitle,
  WebSubTitle,
} from "./Subtitle";

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
      <StyledBox sx={{ height: "80vh" }} id="homeBox">
        <NameHeading variant="h3" component="h1">
          <FirstNameSpan>Yashwanth</FirstNameSpan>
          <LastNameSpan>Nagaraju</LastNameSpan>
        </NameHeading>
        <>
          {seconds === 0 && <WebSubTitle />}
          {seconds === 1 && <AnimeSubTitle />}
          {seconds === 2 && <IdeaSubTitle />}
          {seconds === 3 && <CookSubTitle />}
          {seconds === 4 && <LotrSubTitle />}
        </>
      </StyledBox>
    </HomeElement>
  );
};

const HomeElement = styled(Element)`
background-color:${primaryBgColor};
`
const StyledBox = styled(Box)`
  width: 50%;
  display: inline-table;
  text-align: center;
  @media (max-width: 374px) {
    padding-top: 40% !important;
  }
  @media (min-width: 375px) and (max-width: 424px) {
    padding-top: 20% !important;
  }
  @media (min-width: 425px) and (max-width: 599px) {
    padding-top: 30% !important;
  }
  @media (min-width: 600px) and (max-width: 767px) {
    padding-top: 20% !important;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding-top: 15% !important;
  }
  @media (min-width: 1024px) and (max-width: 1199px) {
    padding-top: 15% !important;
  }
  @media (min-width: 1200px) {
    padding-top: 13% !important;
  }
`;

export const NameHeading = styled(Typography)`
  display: inline-grid;
  font-family: Impact !important;
  text-transform: uppercase;
  z-index: 1;
`;

const FirstNameSpan = styled.span`
  color: #08fdd8;

  @media (max-width: 767px) {
    font-size: min(15.2vw, 20.2px) !important;
  }
  @media (max-width: 1024px) {
    font-size: min(15.2vw, 78.2px) !important;
  }
  font-size: min(15.2vw, 119.2px) !important;
`;
const LastNameSpan = styled.span`
  background-color: #08fdd8;
  color: #0e1212;
  @media (max-width: 767px) {
    font-size: min(15.2vw, 20.2px) !important;
  }
  @media (max-width: 1024px) {
    font-size: min(15.2vw, 87.2px) !important;
  }
  font-size: min(23.6vw, 134px) !important;
`;
