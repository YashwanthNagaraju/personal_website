import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

export const Loader = () => {
  const loadText = 'Welcome.'
  return (
    <LoaderContainer className="App">
      <Typewriter
        onInit={(typewriter) => {
          typewriter

            .typeString(loadText)

            // .pauseFor(500)
            // .deleteAll()
            // .typeString()
            .start()
        }}
      />
    </LoaderContainer>
  )
}

const LoaderContainer = styled(Container)`
  padding-bottom: 5%;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  height: 100vh;
  font-family: sans-serif;
  font-weight: 800;
  font-size: 40px;
  text-align: center;
  min-height: 100vh;
  background: #0e1212;
`
