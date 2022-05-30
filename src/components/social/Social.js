import styled from 'styled-components'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const Social = () => {
  return (
    <ContactDiv orientation="left">
      <StyledList>
        <ListItems>
          <LocationOnIcon />
        </ListItems>
        <ListItems>
          <LinkedInIcon />
        </ListItems>
        <ListItems>
          <InstagramIcon />
        </ListItems>
        <ListItems>
          <WhatsAppIcon />
        </ListItems>
      </StyledList>
    </ContactDiv>
  )
}

export default Social;

const ContactDiv = styled.div`
  display: block;
  position: fixed;
  bottom: 0px;
  @media (max-width: 767px) {
    display: none;
  }
`
const StyledList = styled.ul`
  list-style-type: none;
`
const ListItems = styled.li`
  height: 40px;
  margin: 30% 0%;
`
