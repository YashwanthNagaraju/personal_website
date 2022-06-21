import { useContext, useState } from "react";
import {
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiSun,
  FiMoon,
  FiMusic,
} from "react-icons/fi";
import { ThemeContext } from "../../App";
import {
  darkTheme,
  githubID,
  instagramID,
  lightTheme,
  linkedInID,
} from "../../assets/common/commonText";
import styled from "styled-components";
import { blackTextColor, whiteColor } from "../common/commonStyles";
import { puffOutCenter, pulsateForward } from "../common/animations";
import { BsSoundwave } from "react-icons/bs";

export const SocialIcons = ({ iconId, iconLink, iconSize }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <LinkNoStyle color={theme} id={iconId} href={iconLink} target="_blank">
      {iconId === instagramID && <FiInstagram size={iconSize} />}
      {iconId === linkedInID && <FiLinkedin size={iconSize} />}
      {iconId === githubID && <FiGithub size={iconSize} />}
    </LinkNoStyle>
  );
};
let audio = new Audio("/price_of_freedom.mp3");

export const SoundIcon = ({ iconSize }) => {
  const { theme } = useContext(ThemeContext);
  const [music, setMusic] = useState(false);

  function playMusic(e) {
    e.preventDefault();
    let currentAudio = !music;
    setMusic(!music);
    if (currentAudio) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  return (
    <IconButton
      id="soundIcon"
      newtheme={theme}
      onClick={playMusic}
      isPlaying={music}
    >
      {!music && <FiMusic size={iconSize} />}
      {music && <BsSoundwave size={iconSize} />}
    </IconButton>
  );
};

export const ThemeIcon = ({ iconSize }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  function handleThemeToggle(e) {
    e.preventDefault();
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  }
  return (
    <ThemeButton id="themeIcon" newtheme={theme} onClick={handleThemeToggle}>
      {theme === lightTheme && <FiMoon size={iconSize} />}
      {theme === darkTheme && <FiSun size={iconSize} />}
    </ThemeButton>
  );
};

const IconButton = styled.button`
  && {
    background-color: transparent;
    padding: 0%;
    color: ${(props) =>
      props.newtheme === darkTheme ? whiteColor : blackTextColor};
    border: none;
    &:hover {
      -webkit-animation: ${pulsateForward} 0.8s ease-in-out infinite both;
      animation: ${pulsateForward} 0.8s ease-in-out infinite both;
    }
    cursor: pointer;
  }
`;

const ThemeButton = styled.button`
  && {
    background-color: transparent;
    padding: 0%;
    &:active {
      -webkit-animation: ${puffOutCenter} 1.5s
        cubic-bezier(0.165, 0.84, 0.44, 1) both;
      animation: ${puffOutCenter} 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) both;
    }
    color: ${(props) =>
      props.newtheme === darkTheme ? whiteColor : blackTextColor};
    border: none;
    cursor: pointer;
  }
`;

const LinkNoStyle = styled.a`
  text-decoration: none;
  display: inline-block;
  color: ${(props) =>
    props.color === darkTheme ? whiteColor : blackTextColor};
  &:hover {
    -webkit-animation: ${pulsateForward} 0.8s ease-in-out infinite both;
    animation: ${pulsateForward} 0.8s ease-in-out infinite both;
  }
  &#linkedinIcon:hover {
    color: #0177b5;
  }
  &#githubIcon:hover {
  }
  &#whatsappIcon:hover {
    color: #25d366;
  }
  &#instagramIcon:hover {
    color: #bc2a8d;
  }
`;
