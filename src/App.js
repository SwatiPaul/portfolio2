import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import HeroSection from "./pages/HeroSection";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import global from "./styles/global.css";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  return (
    <div className='App'>
      <ParticleBackground />
      <Router>
        <Switch>
          <Route exact path='/' component={HeroSection} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
