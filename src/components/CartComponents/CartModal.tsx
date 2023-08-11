import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  handleModal: () => void;
  isModalVisible: boolean;
  setIsModalVisible: (value: boolean) => void;
};

export const CartModal: React.FC<Props> = ({ handleModal, isModalVisible }) => {
  return (
    <div
      className={classNames('modal__container', {
        'modal__container--hidden': !isModalVisible,
        'modal__container--active': isModalVisible,
      })}
    >
      <div className="modal__content">
        <h2 className="modal__text">Thank you for your purchase!</h2>
        <div className="modal__line"></div>
        <div className="modal__buttons_container">
          <NavLink to="/home">
            <button className="modal__button" onClick={handleModal}>
              Return to main page
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
