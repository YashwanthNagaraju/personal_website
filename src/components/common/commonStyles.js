import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const primaryBgColor = "#15181C";
export const whiteColor = "#FFFFFF";
export const blackTextColor = '#231f1f'
export const blueColor = "#075fe4";
export const errorColor = "#B00020";
export const myFont = "Oswald";

export const MyText = styled(Typography)`
  && {
    font-family: ${myFont};
  }
`;

export const TagSpan = styled.span`
color: ${(props) => (props.changeColor ==='dark'? whiteColor : blackTextColor)};
`
export const LineDiv = styled.div`
  && {
    background: ${blueColor};
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
  }
`;

export const GeneralTextHeading = styled(MyText)`
  color: #f4f9fc;
`;

export const GeneralTextBody = styled(MyText)`
  color: #f4f9fc;
`;
