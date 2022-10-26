import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import { Navbar } from './components/navbar';
import { GlobalStyle } from './GlobalStyle';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar/>
    </Router>
  )
}

export default App