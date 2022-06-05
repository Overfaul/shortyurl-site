import React from 'react';
import MainPage from './page/MainPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './styles/App.css';
function App() {
  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default App;
