import { Box, Button, Container, Typography } from '@mui/material'
import styled from 'styled-components'
import {
  GeneralTextBody,
  StyledContainer,
  ColorTextHeading,
  secondaryBgColor,
} from '../common/commonStyles'
import { Element } from 'react-scroll'

export const About = () => {
  return (
    <AboutElement name="about">
      <StyledBox sx={{ height: '100vh' }} id="aboutBox">

      </StyledBox>
    </AboutElement>
  )
}

const AboutElement = styled(Element)`
background-color:${secondaryBgColor};
`

const StyledBox = styled(Box) `
  text-align: initial;
  display: inline-block;    
  width: 70%;
  max-width: 1000px;
`
