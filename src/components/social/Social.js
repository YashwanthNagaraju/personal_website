import styled from "styled-components";
import { IconContext } from "react-icons";
import { slideInBottom } from "../common/animations";
import { SocialIcons } from "../common/Icon";
import {
  githubID,
  instagramID,
  laptopSize,
  linkedInID,
} from "../../assets/common/commonText";
import {
  Github_Link,
  Instagram_Link,
  LinkedIn_Link,
} from "../../assets/common/commonLinks";

const Social = () => {
  return (
    <SocialDiv id="socialDiv" orientation="left">
      <StyledList>
        <IconContext.Provider value={{ className: "shared-class", size: 26 }}>
          <ListItems>
            <SocialIcons
              iconId={linkedInID}
              iconLink={LinkedIn_Link}
              iconSize={laptopSize}
            />
          </ListItems>
          <ListItems>
            <SocialIcons
              iconId={githubID}
              iconLink={Github_Link}
              iconSize={laptopSize}
            />
          </ListItems>
          <ListItems>
            <SocialIcons
              iconId={instagramID}
              iconLink={Instagram_Link}
              iconSize={laptopSize}
            />
          </ListItems>
        </IconContext.Provider>
      </StyledList>
    </SocialDiv>
  );
};

export default Social;

const SocialDiv = styled.div`
  @media (min-width: 768px) {
    -webkit-animation: ${slideInBottom} 1.5s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: ${slideInBottom} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    display: block;
    position: fixed;
    bottom: 0px;
    padding-bottom: 1vh;
  }
  display: none;
`;

const StyledList = styled.ul`
  list-style-type: none;
`;

const ListItems = styled.li`
  &&& {
    cursor: pointer;
    padding: 30% 0%;
  }
`;
