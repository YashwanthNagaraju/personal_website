import { useContext, useState } from "react";
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
  MyText,
  blueColor,
  whiteColor,
  blackTextColor,
  purpleColor,
} from "../common/commonStyles";
import { Sling as Hamburger } from "hamburger-react";
import { slideFwdTop, slideInRightWithBlur } from "../common/animations";
import { darkTheme } from "../../assets/common/commonText";
// import { MobileBar } from "./MobileBar";

const MenuBar = () => {
  const { theme, isOpen, setOpen } = useContext(ThemeContext);

  return (
    <StyledAppBar themeChange={theme} position="fixed" id="navBarMain">
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
          {/* <StyledBoxM id="navLinksM" sx={{ flexGrow: 1 }}>
            <Hamburger
              style={{ display: "flex-end" }}
              toggled={isOpen}
              toggle={setOpen}
              duration={0.8}
              size={24}
              color={theme === darkTheme ? whiteColor : blackTextColor}
            />
          </StyledBoxM> */}
          <StyledBox id="navLinks" sx={{ flexGrow: 1 }}>
            {isOpen &&
              pageRoutes.map((page) => (
                <NavText key={page.id} themeChange={theme}>
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
    @media (max-width: 375px) {
      max-width: 90% !important;
    }
    @media (min-width: 375px) and (max-width: 425px) {
      max-width: 90% !important;
    }
    @media (min-width: 425px) and (max-width: 600px) {
      max-width: 90% !important;
    }
    @media (min-width: 600px) and (max-width: 768px) {
      max-width: 90% !important;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
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

const NavText = styled(MyText)`
  && {
    -webkit-animation: ${slideInRightWithBlur} 0.6s
      cubic-bezier(0.23, 1, 0.32, 1) both;
    animation: ${slideInRightWithBlur} 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
    color: ${(props) =>
      props.themeChange === darkTheme ? whiteColor : blackTextColor};
    margin-left: 15px !important;
    margin-right: 15px !important;
    &:hover {
      color: ${(props) =>
        props.themeChange === darkTheme ? blueColor : purpleColor};
    }
    font-size: 20px;
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
