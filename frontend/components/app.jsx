import React from 'react';
import Navbar from './navbar/navbar_container';

const App = ({ children }) => (
  <div className="navigation">
    <Navbar />
    { children }
  </div>
);

export default App;
