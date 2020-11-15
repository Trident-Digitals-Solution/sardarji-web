import React from 'react';
// import './App.css';
import Landing from './components/Landing/Landing';
import { BrowserRouter as Router } from 'react-router-dom'
// import Loading from './components/Loding';

function App() {
  return (
    <>
      {/* <Loading /> */}
      <Router>

        <Landing />
      </Router>
    </>
  );
}

export default App;
