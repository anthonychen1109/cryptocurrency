import React from 'react';

import images from './images';

const bg = images.bg;

const App = () => {
  return (
    <div className="app"
      style={{
        backgroundImage: "url(" + bg + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}>
      <div className="container heading">
        <h1>Crypto Currency</h1>
      </div>
    </div>
  )
}

export default App;
