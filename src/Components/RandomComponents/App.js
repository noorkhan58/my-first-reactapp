import React from 'react';
import Home from './Home';
import User from '../UserComponents/User';
const App = () => {
  return (
    <div>
      <Home video="Anik" name="Javascript" view="1000" time="1 Year"/>
      <h2>This is my Second Component</h2>
      <Home video="Fardin Khan" time="1 Year" />

    </div>
  )
}



export default App
