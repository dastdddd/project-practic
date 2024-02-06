import React from 'react';

const SidebarText = (props) => {
  return (
    <div>
      <div style={{color: props.color, fontSize: props.fontSize}}>
        {props.text1}
      </div>
    </div>
  );
};

export default SidebarText;