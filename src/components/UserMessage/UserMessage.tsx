import cn from 'classnames';
import { FC, useEffect, useRef } from 'react';
import { useAppContext } from '../../context/AppContext';

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
    text: `Welcome!}`,
  },
  goodbye: {
    type: 'success',
    title: 'lohout',
    text: `goodbye`,
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
      className={cn('userMessage userMessage--appiar', {
        'userMessage--success': type === 'success',
        'userMessage--error': type === 'error',
      })}
    >
      <h4 className="userMessage__title">{title}</h4>
      <p className="userMessage__text">{text}</p>
    </div>
  );
};
