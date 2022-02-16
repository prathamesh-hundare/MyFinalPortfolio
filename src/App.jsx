import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import About from "./components/about/About";
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import './app.scss'
import {useState} from 'react';
import Sidemenu from "./components/sidemenu/Sidemenu";


function App() {

  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
      <Sidemenu menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
      <div className="sections">
        <Intro/>
        <About/>
        <Work/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
