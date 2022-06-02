import styled from "styled-components";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import { IconContext } from "react-icons";
import { secondColor } from "../common/commonStyles";

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
      margin-bottom: 3px;
    }
    &#github:hover {
      margin-bottom: 3px;
    }
    &#whatsapp:hover {
      color: #25d366;
      margin-bottom: 3px;
    }
    &#instagram:hover {
      color: #bc2a8d;
      margin-bottom: 3px;
    }
    padding: 30% 0%;
  }
`;
