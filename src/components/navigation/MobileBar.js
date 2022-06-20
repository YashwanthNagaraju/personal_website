import { Box } from "@mui/material";
import { Container } from "@mui/system";
import Hamburger from "hamburger-react";
import { useContext } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { pageRoutes, ThemeContext } from "../../App";
import { darkTheme } from "../../assets/common/commonText";
import { blackTextColor, whiteColor } from "../common/commonStyles";

export const MobileBar = () => {
  const { theme, isOpen, setOpen } = useContext(ThemeContext);

  return (
    <>
      {isOpen && (
        <MobileContainer id="mobileContainer">
          <IconBox id="mobileIconBox">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              duration={0.8}
              size={32}
              color={theme === darkTheme ? whiteColor : blackTextColor}
            />
          </IconBox>
          <ContentBox id="mobilePageBox">
            <StyledList is="navList">
              {pageRoutes.map((page) => (
                <ListItems>
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
                </ListItems>
              ))}
            </StyledList>
          </ContentBox>
        </MobileContainer>
      )}
    </>
  );
};

const HomeLink = styled(Link)`
  cursor: pointer;
  font-size: 24px;
`;

const MobileContainer = styled(Container)`
  && {
    display: block;
    height: 100vh;

    width: 100vw;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const IconBox = styled(Box)`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ContentBox = styled(Box)`
  height: 90vh;
  width: 100%;
`;

const StyledList = styled.ul`
  list-style-type: none;
`;

const ListItems = styled.li`
  &&& {
    cursor: pointer;
  }
`;
