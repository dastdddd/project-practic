import React from 'react';

const ListContent = (props) => {
  return (
    <div style={{ color: props.color, fontSize: props.fz }}>
      {props.name}
    </div>
  );
};

export default ListContent;