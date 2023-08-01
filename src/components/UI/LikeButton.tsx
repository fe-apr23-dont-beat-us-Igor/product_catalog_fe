import React from 'react';

const LikeButton = ({...atributes}) => {
  return <button className="likeButton likeButton--selected" {...atributes}></button>;
};

export default LikeButton;
