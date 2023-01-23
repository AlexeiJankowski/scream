import React, { useState, useEffect } from 'react';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../regex/regex';
import { createUser } from '../../data/users';

import '../login/LoginModal.css';

const RegisterModal = ({setOpenLoginModal, setOpenRegisterModal, setLoggedIn, setIsAdmin}) => {  
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");

  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validMatch, setValidMatch] = useState(false);

  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  },[email]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    setValidMatch(password === matchPassword);
  },[password, matchPassword]);

  useEffect(() => {
    if (validEmail && validPassword && validMatch) {
      setShowError(false);
    }
  },[validMatch, validPassword, validEmail])

  const onChangeHandler = (e, setter) => {
    setter(e.target.value);
  }

  const closeModals = () => {
    setOpenLoginModal(false); 
    setOpenRegisterModal(false);
  }

  const register = e => {
    e.preventDefault();
    if (!validEmail) {
      setShowError(true);
      setError("Wrong Email Address");
    } 
    else if (!validPassword || !validMatch) {
      setShowError(true);
      setError("Wrong Password");
    }
    else if (validEmail && validPassword && validMatch) {
      setShowError(false);
      createUser({email, password})
    }
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
            <p className={`login-modal__error ${showError ? '' : 'hide'}`}>{error}</p>
            <form className="form form__login">
              <div className="form__input-wrapper">
                <label className="form__label" htmlFor="email_reg">Email : </label>
                <input 
                  className="form__input" 
                  id="email_reg"
                  name="email_reg"
                  onChange={(e) => onChangeHandler(e, setEmail)}
                  required
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="emailnote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  ></input>

                  <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "hide"}>                    
                    Type your email in
                  </p>

              </div>
              <div className="form__input-wrapper">
                <label className="form__label" htmlFor="password_reg">Password : </label>
                <input 
                  className="form__input" 
                  id="password_reg"
                  type="password"
                  name="password_reg"
                  onChange={(e) => onChangeHandler(e, setPassword)}
                  required
                  aria-invalid={validPassword ? "false" : "true"}
                  aria-describedby="passwordnote"
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                  ></input>

                <p id="passwordnote" className={passwordFocus && !validPassword ? "instructions" : "hide"}>                    
                  8 to 24 characters.<br />
                  Must include uppercase and lowercase letters, a number and a special character.<br />
                  Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                </p>

              </div>
              <div className="form__input-wrapper">
                <label className="form__label" htmlFor="password_reg_2">Repeat<br/>Password : </label>
                <input 
                  className="form__input" 
                  id="password_reg_2"
                  type="password"
                  name="password_reg_2"
                  onChange={(e) => onChangeHandler(e, setMatchPassword)}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  ></input>
              </div>
              <button 
                type="submit" 
                className="btn btn__modal"
                onClick={register}
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