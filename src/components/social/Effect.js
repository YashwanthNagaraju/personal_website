import styled, { css } from "styled-components";
import { FiMoon, FiSun } from "react-icons/fi";
import { GrSoundcloud } from "react-icons/gr";
import { IconContext } from "react-icons";
import { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import { blackTextColor, whiteColor } from "../common/commonStyles";
import { slideInBottom, puffInCenter } from "../common/animations";

const Effect = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [fade1, setFade1] = useState(true);
  const [fade2, setFade2] = useState(false);

  function handleThemeToggle(e) {
    e.preventDefault();
    setFade1((prevState) => {
      return !prevState;
    });
    setFade2((prevState) => {
      return !prevState;
    });
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <EffectDiv id="effectDiv" orientation="right">
      <StyledList>
        <IconContext.Provider value={{ className: "shared-class", size: 26 }}>
          {theme === "light" && (
            <ListItems id="themeIcon">
              <ThemeButton
                hasChanged={fade1}
                changeColor={theme}
                onClick={handleThemeToggle}
              >
                <FiMoon />
              </ThemeButton>
            </ListItems>
          )}
          {theme === "dark" && (
            <ListItems id="themeIcon">
              <ThemeButton
                hasChanged={fade2}
                changeColor={theme}
                onClick={handleThemeToggle}
              >
                <FiSun />
              </ThemeButton>
            </ListItems>
          )}
          <ListItems id="soundIcon">
            <IconButton changeColor={theme}>
              <GrSoundcloud />
            </IconButton>
          </ListItems>
        </IconContext.Provider>
      </StyledList>
    </EffectDiv>
  );
};

export default Effect;

const EffectDiv = styled.div`
  display: block;
  position: fixed;
  bottom: 0px;
  right: 40px;
  padding-bottom: 1vh;
  -webkit-animation: ${slideInBottom} 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: ${slideInBottom} 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  @media (max-width: 767px) {
    display: none;
  }
`;

const ThemeButton = styled.button`
  background-color: transparent;
  -webkit-animation: ${(props) =>
    props.hasChanged
      ? css`
          ${puffInCenter} 0.5s cubic-bezier(0.470, 0.000, 0.745, 0.715) both
        `
      : ""};
  animation: ${(props) =>
    props.hasChanged
      ? css`
          ${puffInCenter} 0.5s cubic-bezier(0.470, 0.000, 0.745, 0.715) both
        `
      : ""};
  }

  color: ${(props) =>
    props.changeColor === "dark" ? whiteColor : blackTextColor};
  border: none;
  cursor: pointer;
`;

const IconButton = styled.button`
  background-color: transparent;
  color: ${(props) =>
    props.changeColor === "dark" ? whiteColor : blackTextColor};
  border: none;
  cursor: pointer;

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
