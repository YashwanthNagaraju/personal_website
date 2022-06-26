import React, { createContext, useState } from "react";
import "./App.css";
import Experience from "./components/experience/Experience";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import styled from "styled-components";
import Footer from "./components/footer/Footer";
import Social from "./components/social/Social";
import Home from "./components/home/Home";
import Effect from "./components/social/Effect";
import {
  blackTextColor,
  primaryBgColor,
  whiteBgColor,
  whiteColor,
} from "./components/common/commonStyles";
import MenuBar from "./components/navigation/MenuBar";
import { darkTheme, lightTheme } from "./assets/common/commonText";

export const ThemeContext = createContext();

function App() {
  const date = new Date();
  const isEvening = date.getHours() > 20 || date.getHours() < 7;
  const [theme, setTheme] = useState(isEvening ? darkTheme : lightTheme);
  const [isOpen, setOpen] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isOpen, setOpen }}>
      <Appdiv className="App" id="App" newtheme={theme}>
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
      </Appdiv>
    </ThemeContext.Provider>
  );
}

const Appdiv = styled.div`
  color: ${(props) =>
    props.newtheme === darkTheme ? whiteColor : blackTextColor};
  background-color: ${(props) =>
    props.newtheme === darkTheme ? primaryBgColor : whiteBgColor};
  -webkit-transition: background-color 1.2s linear;
  -ms-transition: background-color 1.2s linear;
  transition: background-color 1.2s linear;
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
