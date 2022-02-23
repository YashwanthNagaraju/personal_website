import styled from 'styled-components'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'

export const Social = () => {
  return (
    <ContactDiv orientation="left">
      <StyledList>
        <ListItems>
          <LinkedInIcon />
        </ListItems>
        <ListItems>
          <InstagramIcon />
        </ListItems>
      </StyledList>
    </ContactDiv>
  )
}

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
`
