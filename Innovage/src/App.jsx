import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Community from "./Pages/Community.jsx";
import Events from "./Pages/Events.jsx";
import Navbar from "./Navbar.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
