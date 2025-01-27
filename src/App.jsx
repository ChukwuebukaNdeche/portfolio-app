import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import ProjectPage from './Pages/ProjectPage.jsx';
import Navbar from './Components/Navbar.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';

function App() {
  
  return (
    <>
      <div>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/project' element={<ProjectPage/>}/>
        </Routes>
      </div>

    </>
  )
}

export default App
