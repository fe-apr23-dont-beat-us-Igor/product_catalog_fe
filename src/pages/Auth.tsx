import { useState, FC } from 'react';
import { img } from '../images/images';
import { Link, useLocation } from 'react-router-dom';
import { sendRegistrationCred } from '../api/api';
import { RegistrationForm } from '../components/Auth/RegistrationForm';
import { AuthForm } from '../components/Auth/AuthForm';
import { useAppContext } from '../context/AppContext';
import Home from './Home';

export const AuthPage: FC = () => {
  const { isAuthenticated, setIsAuthenticated } = useAppContext();
  const { pathname } = useLocation();
  const isRegistrationPage = pathname === '/registration';

  if (isAuthenticated) return <Home />;

  return (
    <div className="registration__container">
      <img
        src={img.register_img}
        alt="registration"
        className="registration__img"
      />
      {isRegistrationPage ? <RegistrationForm /> : <AuthForm />}
    </div>
  );
};
