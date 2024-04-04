// Home.js
import React, { useState } from 'react';
import AddUser from './AddUser.js';
import './Home.css'; // Import CSS for Home page

const Home = () => {
  const [showAddUser, setShowAddUser] = useState(false);

  const toggleAddUser = () => {
    setShowAddUser(!showAddUser);
  };

  return (
    <div>
      <div className={`home-page ${showAddUser ? 'hidden' : ''}`}>
        <h1>Home Page</h1>
        <button onClick={toggleAddUser}>Add User</button>
      </div>
      {showAddUser && <AddUser />}
    </div>
  );
};

export default Home;
