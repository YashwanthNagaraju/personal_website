import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import styled from 'styled-components'
import { pageRoutes } from '../App'
import { Link } from 'react-scroll'

const MenuBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const logoText = '<Y/>'
  return (
    <AppBar position="static" id="navMain">
      <Container maxWidth="xl" id="navContainer">
        <Toolbar disableGutters id="navBar">
          <LogoText
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'grid' } }}
          >
            {logoText}
          </LogoText>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pageRoutes.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Link to={page.id} spy={true} smooth={true}>
                    {page.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LogoText
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'grid', md: 'none' } }}
          >
            {logoText}
          </LogoText>
          <StyledBox
            id="navLinks"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            {pageRoutes.map((page) => (
              <NavText>
                <Link to={page.id} spy={true} smooth={true}>
                  {page.name}
                </Link>
              </NavText>
            ))}
          </StyledBox>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default MenuBar

const LogoText = styled(Typography)``

const StyledBox = styled(Box)`
  justify-content: flex-end;
`
const NavText = styled(Typography)`
  margin-left: 15px !important;
  margin-right: 15px !important;
`
