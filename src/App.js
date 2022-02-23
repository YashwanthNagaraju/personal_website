import './App.css'
import MenuBar from './components/MenuBar'
import { Experience } from './components/experience/Experience'
import { About } from './components/about/About'
import { Contact } from './components/contact/Contact'
import styled from 'styled-components'
import { Footer } from './components/footer/Footer'
import { Social } from './components/social/Social'
import { Email } from './components/social/Email'

function App() {
  return (
    <Appdiv className="App">
      <MenuBar />
      <Social />
      <Email />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </Appdiv>
  )
}

const Appdiv = styled.div`
  color: white;
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
