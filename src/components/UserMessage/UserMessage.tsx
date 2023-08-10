import cn from "classnames";
import { FC, useState, useEffect } from "react";

// export type Props = {
//   isErrorSuccess: boolean;
// }


export const UserMessage: FC = () => {
  const userMessages = {
    success: 'You did it!',
    fail: 'You failed!'
    };

  const [userMessage, setUserMessage] =
  useState<string | null>(userMessages.fail);
  
  const isMessageSuccess = userMessage === userMessages.success;
  

  const removeError = () => {
    setUserMessage(null);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      removeError();
    }, 3000);

    return () => clearTimeout(timerId);
  }, []);

  return(
    <div className={cn('userMessage', {
      'userMessage--visible': userMessage,
      'userMessage--success': isMessageSuccess,
      'userMessage--fail': !isMessageSuccess,
    })}>
      <p className="userMessage__text">
      {userMessage}
      </p>
      <button
        type="button"
        className="userMessage__button"
        onClick={removeError}
      />
    </div>
  );
}