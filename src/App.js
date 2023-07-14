import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Electives from './pages/Electives';
import Students from './pages/Students';
import Allocations from './pages/Allocations';
import StudentAllocation from './pages/StudentAllocation';
import SubjectAllocation from './pages/SubjectAllocation';
import Navbar from './components/Navbar';
import './index.css'




function App() {
  return (
    <div className="font-barlow">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/electives" element={<Electives />} /> 
          <Route path="/students" element={<Students />} />
          <Route path="/allocations" element={<Allocations />} /> 
          <Route path="/studentallocation" element={<StudentAllocation />} /> 
          <Route path="/subjectallocation" element={<SubjectAllocation />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;