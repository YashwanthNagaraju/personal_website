import React from "react";
import styled from "styled-components";
import { MyText } from "../common/commonStyles";
import { SocialIcons, SoundIcon, ThemeIcon } from "../social/Icon";
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

const Footer = () => {
  return (
    <StyledFooter>
      <StyledDiv>
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
        <MyText variant="body1" gutterBottom>
          Built by Yashwanth Nagaraju.
        </MyText>
      </StyledDiv>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  && {
    min-height: 5vh;
    padding-top: 2vh;
    padding-bottom: 2vh;
  }
`;
const StyledDiv = styled.div``;

const IconDiv = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  padding: 3vh 0vh;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 7vw;
`;
