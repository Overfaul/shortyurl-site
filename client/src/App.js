import React from 'react';
import MainPage from './page/MainPage';
import PrivacyPage from './page/PrivacyPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './styles/App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<MainPage/>}/>
          <Route path = "/privacy" element = {<PrivacyPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
