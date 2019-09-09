import React from 'react';
import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';
import Describe from './Components/Describe/Describe';
import Works from './Components/Works/Works';
import Social from './Components/Social/Social';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Describe/>
      <Works/>
      <Social/>
    </div>
  );
}

export default App;