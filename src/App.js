import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import * as Pages from './pages';
import { Burger, Footer } from './layout'
import profilepic from '../public/images/profilepic.jpg'
import { ProjectCards } from './components';

import './style.css';

function App() {

  const navigate = useNavigate();

  return (
    <>
      <Burger />
      <img src={profilepic} onClick={() => { navigate(`/`) }} alt="logo / Animated avatar of Natalie" className="img-circle" />
      <Routes>
        <Route exact path="/" element={<Pages.Home />} />
        <Route path="/about" element={<Pages.About />} />
        <Route path="/projects" element={<Pages.Projects />} />
          <Route path="/projects/:id" element={<ProjectCards />} />
        <Route path="/contact" element={<Pages.Contact />} />
        {/* <Route path="*" element={<Pages.NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );

};

export default App;