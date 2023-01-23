import React, { useState } from 'react';

import LoginModal from '../contents/login/LoginModal';
import RegisterModal from '../contents/register/RegisterModal';

import './Header.css';

const Header = ({isAdmin, setIsAdmin}) => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <header>
      <ul className="menu">
        <li className="site-title">ScReAmR</li>
        {!loggedIn && <li 
          className="login-logo"
          onClick={() => setOpenLoginModal(prev => !prev)}
          ><i className="fa-solid fa-right-to-bracket rotate-back"></i></li>}
        {loggedIn && <li 
          className="login-logo"          
          onClick={() => setLoggedIn(prev => !prev)}
          ><i className="fa-solid fa-right-to-bracket rotate-to-bracket"></i></li>}
      </ul>
      {openLoginModal && 
        <LoginModal 
          setOpenLoginModal={setOpenLoginModal}
          setLoggedIn={setLoggedIn}
          setIsAdmin={setIsAdmin}
          setOpenRegisterModal={setOpenRegisterModal}
        />
      }
      {openRegisterModal && 
        <RegisterModal 
          setOpenRegisterModal={setOpenRegisterModal}
          setOpenLoginModal={setOpenLoginModal}
    />}
    </header>
    
  )
}

export default Header;