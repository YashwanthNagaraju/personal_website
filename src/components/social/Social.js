import styled from "styled-components";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import { IconContext } from "react-icons";
import { whiteColor } from "../common/commonStyles";

const Social = () => {
  return (
    <ContactDiv orientation="left">
      <StyledList>
        <IconContext.Provider value={{ className: "shared-class", size: 26 }}>
          <ListItems>
            <LinkNoStyle
              id="linkedin"
              href="https://www.linkedin.com/in/yashwanthn/"
              target="_blank"
            >
              <FiLinkedin />
            </LinkNoStyle>
          </ListItems>
          <ListItems>
            <LinkNoStyle
              id="github"
              href="https://github.com/YashwanthNagaraju"
              target="_blank"
            >
              <FiGithub />
            </LinkNoStyle>
          </ListItems>
          <ListItems>
            <LinkNoStyle
              id="instagram"
              href="https://www.instagram.com/a.narcissistic.artist/"
              target="_blank"
            >
              <FiInstagram />
            </LinkNoStyle>
          </ListItems>
        </IconContext.Provider>
      </StyledList>
    </ContactDiv>
  );
};

export default Social;

const ContactDiv = styled.div`
  -webkit-animation: fade-in 1.5s cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
  animation: fade-in 1.5s cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  display: block;
  position: fixed;
  bottom: 0px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledList = styled.ul`
  list-style-type: none;
`;

const LinkNoStyle = styled.a`
  text-decoration: none;
  display: inline-block;
  color: ${whiteColor};
  &:hover {
    -webkit-animation: pulsate-fwd 0.5s ease-in-out infinite both;
    animation: pulsate-fwd 0.5s ease-in-out infinite both;
    @-webkit-keyframes pulsate-fwd {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
      50% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
    @keyframes pulsate-fwd {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
      50% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
  }
  &#linkedin:hover {
    color: #0177b5;
  }
  &#github:hover {
  }
  &#whatsapp:hover {
    color: #25d366;
  }
  &#instagram:hover {
    color: #bc2a8d;
  }
`;

const ListItems = styled.li`
  &&& {
    cursor: pointer;
    padding: 30% 0%;
  }
`;
