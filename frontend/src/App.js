import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import TicketStore from './pages/TicketStore/TicketStore';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/shop" component={TicketStore} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
