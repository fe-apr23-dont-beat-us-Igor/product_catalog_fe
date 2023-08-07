import React, { useState } from 'react';

type Props = {
  onClose: (event?: any) => void;
}

export const RegistrationForm: React.FC<Props> = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Имя пользователя: ', username);
    console.log('Email: ', email);
    console.log('Пароль: ', password);

    onClose();
  };

  return (
    <div className="regform">
      <div className="regform__content">
        <span className="regform__button" onClick={onClose}>&times;</span>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="regform__group">
            <label>User name: </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="regform__group">
            <label>Email: </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='regform__group--input'
              required
            />
          </div>
          <div className="regform__group">
            <label className='regform__group--label'>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          .
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};