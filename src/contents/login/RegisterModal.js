import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { getUsers } from '../data/usersData';

import './LoginModal.css';

const RegisterModal = ({setOpenLoginModal, setOpenRegisterModal, setLoggedIn, setIsAdmin}) => {  
  const [user, setUser] = useState({
    name: "",
    password_reg: ""
  }); 
  const [showError, setShowError] = useState(false);
  

  const onChangeHandler = e => {
    let newUser = {
      ...user,
      [e.target.name]: e.target.value
    }    
    setUser(newUser);    
  }

  const closeModals = () => {
    setOpenLoginModal(false); 
    setOpenRegisterModal(false);
  }

  return (
    <>      
      <section 
          className={`login-modal ${showError ? 'background-error' : ''}`}>
          <div 
            className={`login-modal__content ${showError ? 'error-border' : ''}`}>
            <span 
              className="login-modal__close"
              onClick={closeModals}>&#10006;</span>
            <h2 className="login-modal__header">Register</h2>
            <span className={`login-modal__error ${showError ? '' : 'hide'}`}>Wrong Email or Password</span>
            <form className="form form__login">
              <div className="form__input-wrapper">
                <label className="form__label" htmlFor="email_reg">Email : </label>
                <input 
                  className="form__input" 
                  id="email_reg"
                  name="email_reg"
                  onChange={onChangeHandler}></input>
              </div>
              <div className="form__input-wrapper">
                <label className="form__label" htmlFor="password_reg">Password : </label>
                <input 
                  className="form__input" 
                  id="password_reg"
                  type="password_reg"
                  name="password_reg"
                  onChange={onChangeHandler}></input>
              </div>
              <div className="form__input-wrapper">
                <label className="form__label" htmlFor="password_reg_2">Repeat<br/>Password : </label>
                <input 
                  className="form__input" 
                  id="password_reg_2"
                  type="password_reg_2"
                  name="password_reg_2"
                  onChange={onChangeHandler}></input>
              </div>
              <button 
                type="submit" 
                className="btn btn__modal"
                // onClick={(e) => {e.preventDefault(); logginIn(user)}}
                >
                Register
              </button>
            </form>  
          </div>
        </section>
    </>
  )
}

export default RegisterModal;