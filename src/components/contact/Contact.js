import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import { Element } from 'react-scroll'
import styled from 'styled-components'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export const Contact = () => {
  return (
    <Element name="contact">
      <Container fixed id="contactContainer">
        <StyledBox sx={{ height: '30vh' }} id="contactBox">
          <Typography variant="h2" gutterBottom>
            Get In Touch
          </Typography>
          <Typography variant="body1">
            I'm currently interested in freelance opportunities or internship.
            Feel free to contact me or send me a new message if you have a
            project in mind, want to hire me for a building a new website or
            just want to say hello.
          </Typography>

          <MessageButton variant="outlined">Send A Mail</MessageButton>
        </StyledBox>
      </Container>
    </Element>
  )
}

const StyledBox = styled(Box)`
  display: inline-table;
  @media (max-width: 767px) {
    width: 80%;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`
const MessageButton = styled(Button)`
  margin-top: 50px !important;
  padding: 10px 24px !important;
  color: rgba(8, 253, 216, 1) !important;
  border: 2px solid rgba(8, 253, 216, 1) !important;
`
