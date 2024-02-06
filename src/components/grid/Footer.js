import React from 'react';
import FooterList from './sidebar/FooterList';

const Footer = () => {
  return (
    <div className="footer items">
      <FooterList title="info" color='white'/>
      <FooterList title="about" color='white'/>
      <FooterList title="contact" color='white'/>
      <FooterList title="social" color='white'/>
    </div>
  );
};

export default Footer;