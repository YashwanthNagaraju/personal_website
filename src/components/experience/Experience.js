import { Box, Button, Container, Typography } from '@mui/material'
import styled from 'styled-components'
import {
  BlueText,
  GeneralTextHeading,
  GreenText,
  GreenTextBody,
  StyledContainer,
} from '../common/commonStyles'
import { Element } from 'react-scroll'

export const Experience = () => {
  // const [dotPosition, setDotPosition] = React.useState('left');

  return (
    <Element name="experience">
      <StyledBox sx={{ height: '80vh' }} id="homeBox">
        <Typography variant="h2" gutterBottom>
          Where I've Worked
        </Typography>
        <Typography variant="h3" gutterBottom>
          Software Engineer @ Optum Global Solutions
        </Typography>
        <Typography variant="body" gutterBottom>
          <p>
            Work with a variety of different languages, platforms, frameworks,
            and content management systems such as JavaScript, TypeScript, Java,
            React, Angular, SpringBoot.
          </p>
          <p>
            Worked in agile team to improve load time and redesign of existing
            websites through single page architecture.
          </p>
          <p>
            Developed and maintained code for our end user websites primarily
            using HTML, CSS, React, and TypeScript.
          </p>
          <p>
            Worked on existing REST API's to implement search functionality in
            website.
          </p>
          <p>
            Responsible for fixing bugs and issues in styles, functionality, and
            implementing web accessibility.
          </p>
        </Typography>
        {/* <Carousl /> */}
      </StyledBox>
    </Element>
  )
}

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
  max-width: 1000px;
`
