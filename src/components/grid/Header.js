import React from 'react';
import ContentText from './sidebar/ContentText';

const Header = () => {
  return (
    <div className="header items">
      <ContentText text2="Menu" color="green" fontSize="20px" fontWeight="bold" />
      <ContentText text2="Link" color="red" fontSize="20px" fontWeight="bold" />
      <ContentText text2="About" color="blue" fontSize="20px" fontWeight="bold" />
      <ContentText text2="Contact" color="white" fontSize="20px" fontWeight="bold" />
    </div>
  );
};

export default Header;