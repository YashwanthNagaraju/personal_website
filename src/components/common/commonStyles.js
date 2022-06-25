import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { darkTheme } from "../../assets/common/commonText";
import { fadeIn, slideInBottom } from "./animations";

export const primaryBgColor = "#15181C";
export const whiteBgColor = "#f2f1ef";
export const whiteColor = "#FFFFFF";
export const blackTextColor = "#161513";
export const blueColor = "#075fe4";
export const purpleColor = "#5e3bee";
export const errorColor = "#B00020";
export const successColor = "rgb(56, 142, 60)";
export const navPrimBgClr = "#1a1e23";

export const myFont = "Oswald";

export const MyText = styled(Typography)`
  && {
    @media (max-width: 374px) {
      font-size: 18px !important;
    }
    @media (min-width: 375px) and (max-width: 425px) {
      font-size: 18px !important;
    }
    @media (min-width: 425px) and (max-width: 600px) {
      font-size: 20px !important;
    }
    @media (min-width: 600px) and (max-width: 768px) {
      font-size: 20px !important;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 20px !important;
    }
    @media (min-width: 1024px) and (max-width: 1200px) {
      font-size: 24px !important;
    }
    @media (min-width: 1200px) and (max-width: 1400px) {
      font-size: 24px !important;
    }
    @media (min-width: 1400px) and (max-width: 1536px) {
      font-size: 24px !important;
    }
    @media (min-width: 1536px) {
      font-size: 24px !important;
    }
    font-family: ${myFont};
  }
`;

export const HeaderText = styled(Typography)`
  && {
    font-size: 52px;
    font-weight: bold;
    color: ${(props) =>
      props.newtheme === darkTheme ? blueColor : purpleColor};
    font-family: ${myFont};
  }
`;

export const GeneralText = styled(Typography)`
  && {
    font-family: ${myFont};
  }
`;

export const StyledContainer = styled(Container)`
  && {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const BottomContainer = styled(Container)`
  && {
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-animation: ${fadeIn} 1.5s cubic-bezier(0.755, 0.05, 0.855, 0.06)
      both;
    animation: ${fadeIn} 1.5s cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
  }
`;

export const StyleDiv = styled.div`
  padding-top: 3%;
`;

export const StyledList = styled.ul`
  list-style-type: none;
`;

export const ListItems = styled.li`
  &&& {
    cursor: pointer;
    padding: 30% 0%;
  }
`;

export const IconsDiv = styled.div`
  @media (min-width: 768px) {
    display: block;
    position: fixed;
    bottom: 0px;
    padding-bottom: 3.5vh;
    -webkit-animation: ${slideInBottom} 1.5s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: ${slideInBottom} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  display: none;
`;

export const CommonDiv = styled.div`
  && {
    display: block;
    text-align: left;
  }
`;

export const TagSpan = styled.span`
  color: ${(props) =>
    props.newtheme === darkTheme ? whiteColor : blackTextColor};
`;

export const ColorSpan = styled.span`
  color: ${(props) =>
    props.newtheme === darkTheme ? whiteColor : blackTextColor};
`;