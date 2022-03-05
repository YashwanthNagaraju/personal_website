import { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import styled from 'styled-components'
import { TopContainer } from '../common/commonStyles'
import { Element } from 'react-scroll'
import {
  AnimeSubTitle,
  CookSubTitle,
  IdeaSubTitle,
  LotrSubTitle,
  WebSubTitle,
} from './Subtitle'

export const Home = () => {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => {
        if (seconds === 4) {
          return 0
        }
        return seconds + 1
      })
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <Element name="home">
      <StyledBox sx={{ height: '80vh' }} id="homeBox">
        <NameHeading variant="h3" component="h1">
          <FirstNameSpan>Yashwanth</FirstNameSpan>
          <LastNameSpan>Nagaraju</LastNameSpan>
        </NameHeading>
        {/* {seconds === 0 && <WebSubTitle />}
          {seconds === 1 && <AnimeSubTitle />}
          {seconds === 2 && <IdeaSubTitle />} */}
        {seconds >= 0 && <CookSubTitle />}
        {/* {seconds === 0 && <LotrSubTitle />} */}
      </StyledBox>
    </Element>
  )
}

const StyledBox = styled(Box)`
  width: 50%;
  display: inline-block;
  text-align: center;
  padding-top: 8%;
`

export const NameHeading = styled(Typography)`
  font-family: Impact !important;
  text-transform: uppercase;
  z-index: 1;
`

const FirstNameSpan = styled.span`
  display: block;
  color: #08fdd8;
  font-size: min(15.2vw, 119.2px) !important;
`
const LastNameSpan = styled.span`
  display: block;
  font-size: min(23.6vw, 134px) !important;
  background-color: #08fdd8;
  color: #0e1212;
`
