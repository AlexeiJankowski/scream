import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './sctructure/Header';
import Footer from './sctructure/Footer';
import Home from './contents/Home';

import Posts from './admin-page/Posts';
import Users from './admin-page/Users';
import EditUser from './admin-page/EditUser';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <Header 
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      />
      <Routes>
        <Route path="" element={<Home />} exact />
        <Route path="/admin/posts" element={<Posts />} exact />        
        <Route path="/admin/users" element={<Users />} exact />    
        <Route path="/edit-user/:id" element={<EditUser />} exact />    
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
