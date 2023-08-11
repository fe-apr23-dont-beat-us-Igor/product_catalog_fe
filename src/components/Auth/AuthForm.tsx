import { useState, FormEventHandler, useEffect } from 'react';
import { Link, redirect } from 'react-router-dom';
import { AuthCredentials } from './RegistrationForm';

import { useAppContext } from '../../context/AppContext';
import { NavLink } from 'react-router-dom';
import Home from '../../pages/Home';
import { massageList } from '../UserMessage/UserMessage';

const initialAuthCred: AuthCredentials = {
  username: '',
  password: '',
};

export interface AuthToken {
  token: string;
}

export const AuthForm = () => {
  const { login, isAuthenticated, setIsAuthenticated, setMessage, message } =
    useAppContext();
  const [authCred, setAuthCred] = useState<AuthCredentials>(initialAuthCred);
  const [authError, setAuthError] = useState(false);

  const handleAuthCredentials = (key: keyof AuthCredentials, value: string) => {
    setAuthCred((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const authSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const res = await login(authCred);

    setMessage(massageList.loginSuccess);
    setAuthCred(initialAuthCred);
    window.location.href = '/home';
  };

  useEffect(() => {
    if (isAuthenticated) {
    window.location.href = '/home';
    }
  }, [isAuthenticated]);

  return (
    <form onSubmit={authSubmit} className="registration__form">
      <h2 className="registration--title">Sign In</h2>

      <div className="registration__group ">
        <label htmlFor="username" className="registration__group--label">
          <p>Email:</p>
        </label>

        <input
          type="text"
          value={authCred.username}
          id="username"
          onChange={(e) => handleAuthCredentials('username', e.target.value)}
          placeholder="Enter your email"
          className="registration__group--input"
          required
        />
      </div>

      <div className="registration__group">
        <label htmlFor="username" className="registration__group--label">
          <p>Password:</p>
        </label>

        <input
          // type="password"
          type="text"
          value={authCred.password}
          id="email"
          onChange={(e) => handleAuthCredentials('password', e.target.value)}
          placeholder="Enter your password"
          className="registration__group--input"
          required
        />
      </div>

      <div className="registration__group">
        <h5 className="registration__group--label">
          Don't have an account yet?
          <Link to="/registration" className="registration__group--link">
            <span> Sign Up!</span>
          </Link>
        </h5>
      </div>

      <button className="button-primary registration__sumit" type="submit">
        Sign In
      </button>
    </form>
  );
};
