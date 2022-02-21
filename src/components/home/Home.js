import { Box, Container, Typography } from '@mui/material'
import styled from 'styled-components'
import { BlueText } from '../common/commonStyles'

export const Home = () => {
  return (
    <Container fixed>
      <StyledBox sx={{ height: '100vh' }}>
        <BlueText variant="body1" gutterBottom>
          Hey I'm
        </BlueText>
        <BlueText variant="h1" component="h2">
          Yashwanth Nagaraju
        </BlueText>{' '}
        <Typography variant="body1" gutterBottom>
          A front end developer, an AI enthusiast and loves coding.
        </Typography>
      </StyledBox>
    </Container>
  )
}

const StyledBox = styled(Box)`
  text-align: initial;
`
