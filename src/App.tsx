import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Lookup from './pages/Lookup';
import Account from './pages/Account';
import Login from './pages/Login';
import UserInfo from './pages/UserInfo';
import GymDetails from './pages/GymDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lookup" element={<Lookup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/gym/:id" element={<GymDetails />} />
      </Routes>
    </Router>
  );
}

export default App;