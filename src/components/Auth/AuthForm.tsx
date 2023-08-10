import { useState, FormEventHandler } from 'react';
import { Link, redirect } from 'react-router-dom';
import { AuthCredentials } from './RegistrationForm';

import { useAppContext } from '../../context/AppContext';
import { NavLink } from 'react-router-dom';
import Home from '../../pages/Home';
import { massageList } from '../UserMessage/UserMessage';

const initialAuthCred: AuthCredentials = {
  username: 'newUser@gmail.com',
  password: '123456',
};

export interface AuthToken {
  token: string;
}

export const AuthForm = () => {
  const { login, isAuthenticated, setIsAuthenticated, setMessage } =
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
    return redirect('/authorization');
  };

  return (
    <form onSubmit={authSubmit} className="registration__form">
      <h2 className="registration--title">Sign In</h2>

      <div className="registration__group ">
        <label htmlFor="username" className="registration__group--label">Email: </label>

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
        <label htmlFor="email" className="registration__group--label">
          Password:
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
        <label htmlFor="login" className="registration__group--label">
          Don't have an account yet?
        </label>
        <Link to="/registration" className="registration__group--link">
          Sign Up!
        </Link>
      </div>

      <button className="button-primary registration__sumit" type="submit">
        Sign In
      </button>
    </form>
  );
};
