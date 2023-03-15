import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Action from "./Components/Action/Action";
import Humans from "./Components/Humans/Humans";
import Landscape from "./Components/Landscape/Landscape";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/action" element={<Action />}></Route>
          <Route path="/humans" element={<Humans />}></Route>
          <Route path="/landscape" element={<Landscape />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
