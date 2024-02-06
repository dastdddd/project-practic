import React from 'react';

const FooterList = (props) => {
  return (
    <div style={{color: props.color, fontWeight:props.fw}}>
      {props.title}
    </div>
  );
};

export default FooterList;