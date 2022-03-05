import { Box, Button, Container, Typography } from '@mui/material'
import styled from 'styled-components'
import {
  GeneralTextBody,
  StyledContainer,
  ColorTextHeading,
} from '../common/commonStyles'
import { Element } from 'react-scroll'

export const About = () => {
  return (
    <Element name="about">
      <StyledBox sx={{ height: '80vh' }} id="homeBox">
        <GeneralTextBody variant="h6" component="h1" gutterBottom>
          Hello there. I'm
        </GeneralTextBody>
        <ColorTextHeading variant="h2" component="h2">
          Yashwanth Nagaraju
        </ColorTextHeading>{' '}
        <Typography variant="h3" component="h3" gutterBottom>
          I build content for the web.
        </Typography>
        <Typography variant="body1" gutterBottom>
          I'm a software developer located in melbourne. I enjoy designing and
          code interactive websites. I'm currently a part time freelancer and a
          full time student at the University of Melbourne.
        </Typography>
        {/* <Button variant="outlined">Outlined</Button> */}
      </StyledBox>
    </Element>
  )
}

const StyledBox = styled(Box)`
  text-align: initial;
  width: 70%;
  max-width: 1000px;
`
