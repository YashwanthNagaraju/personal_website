import { Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledDiv>
        <Typography variant="body1" gutterBottom>
          Designed and Built by Yashwanth
        </Typography>
      </StyledDiv>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  color: #f4f9fc;
`
const StyledDiv = styled.div`
  color: #f4f9fc;
`
