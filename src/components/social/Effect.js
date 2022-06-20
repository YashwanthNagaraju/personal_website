import styled from "styled-components";
import { IconContext } from "react-icons";
import { slideInBottom } from "../common/animations";
import { SoundIcon, ThemeIcon } from "../common/Icon";
import { laptopSize } from "../../assets/common/commonText";

const Effect = () => {
  return (
    <EffectDiv id="effectDiv" orientation="right">
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
    </EffectDiv>
  );
};

export default Effect;

const EffectDiv = styled.div`
  @media (min-width: 768px) {
    display: block;
    position: fixed;
    bottom: 0px;
    right: 40px;
    padding-bottom: 1vh;
    -webkit-animation: ${slideInBottom} 1.5s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: ${slideInBottom} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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
