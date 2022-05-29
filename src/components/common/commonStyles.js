import { Container, Typography } from "@mui/material";
import styled from "styled-components";

export const primaryBgColor = "#15181C";
export const secondaryBgColor = "#1E242A";
export const whiteColor = "#FFFFFF";
export const secondColor = "#075fe4";
export const myFont = "Akshar";

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
export const TopContainer = styled(Container)`
  margin-top: 8%;
  min-height: 100vh;
`;
export const StyledContainer = styled(Container)`
  min-height: 100vh;
`;
export const BottomContainer = styled(Container)`
  max-height: 95vh;
`;

export const GeneralTextHeading = styled(MyText)`
  color: #f4f9fc;
`;
export const GeneralTextBody = styled(MyText)`
  color: #f4f9fc;
`;
