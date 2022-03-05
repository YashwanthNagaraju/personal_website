import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material'

import { Element } from 'react-scroll'
import styled from 'styled-components'
import { BottomContainer } from '../common/commonStyles'

export const Contact = () => {
  return (
    <Element name="contact">
      <StyledBox id="contactBox">
        <Typography variant="h2" gutterBottom>
          Get In Touch
        </Typography>
        <Typography variant="body1">
          I'm currently interested in freelance opportunities or a good job.
          Feel free to contact me or send me message if you have a project in
          mind, want to hire me for building a personal website or just want to
          say hello.
        </Typography>
        <MessageButton variant="outlined">Send A Message</MessageButton>
      </StyledBox>
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
  max-width: 1000px;
  min-height: 70vh;
  width: 70%;
`

const MessageButton = styled(Button)`
  margin-top: 50px !important;
  padding: 10px 24px !important;
  color: rgba(8, 253, 216, 1) !important;
  border: 2px solid rgba(8, 253, 216, 1) !important;
`
