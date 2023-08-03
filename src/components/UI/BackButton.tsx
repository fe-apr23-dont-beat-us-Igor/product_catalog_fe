import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ui/BackButton.scss';
import BackArrow from '../../images/arrow-left-large.svg';

export const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="history">
      <img src={BackArrow} className="historyIcon" alt='' />
      <button className="historyTitle" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};
