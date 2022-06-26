import React from "react";
import { IconContext } from "react-icons";
import { SoundIcon, ThemeIcon } from "../common/Icon";
import { laptopSize } from "../../assets/common/commonText";
import { IconsDiv, ListItems, StyledList } from "../common/commonStyles";

const Effect = () => {
  return (
    <IconsDiv style={{right:'40px'}} id="effectDiv" orientation="right">
      <StyledList>
        <IconContext.Provider value={{ className: "shared-class", size: 26 }}>
          <ListItems>
            <ThemeIcon iconSize={laptopSize} />
          </ListItems>
          <ListItems>
            <SoundIcon iconSize={laptopSize} />
          </ListItems>
        </IconContext.Provider>
      </StyledList>
    </IconsDiv>
  );
};

export default Effect;