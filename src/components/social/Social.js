import styled from "styled-components";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import { IconContext } from "react-icons";
import { blackTextColor, whiteColor } from "../common/commonStyles";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { pulsateForward, slideInBottom } from "../common/animations";

const Social = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <SocialDiv id="socialDiv" orientation="left">
      <StyledList>
        <IconContext.Provider value={{ className: "shared-class", size: 26 }}>
          <ListItems>
            <LinkNoStyle
              color={theme}
              id="linkedinIcon"
              href="https://www.linkedin.com/in/yashwanthn/"
              target="_blank"
            >
              <FiLinkedin />
            </LinkNoStyle>
          </ListItems>
          <ListItems>
            <LinkNoStyle
              color={theme}
              id="githubIcon"
              href="https://github.com/YashwanthNagaraju"
              target="_blank"
            >
              <FiGithub />
            </LinkNoStyle>
          </ListItems>
          <ListItems>
            <LinkNoStyle
              color={theme}
              id="instagramIcon"
              href="https://www.instagram.com/a.narcissistic.artist/"
              target="_blank"
            >
              <FiInstagram />
            </LinkNoStyle>
          </ListItems>
        </IconContext.Provider>
      </StyledList>
    </SocialDiv>
  );
};

export default Social;

const SocialDiv = styled.div`
  -webkit-animation: ${slideInBottom} 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: ${slideInBottom} 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  display: block;
  position: fixed;
  bottom: 0px;
  padding-bottom: 1vh;
  @media (max-width: 767px) {
    display: none;
  }
`;

const StyledList = styled.ul`
  list-style-type: none;
`;

const LinkNoStyle = styled.a`
  text-decoration: none;
  display: inline-block;
  color: ${(props) => (props.color === "dark" ? whiteColor : blackTextColor)};
  &:hover {
    -webkit-animation: ${pulsateForward} 0.5s ease-in-out infinite both;
    animation: ${pulsateForward} 0.5s ease-in-out infinite both;
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

const ListItems = styled.li`
  &&& {
    cursor: pointer;
    padding: 30% 0%;
  }
`;
