import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import styled from "styled-components";
import {
  BlueText,
  GeneralTextHeading,
  GreenText,
  GreenTextBody,
  primaryBgColor,
  StyledContainer,
} from "../common/commonStyles";
import { Element } from "react-scroll";
import { Carousel } from "antd";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#ffffff" : "#ffffff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Experience = () => {
  // const [dotPosition, setDotPosition] = React.useState('left');

  return (
    <ExperienceElement name="experience">
      <StyledBox sx={{ height: "100vh" }} id="homeBox">
        <Stack direction="row" spacing={2}>

        </Stack>

      </StyledBox>
    </ExperienceElement>
  );
};

const ExperienceElement = styled(Element)`
  background-color: ${primaryBgColor};
`;

const StyledBox = styled(Box)`
  text-align: initial;
  display: inline-table;
  @media (max-width: 767px) {
    width: 80%;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
  max-width: 1000px;
  width: 70%;
`;
