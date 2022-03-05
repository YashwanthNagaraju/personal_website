import { Typography } from '@mui/material'
import styled from 'styled-components'

const subText = [
  'A WEB DEVELOPER',
  'AN ANIME FREAK',
  'HAS CRAZY IDEAS',
  'EATS A LOT',
  'LOVES LOTR',
]

export const WebSubTitle = () => {
  return (
    <WebTitle id="changeText" variant="body1" component="h2" gutterBottom>
      {subText[0]}
    </WebTitle>
  )
}

export const AnimeSubTitle = () => {
  return (
    <AnimeTitle id="changeText" variant="body1" component="h2" gutterBottom>
      {subText[1]}
    </AnimeTitle>
  )
}
export const IdeaSubTitle = () => {
  return (
    <IdeaTitle id="changeText" variant="body1" component="h2" gutterBottom>
      {subText[2]}
    </IdeaTitle>
  )
}
export const CookSubTitle = () => {
  return (
    <CookTitle id="changeText" variant="body1" component="h2" gutterBottom>
      {subText[3]}
    </CookTitle>
  )
}
export const LotrSubTitle = () => {
  return (
    <LotrTitle id="changeText" variant="body1" component="h2" gutterBottom>
      {subText[4]}
    </LotrTitle>
  )
}

const WebTitle = styled(Typography)`
  padding-top: 2%;
  font-size: 4rem !important;
  z-index: 1;
  color: #f4f9fc !important;
  font-family: rockwell !important;
`
const AnimeTitle = styled(Typography)`
  padding-top: 2%;
  font-size: 4rem !important;
  color: #f4f9fc !important;
`
const IdeaTitle = styled(Typography)`
  padding-top: 2%;
  font-size: 4rem !important;
  color: #f4f9fc !important;
`
const CookTitle = styled(Typography)`
  padding-top: 2%;
  font-size: min(26.6vw, 83px) !important;
  color: #f4f9fc !important;
  font-family: fantasy !important;
`
const LotrTitle = styled(Typography)`
  padding-top: 2%;
  font-size: 4rem !important;
  color: #f4f9fc !important;
`
