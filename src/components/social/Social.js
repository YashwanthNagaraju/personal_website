import styled from "styled-components";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import { IconContext } from "react-icons";

const Social = () => {
  return (
    <ContactDiv orientation="left">
      <StyledList>
        <IconContext.Provider value={{ className: "shared-class", size: 26 }}>
          <ListItems id="linkedin">
            <FiLinkedin />
          </ListItems>
          <ListItems id="whatsapp">
            <FaWhatsapp />
          </ListItems>
          <ListItems id="github">
            <FiGithub />
          </ListItems>
          <ListItems id="instagram">
            <FiInstagram />
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

const ListItems = styled.li`
  && {
    cursor: pointer;
    &:hover {
      transform-origin: 50% 0;
    }
    &#linkedin:hover {
      color: #0177b5;
      padding-bottom: 40%;
    }
    &#github:hover {
      padding-bottom: 40%;
    }
    &#whatsapp:hover {
      color: #25d366;
      padding-bottom: 40%;
    }
    &#instagram:hover {
      color: #bc2a8d;
      padding-bottom: 40%;
    }
    padding: 30% 0%;
  }
`;
