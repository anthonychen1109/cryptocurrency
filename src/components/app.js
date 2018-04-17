import React from 'react';
import images from './images';
import Header from './header';
import Display from '../containers/display';

const bg = images.bg;

const App = () => {
  return (
    <div className="app"
      style={{
        backgroundImage: "url(" + bg + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
        <Header />
        <Display />
    </div>
  )
}

export default App;
