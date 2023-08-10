import cn from 'classnames';
import { FC, useState, useEffect, useRef } from 'react';
import { useAppContext } from '../../context/AppContext';

// export type Props = {
//   isErrorSuccess: boolean;
// }

type MassegeType = 'success' | 'error';

export interface Message {
  type: MassegeType;
  title: string;
  text: string;
}

export interface MassageList {
  [key: string]: Message;
}

export const massageList: MassageList = {
  loginSuccess: {
    type: 'success',
    title: 'login',
    text: `Welcome, ${window.localStorage.getItem('username')}`,
  },
  registerError: {
    type: 'error',
    title: 'register',
    text: `You are stupid`,
  },
};

type Props = {
  message: Message;
};

export const UserMessage: FC<Props> = ({ message }) => {
  const ref = useRef(null);
  const { setMessage } = useAppContext();

  const { type, title, text } = message;

  useEffect(() => {
    if (ref !== null) {
      // @ts-ignore
      ref.current.classList.add('userMessage--appiar');
    }
  }, [ref]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMessage(null);
    }, 3000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div
      ref={ref}
      className={cn('userMessage', {
        'userMessage--success': type === 'success',
        'userMessage--error': type === 'error',
      })}
    >
      <h4 className="userMessage__title">{title}</h4>
      <p className="userMessage__text">{text}</p>
    </div>
  );
};