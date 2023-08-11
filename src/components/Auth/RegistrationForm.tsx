import { useState, FC, FormEventHandler, useEffect } from 'react';
import { sendRegistrationCred } from '../../api/api';
import { Link } from 'react-router-dom';
import { UserMessage } from '../UserMessage/UserMessage';

export interface RegistrationCredentials {
  username: string;
  password: string;
  checkPassword: string;
}

export type AuthCredentials = Omit<RegistrationCredentials, 'checkPassword'>;

const initialRegistrationCred: RegistrationCredentials = {
  username: '',
  password: '',
  checkPassword: '',
};

export const RegistrationForm: FC = () => {
  const [regError, setRegError] = useState(false);
  const [successfulReg, setSuccessfulReg] = useState(false);
  const [regCredentials, setRegCredentials] = useState<RegistrationCredentials>(
    initialRegistrationCred,
  );

  const handleRegCredentials = (
    key: keyof RegistrationCredentials,
    value: string,
  ) => {
    setRegCredentials((prev) => {
      return { ...prev, [key]: value };
    });

    console.log(regCredentials);
  };

  const validateCredentials = () => {
    setRegCredentials(({ username, password, checkPassword }) => {
      if (password.length < 6 || password !== checkPassword) {
        setRegError(true);
        return { username, password: '', checkPassword: '' };
      }

      if (username.length < 6) {
        setRegError(true);
        return initialRegistrationCred;
      }
      setRegError(false);
      return { username, password, checkPassword };
    });
  };

  const registretionSubmit: FormEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    event.preventDefault();
    validateCredentials();
    if (regError) {
      return;
    }

    const username = regCredentials.username;
    const password = regCredentials.password;

    const res = await sendRegistrationCred({ username, password });

    console.log(res);
    setSuccessfulReg(true);
  };

  useEffect(() => {
    if (successfulReg) {
      setRegCredentials(initialRegistrationCred);
      window.location.href = '/home';
    }
  }, [successfulReg]);

  return (
    <form onSubmit={registretionSubmit} className="registration__form">
      <h2 className="registration--title">Sign Up</h2>
      {/* registration__group--label */}
      <div className="registration__group">
        <label htmlFor="username" className="registration__group--label">
          <p>Email:</p>
        </label>

        <input
          type="email"
          value={regCredentials.username}
          id="username"
          onChange={(e) => handleRegCredentials('username', e.target.value)}
          placeholder="Enter your email"
          className="registration__group--input"
          required
        />
      </div>

      <div className="registration__group">
        {/* <label htmlFor="email" className="registration__group--label">
          Password:
        </label> */}
        <label htmlFor="username" className="registration__group--label">
          <p>Password:</p>
        </label>
        <input
          type="password"
          value={regCredentials.password}
          id="email"
          onChange={(e) => handleRegCredentials('password', e.target.value)}
          placeholder="Enter your password"
          className="registration__group--input"
          required
        />
      </div>

      <div className="registration__group">
        {/* <label htmlFor="password" className="registration__group--label">
          Check yout Password:
        </label> */}
        <label htmlFor="username" className="registration__group--label">
          <p>Repeat Password:</p>
        </label>
        <input
          type="password"
          value={regCredentials.checkPassword}
          id="password"
          onChange={(e) =>
            handleRegCredentials('checkPassword', e.target.value)
          }
          placeholder="Repeat Password"
          className="registration__group--input"
          required
        />
      </div>

      <div className="registration__group">
        <h5 className="registration__group--label">
          Already have an acount?
          <Link to="/authorization" className="registration__group--link">
            <span> Log-in</span>
          </Link>
        </h5>
      </div>

      <button className="button-primary registration__submit" type="submit">
        Sign Up
      </button>
    </form>
  );
};
