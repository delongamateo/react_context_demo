import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from 'react-router-dom';

import { About, Home, Login } from './pages';

const UserContext = React.createContext({
  loggedIn: false,
  userName: null,
  userId: null,
});

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userUuid, setUserUuid] = useState(null);
  const [userSalutation, setUserSalutation] = useState(null);


  const logout = () => {
    setLoggedIn(false);
    setUserUuid(null);
    setUserSalutation(null);
    console.log('logout');
  };

  return (
    <Router>
      <UserContext.Provider
        value={{
          loggedIn: loggedIn,
          userUuid: userUuid,
          userSalutation: userSalutation,
        }}
      >
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li onClick={logout}>
                <Link to="/login">Logout</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/login">
              {loggedIn === true ? <Redirect to="/home" /> : <Login />}
            </Route>

            <Route path="/">
              {loggedIn === false ? <Redirect to="/login" /> : <Home />}
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
