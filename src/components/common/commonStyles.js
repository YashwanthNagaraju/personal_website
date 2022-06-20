import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { fadeIn, slideInBottom } from "./animations";

export const primaryBgColor = "#15181C";
export const whiteBgColor = "#f2f1ef";
export const whiteColor = "#FFFFFF";
export const blackTextColor = "#161513";
export const blueColor = "#075fe4";
export const purpleColor = "#5e3bee";
export const errorColor = "#B00020";
export const successColor = "rgb(56, 142, 60)";
export const myFont = "Oswald";

export const MyText = styled(Typography)`
  && {
    font-family: ${myFont};
  }
`;

export const ColorTextBody = styled(MyText)`
  color: #08fdd8;
`;

export const ColorTextHeading = styled(MyText)`
  color: #08fdd8;
`;

export const StyledContainer = styled(Container)`
  && {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-animation: ${fadeIn} 1.5s cubic-bezier(0.755, 0.05, 0.855, 0.06)
      both;
    animation: ${fadeIn} 1.5s cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
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

export const GeneralTextHeading = styled(MyText)`
  color: #f4f9fc;
`;

export const GeneralTextBody = styled(MyText)`
  color: #f4f9fc;
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
