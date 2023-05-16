import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hydrogen from './pages/Hydrogen';
import Home from './pages/Home';
import React, { Component } from 'react';

class App extends Component {



  render() {
    return (
      <React.Fragment>

        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route index path="/home" element={<Home />} />
            <Route index path="/atom/hydrogen" element={<Hydrogen />} />
          </Routes>
        </BrowserRouter>  

      </React.Fragment>
    );
  }
}

export default App;
