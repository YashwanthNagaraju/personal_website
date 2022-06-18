import { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";
import { pageRoutes, ThemeContext } from "../App";
import { Link } from "react-scroll";
import Yash_logo_dark from "../assets/images/My_Logo_dark.svg";
import Yash_logo_light from "../assets/images/My_Logo_light.svg";

import {
  MyText,
  blueColor,
  whiteColor,
  blackTextColor,
} from "./common/commonStyles";
import { Sling as Hamburger } from "hamburger-react";

const MenuBar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBar changeColor={theme} position="fixed" id="navBarMain">
      <NavContainer maxWidth="xl" id="navContainer">
        <Toolbar disableGutters id="navBar">
          <NoStyleLink
            offset={-200}
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            id="logoLink"
            tabIndex={1}
          >
            <img
              src={theme === "dark" ? Yash_logo_dark : Yash_logo_light}
              alt="Yashwanth's website logo"
            />
          </NoStyleLink>

          <StyledBoxM id="navLinksM" sx={{ flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {isOpen &&
                pageRoutes.map((page) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <HomeLink
                      key={page.id}
                      offset={-130}
                      to={page.id}
                      spy={true}
                      smooth={true}
                      tabIndex={1}
                    >
                      {page.name}
                    </HomeLink>
                  </MenuItem>
                ))}
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </Menu>
          </StyledBoxM>
          <StyledBox id="navLinks" sx={{ flexGrow: 1 }}>
            {isOpen &&
              pageRoutes.map((page) => (
                <NavText key={page.id} changeColor={theme}>
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
              color={theme === "dark" ? whiteColor : blackTextColor}
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
    -webkit-animation: slide-in-fwd-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-fwd-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    @-webkit-keyframes slide-in-fwd-top {
      0% {
        -webkit-transform: translateZ(-1400px) translateY(-800px);
        transform: translateZ(-1400px) translateY(-800px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateZ(0) translateY(0);
        transform: translateZ(0) translateY(0);
        opacity: 1;
      }
    }
    @keyframes slide-in-fwd-top {
      0% {
        -webkit-transform: translateZ(-1400px) translateY(-800px);
        transform: translateZ(-1400px) translateY(-800px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateZ(0) translateY(0);
        transform: translateZ(0) translateY(0);
        opacity: 1;
      }
    }

    @media (max-width: 374px) {
      max-width: 90% !important;
    }
    @media (min-width: 375px) and (max-width: 424px) {
      max-width: 90% !important;
    }
    @media (min-width: 425px) and (max-width: 599px) {
      max-width: 90% !important;
    }
    @media (min-width: 600px) and (max-width: 767px) {
      max-width: 90% !important;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      max-width: 85% !important;
    }
    @media (min-width: 1024px) and (max-width: 1199px) {
      max-width: 85% !important;
    }
    @media (min-width: 1200px) {
      max-width: 95% !important;
    }
  }
`;

const StyledBoxM = styled(Box)`
  @media (max-width: 767px) {
    display: flex;
  }
  display: none;
`;

const StyledBox = styled(Box)`
  justify-content: flex-end;
  align-items: center;
  @media (min-width: 768px) {
    display: flex;
  }
  display: none;
`;

const NavText = styled(MyText)`
  && {
    -webkit-animation: slide-in-blurred-right 0.6s
      cubic-bezier(0.23, 1, 0.32, 1) both;
    animation: slide-in-blurred-right 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
    @-webkit-keyframes slide-in-blurred-right {
      0% {
        -webkit-transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
        transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
        -webkit-transform-origin: 0% 50%;
        transform-origin: 0% 50%;
        -webkit-filter: blur(40px);
        filter: blur(40px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateX(0) scaleY(1) scaleX(1);
        transform: translateX(0) scaleY(1) scaleX(1);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        -webkit-filter: blur(0);
        filter: blur(0);
        opacity: 1;
      }
    }
    @keyframes slide-in-blurred-right {
      0% {
        -webkit-transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
        transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
        -webkit-transform-origin: 0% 50%;
        transform-origin: 0% 50%;
        -webkit-filter: blur(40px);
        filter: blur(40px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateX(0) scaleY(1) scaleX(1);
        transform: translateX(0) scaleY(1) scaleX(1);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        -webkit-filter: blur(0);
        filter: blur(0);
        opacity: 1;
      }
    }
    color: ${(props) =>
      props.changeColor === "dark" ? whiteColor : blackTextColor};
    margin-left: 15px !important;
    margin-right: 15px !important;
    &:hover {
      color: ${blueColor};
    }
    &:hover {
      color: ${blueColor};
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
  @media (max-width: 900px) {
  }
  text-decoration: none;
`;
