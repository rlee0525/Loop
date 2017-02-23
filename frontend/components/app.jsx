import React from 'react';
import Navbar from './navbar/navbar_container';

const App = ({ children }) => (
  <div className="home">
    <div className="home-overlay">
      <Navbar />
      { children }
    </div>
  </div>
);

export default App;
