import styled from 'styled-components'

const Email = () => {
  return (
    <ContactDiv orientation="right">
      <Temp>
        <StyledLink href="https://www.google.com">
          yashwanthn241@gmail.com
        </StyledLink>
      </Temp>
    </ContactDiv>
  )
}

export default Email;

const ContactDiv = styled.div`
  display: block;
  position: fixed;
  bottom: 0px;
  right: 40px;
  @media (max-width: 768px) {
    display: none;
  }
`
const Temp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  writing-mode: vertical-rl;
`
const StyledLink = styled.a`
  text-decoration: none;
  color: #f4f9fc;
  font-size:18px;
`
