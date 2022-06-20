import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { fadeIn } from "./animations";

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
