import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import Login from './components/login/login';
function App() {
  return (
    <div className="App">
      <LandingPage />
      <Login />
    </div>
  );
}

export default App;

