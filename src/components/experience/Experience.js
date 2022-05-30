import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import styled from "styled-components";
import { primaryBgColor } from "../common/commonStyles";
import { Element } from "react-scroll";

const Experience = () => {
  // const [dotPosition, setDotPosition] = React.useState('left');

  return (
    <ExperienceElement name="experience">
      <StyledBox sx={{ height: "100vh" }} id="homeBox">
        <Stack direction="row" spacing={2}></Stack>
      </StyledBox>
    </ExperienceElement>
  );
};

export default Experience;

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
