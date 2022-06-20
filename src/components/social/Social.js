import { IconContext } from "react-icons";
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
import { IconsDiv, ListItems, StyledList } from "../common/commonStyles";

const Social = () => {
  return (
    <IconsDiv id="socialDiv" orientation="left">
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
    </IconsDiv>
  );
};

export default Social;
