import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import TicketStore from './pages/TicketStore/TicketStore';
import AdminTicketTypes from './components/TicketTypes/AdminTicketTypes';
import Login from './components/Login/Login';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <PrivateRoute exact path="/shop" component={TicketStore} />
          <Route exact path="/admin" component={AdminTicketTypes} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
