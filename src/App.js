import './App.css'
import MenuBar from './components/MenuBar'
import { Home } from './components/home/Home'
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
      <Home />
      <About />
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
    pathname: '/',
    exact: true,
    name: '.home()',
    id: 'home',
    component: Home,
  },
  {
    pathname: '/about',
    exact: true,
    name: '.about()',
    id: 'about',
    component: About,
  },
  {
    pathname: '/contact',
    exact: true,
    name: '.contact()',
    id: 'contact',
    component: Contact,
  },
]

export default App
