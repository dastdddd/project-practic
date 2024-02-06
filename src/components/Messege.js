//rsc - автоматически создает функциональный компонент
import React from 'react';

export const Messege = (props) => {
  console.log(props);
  return (
    <div style={{ color: props.color, fontSize: props.fontSize }}>
      {props.message} {props.name}
    </div>
  );
};

