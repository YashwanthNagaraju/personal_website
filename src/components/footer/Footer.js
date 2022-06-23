import React from "react";
import styled from "styled-components";
import { GeneralText } from "../common/commonStyles";
import { SocialIcons, SoundIcon, ThemeIcon } from "../common/Icon";
import {
  githubID,
  instagramID,
  linkedInID,
  mobileSize,
} from "../../assets/common/commonText";
import {
  Github_Link,
  Instagram_Link,
  LinkedIn_Link,
} from "../../assets/common/commonLinks";
import { slideInBottom } from "../common/animations";

const Footer = () => {
  return (
    <StyledFooter>
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
          <ThemeIcon iconSize={mobileSize} />
          <SoundIcon iconSize={mobileSize} />
        </IconDiv>
        <GeneralText variant="body1" gutterBottom>
          Built by Yashwanth Nagaraju.
        </GeneralText>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  && {
    z-index:-1
    min-height: 2vh;
    padding-top: 2vh;
    padding-bottom: 2vh;
    -webkit-animation: ${slideInBottom} 1.5s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: ${slideInBottom} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`;

const IconDiv = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  padding: 2vh 0vh;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 7vw;
`;
