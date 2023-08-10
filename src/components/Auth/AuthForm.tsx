import React from 'react';
import { Link } from 'react-router-dom';

export const AuthForm = () => {
  return (
    <form
      // onSubmit={registretionSubmit}
      className="registration__form"
    >
      <h2 className="registration--title">Sign In</h2>

      <div className="registration__group ">
        <label htmlFor="username" className="registration__group--label">Email: </label>
        <input
          type="email"
          //   value={regCredentials.username}
          id="username"
          //   onChange={(e) => handleRegCredentials('username', e.target.value)}
          placeholder="Enter your username"
          className="registration__group--input"
          required
        />
      </div>

      <div className="registration__group">
        <label htmlFor="email" className="registration__group--label">
          Password:
        </label>

        <input
          type="password"
          //   value={regCredentials.password}
          id="email"
          //   onChange={(e) => handleRegCredentials('password', e.target.value)}
          placeholder="Enter your email"
          className="registration__group--input"
          required
        />
      </div>

      <div className="registration__group">
        <label htmlFor="login" className="registration__group--label">
          Don't have an account yet?
        </label>
        <Link
          to="/registration"
          className="registration__group--link"
        >
          Sign Up!
        </Link>
      </div>

      <button className="button-primary registration__sumit" type="submit">
        Sign In
      </button>
    </form>
  );
};
