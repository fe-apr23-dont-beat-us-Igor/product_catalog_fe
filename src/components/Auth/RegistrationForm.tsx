import { useState, FC, FormEventHandler } from 'react';
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
  return (
    <form onSubmit={registretionSubmit} className="registration__form">
      <h2 className="registration--title">Sign Up</h2>

      <div className="registration__group">
        <label htmlFor="username" className="registration__group--label">
          Email: 
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
        <label htmlFor="email" className="registration__group--label">
          Password:
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
        <label htmlFor="password" className="registration__group--label">
          Check yout Password:
        </label>
        <input
          type="password"
          value={regCredentials.checkPassword}
          id="password"
          onChange={(e) =>
            handleRegCredentials('checkPassword', e.target.value)
          }
          placeholder="Enter your password"
          className="registration__group--input"
          required
        />
      </div>

      <div className="registration__group">
        <label htmlFor="login" className="registration__group--label">
          Already have an acount?
        </label>
        <Link to="/authorization" className="registration__group--link">
          Log-in
        </Link>
      </div>

      <button className="button-primary" type="submit">
        Sign Up
      </button>
    </form>
  );
};
