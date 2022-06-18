import styled from "styled-components";
import { FiMoon, FiSun } from "react-icons/fi";
import { GrSoundcloud } from "react-icons/gr";
import { IconContext } from "react-icons";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { blackTextColor, whiteColor } from "../common/commonStyles";

const Effect = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  function handleThemeToggle(e) {
    e.preventDefault();
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <EffectDiv orientation="right">
      <StyledList>
        <IconContext.Provider value={{ className: "shared-class", size: 26 }}>
          {theme === "light" && (
            <ListItems id="darkThemeIcon">
              <IconButton
                changeColor={theme}
                onClick={handleThemeToggle}
              >
                <FiMoon />
              </IconButton>
            </ListItems>
          )}
          {theme === "dark" && (
            <ListItems id="lightThemeIcon">
              <IconButton
                changeColor={theme}
                onClick={handleThemeToggle}
              >
                <FiSun />
              </IconButton>
            </ListItems>
          )}
          <ListItems id="soundIcon">
            <IconButton
              changeColor={theme}
            >
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
  right: 40px;
  padding-bottom: 1vh;
  @media (max-width: 768px) {
    display: none;
  }
`;

const IconButton = styled.button`
  background-color: transparent;
  color: ${(props) => (props.changeColor ==='dark'? whiteColor : blackTextColor)};
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
