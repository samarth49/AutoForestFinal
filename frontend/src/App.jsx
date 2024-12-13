import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import NavbarWithSolidBackground from './Components/Header/Header.jsx';
import Home from './Components/Home/Home';
import TreeCrown from './Components/TreeCount/TreeCrown.jsx';
import Path from './Components/Path/Path.jsx';
import MapPage from './Components/MapComponent.jsx';
import Footer from './Components/Footer/Footer.jsx';

const App = () => {
  const location = useLocation();

  const showNavbar = location.pathname !== '/mappage';
  const showFooter = location.pathname !== '/mappage';

  return (
    <div>
      {showNavbar && <NavbarWithSolidBackground />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/treecount" element={<TreeCrown />} />
        <Route path="/path" element={<Path />} />
        <Route path="/about" element={<About />} />
        <Route path="/mappage" element={<MapPage />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;