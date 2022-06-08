import React from 'react';
import MainPage from './page/MainPage';
import PrivacyPage from './page/PrivacyPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './styles/App.css';
function App() {
  return (
    //Routes for each page (In footer you can find links connected to routes)
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<MainPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
