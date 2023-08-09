import React, { useState } from 'react';
import { img } from '../images/images';
import { Link } from 'react-router-dom';

type Props = {};

export const Registration: React.FC<Props> = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Имя пользователя: ', username);
    console.log('Email: ', email);
    console.log('Пароль: ', password);
  };

  return (
    <div className="registration__container">
      <img
        src={img.register_img}
        alt="registration"
        className="registration__img"
      />

      <form onSubmit={handleSubmit} className="registration__form">
        <h2 className="registration--title">Sign Up</h2>

        <div className="registration__group">
          <label htmlFor='username'>User name: </label>
          <input
            type="text"
            value={username}
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter your username'
            className='registration__group--input'
            required
          />
        </div>

        <div className="registration__group">
          <label
            htmlFor='email'
            className='registration__group--label'
          >
            Email: 
          </label>

          <input
            type="email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            className='registration__group--input'
            required
          />
        </div>

        <div className="registration__group">
          <label
            htmlFor='password'
            className='registration__group--label'
          >
            Password: 
          </label>
          <input
            type="password"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
            className='registration__group--input'
            required
          />
        </div>

        <button className='button-primary' type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};
