import { Box, Button, Container, Typography } from '@mui/material'
import styled from 'styled-components'
import {
  BlueText,
  GeneralTextHeading,
  GreenText,
  GreenTextBody,
} from '../common/commonStyles'
import { Element } from 'react-scroll'

export const Experience = () => {
  return (
    <Element name="experience">
      <StyledContainer fixed id="homeContainer">
        <StyledBox sx={{ height: '100vh' }} id="homeBox">
          <Typography variant="h2" gutterBottom>
            Where I've Worked
          </Typography>
          <Typography variant="h3" gutterBottom>
            Software Engineer
            <span> @ Optum Global Solutions</span>
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
