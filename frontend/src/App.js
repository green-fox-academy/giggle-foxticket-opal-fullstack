import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import TicketStore from './pages/TicketStore/TicketStore';
import AdminPage from './pages/AdminPage/AdminPage';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { Provider } from 'react-redux';
import store from './flux/store';
import Header from './components/Header/Header';
import ErrorDisplay from './components/ErrorDisplay/ErrorDisplay';
import Register from './components/Register/Register';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <ErrorDisplay />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <PrivateRoute exact path="/shop" component={TicketStore} />
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
