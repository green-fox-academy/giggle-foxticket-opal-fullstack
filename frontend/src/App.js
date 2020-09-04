import React from 'react';
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

function App() {
  /* useEffect(() => {
    store.dispatch(loadUser()); --- for when we have an actual endpoint for it...
  }, []); */

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <PrivateRoute exact path="/shop" component={TicketStore} />
            <Route exact path="/admin" component={AdminPage} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
