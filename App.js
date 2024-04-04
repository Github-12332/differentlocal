// success
import React, { useState } from 'react';
import './App.css';
import Home from './Home.js';
import AddUser from './AddUser.js';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  const [showAddUser, setShowAddUser] = useState(false);

  const toggleAddUser = () => {
    setShowAddUser(!showAddUser);
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Home toggleAddUser={toggleAddUser} />} />
          {showAddUser && <Route exact path="/" component={AddUser} />}
          {/* Redirect from "/adduser" to "/" */}
          <Redirect from="/adduser" to="/" />
        </Switch>
      </div>   
    </Router>
  );
}

export default App;