import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import './App.css';
import About from './Components/About/About';
import NavbarWithSolidBackground from './Components/Header/Header.jsx';
import Home from './Components/Home/Home'; // Import other components as needed
import TreeCrown from './Components/TreeCount/TreeCrown.jsx';
import Path from './Components/Path/Path.jsx';
import Location from './Components/Location/Location.jsx';

function App() {
  return (
    <Router>
      <div>
        <NavbarWithSolidBackground />
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home Route */}
          <Route path="/home" element={<Home />} />
           <Route path="/treecount" element={<TreeCrown />} />
           <Route path="/location" element={<Location />} />
           <Route path="/path" element={<Path />} />
          <Route path="/about" element={<About />} />  {/* About Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
