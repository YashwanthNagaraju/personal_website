import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";
import { pageRoutes } from "../App";
import { Link } from "react-scroll";
import Yash_logo from "./media/Yash_logo.svg";
import { MyText, primaryBgColor } from "./common/commonStyles";

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
          >
            <img src={Yash_logo} alt="logo" />
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
                  <Link
                    key={page.id}
                    offset={-130}
                    to={page.id}
                    spy={true}
                    smooth={true}
                  >
                    {page.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </StyledBoxM>
          <StyledBox id="navLinks" sx={{ flexGrow: 1 }}>
            {pageRoutes.map((page) => (
              <NavText key={page.id}>
                <Link
                  key={page.id}
                  to={page.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {page.name}
                </Link>
              </NavText>
            ))}
            <ResumeButton variant="outlined">Resume</ResumeButton>
          </StyledBox>
        </Toolbar>
      </NavContainer>
    </StyledAppBar>
  );
};
export default MenuBar;

const ResumeButton = styled(Button)`
  color: #075fe4 !important;
  border: 2px solid #075fe4 !important;
  margin-left: 2% !important;
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
      max-width: 80% !important;
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
  margin-left: 15px !important;
  margin-right: 15px !important;
  &:hover {
    color: #08fdd8;
  }
  font-size: 18px;
`;

const StyledAppBar = styled(AppBar)`
  && {
    background: ${primaryBgColor};
    backdrop-filter:blur(4px);
    opacity:4;
  }
`;

const NoStyleLink = styled(Link)`
  @media (max-width: 900px) {
  }

  text-decoration: none;
`;
