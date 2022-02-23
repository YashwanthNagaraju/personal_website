import { Box, Button, Container, Typography } from '@mui/material'
import styled from 'styled-components'
import {
  BlueText,
  GeneralTextHeading,
  GreenTextBody,
} from '../common/commonStyles'
import { Element } from 'react-scroll'

export const About = () => {
  return (
    <Element name="about">
      <StyledContainer fixed id="homeContainer">
        <StyledBox sx={{ height: '100vh' }} id="homeBox">
          <GreenTextBody variant="h1" gutterBottom>
            Hello there. I'm
          </GreenTextBody>
          <GeneralTextHeading variant="h2" component="h2">
            Yashwanth Nagaraju
          </GeneralTextHeading>{' '}
          <Typography variant="h3" gutterBottom>
            I build Websites
          </Typography>
          <Typography variant="body1" gutterBottom>
            I'm a software developer located in melbourne. I enjoys building
            interactive websites and solving complex coding. I'm currently a
            part time freelancer and a full time student at the University of
            Melbourne.
          </Typography>
          {/* <Button variant="outlined">Outlined</Button> */}
        </StyledBox>
      </StyledContainer>
    </Element>
  )
}

const StyledBox = styled(Box)`
  text-align: initial;
  width: 70%;
`
const StyledContainer = styled(Container)`
  margin-top: 15%;
`
