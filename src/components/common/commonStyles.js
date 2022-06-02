import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const primaryBgColor = "#15181C";
export const secondaryBgColor = "#1E242A";
export const whiteColor = "#FFFFFF";
export const secondColor = "#075fe4";
export const myFont = "Oswald";

export const MyText = styled(Typography)`
  && {
    font-family: ${myFont};
  }
`;

export const LineDiv = styled.div`
  && {
    background: ${secondColor};
    min-width: 7px;
    margin-right: 5%;
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
  && {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
