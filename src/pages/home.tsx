import React from 'react';
import './home.scss';
import HeaderBg from '../images/header.png'

export const Home = () => {
  return (
    <div className="home">
      <div className="header" style={{backgroundImage: `url(${HeaderBg})`}}>x</div>
    </div>
  );
};
