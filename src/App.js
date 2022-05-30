import './App.css'
import { useState } from 'react'
import MenuBar from './components/MenuBar'
import Experience from './components/experience/Experience'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import styled from 'styled-components'
import Footer from './components/footer/Footer'
import Social from './components/social/Social'
import Email from './components/social/Email'
import Loader from './components/loader/Loader'
import Home from './components/home/Home'

function App() {
  const [timeOut, setTimeOut] = useState(null)

  setTimeout(() => {
    setTimeOut(1)
  }, 3000)

  return (
    <Appdiv className="App">
      {/* {timeOut !== 1 && <Loader />} */}
      {/* {timeOut == 1 && ( */}
      <MenuBar />
      {/* <Social />
      <Email /> */}
      <Home />
      <About />
      <Experience />
      <Contact />
      <Footer />
      {/* )} */}
    </Appdiv>
  )
}

const Appdiv = styled.div`
  color: #f4f9fc;
`

export const pageRoutes = [
  {
    pathname: '/about',
    exact: true,
    name: 'About',
    id: 'about',
    component: About,
  },
  {
    pathname: '/experience',
    exact: true,
    name: 'Experience',
    id: 'experience',
    component: Experience,
  },
  {
    pathname: '/contact',
    exact: true,
    name: 'Contact',
    id: 'contact',
    component: Contact,
  },
]

export default App
