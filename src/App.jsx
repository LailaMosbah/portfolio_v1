import "./app.css";

import Intro from "./components/Intro/Intro";
import Navbar from "./components/NavBar/Navbar";
import About from "./components/About/About";
import Works from "./components/works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
