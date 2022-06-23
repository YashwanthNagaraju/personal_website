import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import styled from "styled-components";
import { pageRoutes, ThemeContext } from "../../App";
import { Link } from "react-scroll";
import Yash_logo_dark from "../../assets/images/L_Logo_dark.svg";
import Yash_logo_light from "../../assets/images/L_Logo_light.svg";
import Yash_Mlogo_dark from "../../assets/images/M_Logo_dark.svg";
import Yash_Mlogo_light from "../../assets/images/M_Logo_light.svg";
import {
  GeneralText,
  blueColor,
  whiteColor,
  blackTextColor,
  purpleColor,
  primaryBgColor,
  whiteBgColor,
} from "../common/commonStyles";
import { Sling as Hamburger } from "hamburger-react";
import {
  entryAnimation,
  exitAnimation,
  slideFwdTop,
} from "../common/animations";
import { darkTheme } from "../../assets/common/commonText";
import { Slide } from "@mui/material";

const MenuBar = () => {
  const { theme, isOpen, setOpen } = useContext(ThemeContext);

  return (
    <>
      <StyledAppBar position="fixed" id="navBar">
        <NavContainer maxWidth="xl" id="navContainer">
          <Toolbar disableGutters id="navBar">
            <LogoLinkL
              offset={-200}
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              id="logoLink"
              tabIndex={1}
            >
              <img
                src={theme === darkTheme ? Yash_logo_dark : Yash_logo_light}
                alt="Yashwanth's website logo"
              />
            </LogoLinkL>
            <LogoLinkM
              offset={-200}
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              id="logoLink"
              tabIndex={1}
            >
              <img
                src={theme === darkTheme ? Yash_Mlogo_dark : Yash_Mlogo_light}
                alt="Yashwanth's Mobile logo"
              />
            </LogoLinkM>
            <StyledBoxM id="navLinksM" sx={{ flexGrow: 1 }}>
              <Hamburger
                style={{ display: "flex-end" }}
                toggled={isOpen}
                toggle={setOpen}
                duration={0.8}
                size={24}
                color={theme === darkTheme ? whiteColor : blackTextColor}
              />
            </StyledBoxM>
            <StyledBox id="navLinks" sx={{ flexGrow: 1 }}>
              {pageRoutes.map((page) => (
                <NavText key={page.id} newtheme={theme} open={isOpen}>
                  <HomeLink
                    key={page.id}
                    to={page.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    tabIndex={1}
                  >
                    {page.name}
                  </HomeLink>
                </NavText>
              ))}
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                duration={0.8}
                color={theme === darkTheme ? whiteColor : blackTextColor}
              />
            </StyledBox>
          </Toolbar>
        </NavContainer>
      </StyledAppBar>
      <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
        <SideNav id="mobileNavBar" newtheme={theme} open={isOpen}>
          <MobileNav>
            {pageRoutes.map((page) => (
              <NavText key={page.id} newtheme={theme} open={isOpen}>
                <HomeLink
                  key={page.id}
                  to={page.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  tabIndex={1}
                >
                  {page.name}
                </HomeLink>
              </NavText>
            ))}
          </MobileNav>
        </SideNav>
      </Slide>
    </>
  );
};
export default MenuBar;

const HomeLink = styled(Link)`
  cursor: pointer;
`;

const NavContainer = styled(Container)`
  && {
    -webkit-animation: ${slideFwdTop} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: ${slideFwdTop} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    @media (max-width: 1024px) {
      max-width: 90% !important;
    }
    @media (min-width: 1024px) {
      max-width: 95% !important;
    }
  }
`;

const StyledBoxM = styled(Box)`
  @media (min-width: 768px) {
    display: none;
  }
  display: flex;
  justify-content: flex-end;
`;

const StyledBox = styled(Box)`
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  display: none;
`;

const SideNav = styled.aside`
  height: 100%;
  width: 50%;
  @media (max-width: 425px) {
    width: 65%;
  }
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  -moz-box-align: center;
  align-items: center;
  background-color: ${(props) =>
    props.newtheme === darkTheme ? primaryBgColor : whiteBgColor};
  overflow-x: hidden;
  box-shadow: -10px 0px 30px -15px ${(props) => (props.newtheme === darkTheme ? primaryBgColor : whiteBgColor)};
  @media (min-width: 768px) {
    display: none;
  }
`;

const NavText = styled(GeneralText)`
  && {
    color: ${(props) =>
      props.newtheme === darkTheme ? whiteColor : blackTextColor};
    margin-left: 15px !important;
    margin-right: 15px !important;
    &:hover {
      color: ${(props) =>
        props.newtheme === darkTheme ? blueColor : purpleColor};
    }
    @media (min-width: 768px) {
      font-size: 20px;
      -webkit-animation: ${(props) =>
        props.open ? entryAnimation : exitAnimation};
      animation: ${(props) => (props.open ? entryAnimation : exitAnimation)};
    }
    font-size: 28px;
  }
`;

const StyledAppBar = styled(AppBar)`
  && {
    box-shadow: none;
    background: transparent;
  }
`;

const NoStyleLink = styled(Link)`
  margin-top: 15px;
  cursor: pointer;
  text-decoration: none;
`;

const LogoLinkL = styled(NoStyleLink)`
  @media (max-width: 600px) {
    display: none;
  }
`;
const LogoLinkM = styled(NoStyleLink)`
  @media (min-width: 601px) {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: inline-flex;
  -moz-box-pack: justify;
  justify-content: space-between;
  -moz-box-align: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  text-align: center;
  gap: 10vh;
`;
