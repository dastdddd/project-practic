import React from 'react';
import ListContent from './sidebar/ListContent';


const Content1 = () => {
  return (
    <div className="content1 items" >
      <ListContent name="Asan" color="green" fz="25px"/>
      <ListContent name="Uson" color="white" fz="25px"/>
      <ListContent name="Batma" color="red" fz="25px"/>
      <ListContent name="Zuura" color="blue" fz="25px"/>
    </div>
  );
};

export default Content1;
