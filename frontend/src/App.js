import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import TicketStore from './pages/TicketStore/TicketStore';
import AdminTicketTypes from './components/TicketTypes/AdminTicketTypes'
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/shop" component={TicketStore} />
          <Route exact path="/admin" component={AdminTicketTypes} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
