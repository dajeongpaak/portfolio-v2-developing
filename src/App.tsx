// Built-in 
import React from 'react';
import { Routes, Route } from 'react-router-dom'

// Internal
import './App.scss';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Work from './pages/work/Work';
import Header from './layouts/header/Header';


// Variable name is camelCase
// Component name is PascalCase
// Double Quote for JSX single quote for js 

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}></Route>
        <Route path="/work" element={<Work />}></Route>
      </Routes>
    </>
  );
}

export default App;
