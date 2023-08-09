import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import React from 'react';
import { Link } from 'react-router-dom';
import git from './github.svg';
import telegram from './telegram.svg';
import linkedin from './linkedin.svg';
import '../../styles/components/Contacts.scss';

export const Contacts: React.FC = () => {
  const team = [
    {
      id: 1,
      name: 'Roman Didusenko',
      position: 'full-stack developer',
      gitHub: 'https://github.com/generatedman',
      telegram: 'https://t.me/pawuk33',
      linkedin: 'https://www.linkedin.com/in/roman-didusenko-1b7b7a283/',
      image: 'Photos/Didusenko.jpg',
    },
    {
      id: 2,
      name: 'Ivan Marchuk',
      position: 'full-stack developer',
      gitHub: 'https://github.com/skinnyjazz',
      telegram: 'https://t.me/ivanGator',
      linkedin: 'https://www.linkedin.com/in/',
      image: 'Photos/Marchuk.jpg',
    },
    {
      id: 3,
      name: 'Oleh Mahera',
      position: 'full-stack developer',
      gitHub: 'https://github.com/olehmahera',
      telegram: 'http://t.me/Taypyc',
      linkedin: 'https://www.linkedin.com/in/',
      image: 'Photos/Mahera.jpg',
    },
    {
      id: 4,
      name: 'Sofia Liubchenko',
      position: 'full-stack developer',
      gitHub: 'https://github.com/SofiaLiubchenko',
      telegram: 'https://t.me/lssonya',
      linkedin: 'https://www.linkedin.com/in/sofiia-liubchenko-b74324284/',
      image: 'Photos/Liubchenko.jpg',
    },
    {
      id: 5,
      name: 'Yuliya Akhtymiichuk',
      position: 'full-stack developer',
      gitHub: 'https://github.com/Yuliya1907',
      telegram: 'https://t.me/Yuliya_Akhtymiichuk',
      linkedin: 'https://www.linkedin.com/in/yuliya-akhtymiichuk-026688250/',
      image: 'Photos/Akhtymiichuk.jpg',
    },
  ];

  return (
    <div className="contacts__main">
      <h1 className="title">Let's develop together</h1>

      <div className="contacts__team">
        {team.map((player) => (
          <div>
            <div className="contacts__container">
              <img src={require(`./${player.image}`)} alt={player.name} className="contacts__image" />
              <h3 className="contacts__name">{player.name}</h3>
              <h4 className="contacts__position">{player.position}</h4>

              <div className="contacts__people_links">
                <Link to={player.gitHub} target={'_blank'}>
                  {' '}
                  <img className="contacts__logo" src={git} alt="Github" />
                </Link>
                <Link to={player.linkedin} target={'_blank'}>
                  {' '}
                  <img className="contacts__logo" src={linkedin} alt="Linkedin" />
                </Link>
                <Link to={player.telegram} target={'_blank'}>
                  {' '}
                  <img className="contacts__logo" src={telegram} alt="Telegram" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};