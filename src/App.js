import "./App.css";
import { createContext, useState } from "react";
import MenuBar from "./components/MenuBar";
import Experience from "./components/experience/Experience";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import styled from "styled-components";
import Footer from "./components/footer/Footer";
import Social from "./components/social/Social";
// import Email from './components/social/Email'
// import Loader from './components/loader/Loader'
import Home from "./components/home/Home";
import Effect from "./components/social/Effect";
import { blackTextColor, primaryBgColor, whiteColor } from "./components/common/commonStyles";

export const ThemeContext = createContext();

function App() {
  const [timeOut, setTimeOut] = useState(null);
  const [theme, setTheme] = useState('dark');
  setTimeout(() => {
    setTimeOut(1);
  }, 3000);

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
    <Appdiv className="App" style={{color: theme==="dark"?whiteColor:blackTextColor,backgroundColor:theme==="dark"?primaryBgColor: whiteColor}}>
      
      {/* {timeOut !== 1 && <Loader />} */}
      {/* {timeOut == 1 && ( */}
      <MenuBar />
      <Social />
      <Effect />
      <Home />
      <About />
      <Experience />
      <Contact />
      <Footer />
      {/* )} */}
    </Appdiv>
    </ThemeContext.Provider>
  );
}

const Appdiv = styled.div`

`;

export const pageRoutes = [
  {
    pathname: "/about",
    exact: true,
    name: "About",
    id: "about",
    component: About,
  },
  {
    pathname: "/experience",
    exact: true,
    name: "Experience",
    id: "experience",
    component: Experience,
  },
  {
    pathname: "/contact",
    exact: true,
    name: "Contact",
    id: "contact",
    component: Contact,
  },
];

export default App;
