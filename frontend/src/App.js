import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import TicketStore from './pages/TicketStore/TicketStore';
import AdminTicketTypes from './components/TicketTypes/AdminTicketTypes';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
=======
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
>>>>>>> GFO-148-dirty

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
