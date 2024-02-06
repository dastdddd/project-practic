import React from 'react';

const ContentText = (props) => {
  return (
    <div style={{ color: props.color, fontWeight: props.fontWeight, fontSize: props.fontSize }}>
      {props.text2}
    </div>
  );
};

export default ContentText;