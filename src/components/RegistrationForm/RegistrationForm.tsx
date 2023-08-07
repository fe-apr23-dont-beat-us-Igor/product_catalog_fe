import React, { useState } from 'react';

type Props = {
  onClose: (event?: any) => void;
}

export const RegistrationForm: React.FC<Props> = ({ onClose }) => {
  const initialFormData = {
    username: '',
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialFormData);

  const { username, email, password } = formData;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Something went wrong', error);
      });
    onClose();
  };

  return (
    <div className="regform">
      <div className="regform__content">
        <span className="regform__cross" onClick={onClose}>&times;</span>

        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="regform__group">
            <label>User name: </label>

            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              className='regform__group--input'
              required
            />
          </div>

          <div className="regform__group">
            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className='regform__group--input'
              required
            />
          </div>

          <div className="regform__group">
            <label className='regform__group--label'>Password: </label>

            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className='regform__group--input'
              required
            />
          </div>

          <button
            className='button-primary regform__submit-button'
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <div className="regform__login">
          <p className="regform__login--text">
            Already signed in?
          </p>
          <a
            href="#"
            className='regform__login--link'
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};