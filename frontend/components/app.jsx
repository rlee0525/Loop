import React from 'react';

const App = ({ children }) => (
  <div className="home">
    <div className="home-overlay">
      { children }
    </div>
  </div>
);

export default App;
