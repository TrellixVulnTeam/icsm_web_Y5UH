import React from 'react';
import '../css/main.css';
import '../css/fonts.css';
import Logo from '../img/icsm-logo.png';
import ButtonPrimary from '../R_components/PrimaryButton';

const overviewListItems = ['Interactive exercises', 'Real world projects','Competitions','Weekly drop-in Q&A sessions'];
const overviewList = overviewListItems.map(e => <li className='overview__item'>{e}</li>)

const html = ( 
<body>
  <header className='header'>
    <div className='header__text-box'>
    <h1 className="primary-title color-blue">Python Course</h1>
    <h1 className="secondary-title color-blue margin-big hidden ">
      Autumn Term
    </h1>
      <ButtonPrimary href='/videos/section1' buttonText='Sign up' />
    </div>
  </header>

  <div className="overview">
    <div className='overview__text-box'>
        <h2 className='secondary-title'>10 Week Course</h2>
        <h3 className='tertiary-title margin-small'>Build you knowledge from the basics</h3>
        <ul>
          {overviewList}
        </ul>
        <ButtonPrimary href='/course' buttonText='Find out more' />
    </div>
  </div>

  <footer className="footer">
    <img src={Logo} alt="" height="60%"/>
    <hr className='hr-footer'></hr>
    <ul className="footer__list">
      <li className="footer__item"><a href="" className="footer__link">icsm coding</a></li>
      <li className="footer__item"><a href="" className="footer__link">contact</a></li>
      <li className="footer__item"><a href="" className="footer__link">team</a></li>
    </ul>
  </footer>
  


</body>
);

function HomePage() {
  return (
    html
  );
}

export default HomePage;
