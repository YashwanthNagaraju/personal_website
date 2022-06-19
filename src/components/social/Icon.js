import { useContext } from "react";
import {
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { ThemeContext } from "../../App";
import {
  githubID,
  instagramID,
  linkedInID,
} from "../../assets/common/commonText";
import styled from "styled-components";
import { blackTextColor, whiteColor } from "../common/commonStyles";
import { puffOutCenter, pulsateForward } from "../common/animations";
import { GrSoundcloud } from "react-icons/gr";

export const SocialIcons = ({ iconId, iconLink,iconSize }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <LinkNoStyle color={theme} id={iconId} href={iconLink} target="_blank">
      {iconId === instagramID && <FiInstagram size={iconSize}/>}
      {iconId === linkedInID && <FiLinkedin size={iconSize}/>}
      {iconId === githubID && <FiGithub size={iconSize}/>}
    </LinkNoStyle>
  );
};

export const SoundIcon = ({iconSize}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <IconButton id="soundIcon" changeColor={theme}>
      <GrSoundcloud size={iconSize}/>
    </IconButton>
  );
};

export const ThemeIcon = ({iconSize}) => {
  const { theme, setTheme } = useContext(ThemeContext);
  function handleThemeToggle(e) {
    e.preventDefault();
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <ThemeButton id="themeIcon" changeColor={theme} onClick={handleThemeToggle}>
      {theme === "light" && <FiMoon size={iconSize}/>}
      {theme === "dark" && <FiSun size={iconSize}/>}
    </ThemeButton>
  );
};

const IconButton = styled.button`
  background-color: transparent;
  padding: 0%;
  color: ${(props) =>
    props.changeColor === "dark" ? whiteColor : blackTextColor};
  border: none;
  cursor: pointer;
`;

const ThemeButton = styled.button`
  background-color: transparent;
  padding: 0%;
  &:active {
    -webkit-animation: ${puffOutCenter} 1.5s cubic-bezier(0.165, 0.84, 0.44, 1)
      both;
    animation: ${puffOutCenter} 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) both;
  }
  color: ${(props) =>
    props.changeColor === "dark" ? whiteColor : blackTextColor};
  border: none;
  cursor: pointer;
`;

const LinkNoStyle = styled.a`
  text-decoration: none;
  display: inline-block;
  color: ${(props) => (props.color === "dark" ? whiteColor : blackTextColor)};
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
