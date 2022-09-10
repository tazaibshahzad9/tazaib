import Navbar from './views/Navbar/Navbar'
import Home from './views/Home/Home'
import { Route, Switch, Router } from "react-router-dom";
import About from './views/About/About';
import Skills from './views/Skills/Skills';
import Portfolio from './views/Portfolio/Portfolio';
import Footer from './views/Footer/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      {/* <Skills /> */}
      {/* <Portfolio /> */}
      {/* <Footer /> */}

    </>
  );
}

export default App;
