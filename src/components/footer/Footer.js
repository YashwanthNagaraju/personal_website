import React, { useContext } from "react";
import styled from "styled-components";
import {
  blackTextColor,
  blueColor,
  GeneralText,
  purpleColor,
  whiteColor,
} from "../common/commonStyles";
import { SocialIcons, SoundIcon, ThemeIcon } from "../common/Icon";
import {
  darkTheme,
  emailID,
  githubID,
  instagramID,
  linkedInID,
  mobileSize,
  phoneID,
} from "../../assets/common/commonText";
import {
  Email_Link,
  Github_Link,
  Instagram_Link,
  LinkedIn_Link,
  Phone_Link,
} from "../../assets/common/commonLinks";
import { slideInBtmAmt } from "../common/animations";
import { Box, Container, Stack } from "@mui/material";
import { ThemeContext } from "../../App";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledFooter variant="footer" id="footerElement">
      <IconDiv>
        <SocialIcons
          iconId={linkedInID}
          iconLink={LinkedIn_Link}
          iconSize={mobileSize}
        />
        <SocialIcons
          iconId={githubID}
          iconLink={Github_Link}
          iconSize={mobileSize}
        />
        <SocialIcons
          iconId={instagramID}
          iconLink={Instagram_Link}
          iconSize={mobileSize}
        />
        <SocialIcons
          iconId={emailID}
          iconLink={Email_Link}
          iconSize={mobileSize}
        />
        <SocialIcons
          iconId={phoneID}
          iconLink={Phone_Link}
          iconSize={mobileSize}
        />
        <ThemeIcon iconSize={mobileSize} />
        <SoundIcon iconSize={mobileSize} />
      </IconDiv>
      <FooterStack
        id="footerStack"
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={{ xs: 1, sm: 1, md: 4 }}
      >
        <InfoBox>
          <LinkNoStyle
            newtheme={theme}
            href="mailto:its.me.yashwanthnagaraju@gmail.com"
          >
            ITS.ME.YASHWANTHNAGARAJU@GMAIL.COM
          </LinkNoStyle>
          <br />
          <LinkNoStyle href="tel:+61481604484" newtheme={theme}>
            +61 481604484
          </LinkNoStyle>
        </InfoBox>

        <FooterBox>BASED IN MELBOURNE, AUS.</FooterBox>
      </FooterStack>

      <FooterText variant="body1" gutterBottom>
        BUILT BY YASHWANTH NAGARAJU.
      </FooterText>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled(Container)`
  && {
    max-width: 80vw;
    z-index: -1;
    min-height: 2vh;
    padding-top: 2vh;
    padding-bottom: 2vh;
    -webkit-animation: ${slideInBtmAmt};
    animation: ${slideInBtmAmt};
    font-size: 18px;
  }
`;

const IconDiv = styled.div`
  @media (min-width: 900px) {
    display: none;
  }
  padding: 1vh 0vh;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 7vw;
`;

const FooterStack = styled(Stack)`
  &&& {
    justify-content: space-between;
  }
`;

const FooterBox = styled(Box)`
  &&& {
    @media (min-width: 900px) {
      max-width: 25%;
      text-align: left;
    }
  }
`;

const InfoBox = styled(FooterBox)`
  &&& {
    display: none;
    @media (min-width: 900px) {
      display: block;
    }
  }
`;
const FooterText = styled(GeneralText)`
  && {
    font-size: 18px;
    margin-top: 1%;
  }
`;

const LinkNoStyle = styled.a`
  text-decoration: underline;
  margin-bottom: 2%;
  display: inline-block;
  color: ${(props) =>
    props.newtheme === darkTheme ? whiteColor : blackTextColor};
  z-index: 1;
  &:hover {
    color: ${(props) =>
      props.newtheme === darkTheme ? blueColor : purpleColor};
  }
  &:visited {
    color: ${(props) =>
      props.newtheme === darkTheme ? blueColor : purpleColor};
  }
`;
