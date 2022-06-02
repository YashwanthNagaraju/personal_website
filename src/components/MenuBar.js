import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";
import { pageRoutes } from "../App";
import { Link } from "react-scroll";
import Yash_logo from "../assets/images/My_Logo.svg";
import { MyText, primaryBgColor, secondColor } from "./common/commonStyles";

const MenuBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBar position="fixed" id="navBarMain">
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
            <img src={Yash_logo} alt="Yashwanth's website logo" />
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
              {pageRoutes.map((page) => (
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
            </Menu>
          </StyledBoxM>
          <StyledBox id="navLinks" sx={{ flexGrow: 1 }}>
            {pageRoutes.map((page) => (
              <NavText key={page.id}>
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
          </StyledBox>
        </Toolbar>
      </NavContainer>
    </StyledAppBar>
  );
};
export default MenuBar;

// const ResumeButton = styled(Button)`
//   color: #075fe4 !important;
//   border: 2px solid #075fe4 !important;
//   margin-left: 2% !important;
// `;

const HomeLink = styled(Link)`
  cursor: pointer;
`;

const NavContainer = styled(Container)`
  && {
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
    margin-left: 15px !important;
    margin-right: 15px !important;
    &:hover {
      color: ${secondColor};
    }
    &:hover {
      color: ${secondColor};
    }
    font-size: 20px;
  }
`;

const StyledAppBar = styled(AppBar)`
  && {
    box-shadow: none;
    background: linear-gradient(
      180deg,
      ${primaryBgColor},
      rgba(21, 24, 28, 0.8) 60%,
      transparent
    );
  }
`;

const NoStyleLink = styled(Link)`
  margin-top: 15px;
  cursor: pointer;
  @media (max-width: 900px) {
  }
  text-decoration: none;
`;
