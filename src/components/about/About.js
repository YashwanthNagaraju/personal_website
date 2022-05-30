import Box from "@mui/material/Box";
import styled from "styled-components";
import {
  StyledContainer,
  secondaryBgColor,
  MyText,
  secondColor,
  whiteColor,
} from "../common/commonStyles";
import { Element } from "react-scroll";
import { Grid } from "@mui/material";

const About = () => {
  return (
    <AboutElement name="about">
      <AboutContainer id="aboutContainer">
        {/* <AboutStack id="AboutStack" direction="row" spacing={2}> */}
        <AboutBox id="aboutBox">
          <Grid id="aboutGrid" container spacing={2}>
            <LeftGridItem id="aboutGridInfo" item lg={8}>
              <AboutDiv>
                <MyText
                  style={{
                    fontSize: "52px",
                    color: secondColor,
                    fontWeight: "bold",
                  }}
                >
                  <span style={{ color: whiteColor }}>{"<"}</span>About Me/
                  <span style={{ color: whiteColor }}>{">"}</span>
                </MyText>
                <MyText
                  style={{
                    fontSize: "24px",
                    marginTop: "15px",
                    textAlign: "justify",
                  }}
                >
                  Hi! My name is Yashwanth Nagaraju. I am a developer with
                  experience in frontend and backend with a passion for coding.
                  I enjoy solving complex problems using a computer. I started
                  my career as a software engineer. I am currently a full time
                  Grad student at the University of Melbourne and work as a
                  freelance developer. I help people to showcase their talent
                  and art and to promote their business by designing and
                  building accessible and customized websites.
                </MyText>
              </AboutDiv>
            </LeftGridItem>
            <RightGridItem id="aboutGridImage" item lg={4}>
              <AboutInfoBox component="div" id="imageAboutBox">
                <Box
                  component="img"
                  alt="Yashwanth Nagaraju's photo - he ain't good looking"
                  src={require("../../assets/images/about.png")}
                ></Box>
              </AboutInfoBox>
            </RightGridItem>
          </Grid>
        </AboutBox>
      </AboutContainer>
    </AboutElement>
  );
};

export default About;

const AboutContainer = styled(StyledContainer)`
  && {
    @media (max-width: 767px) {
      display: block;
    }
    @media (min-width: 768px) {
      display: flex;
    }
  }
`;

const GridItem = styled(Grid)`
  padding: 0px 0px 0px 0px!important;
`;
const LeftGridItem = styled(GridItem)``;

const RightGridItem = styled(GridItem)`
  padding-left: 15% !important;
`;

const AboutBox = styled(Box)`
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
  }
`;

const AboutInfoBox = styled(Box)`
  display: grid;
  align-content: baseline;
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) {
    margin-left: 10%;
  }
`;

const AboutDiv = styled.div`
  && {
    display: block;
    text-align: left;
  }
`;

const AboutElement = styled(Element)`
  background-color: ${secondaryBgColor};
`;
