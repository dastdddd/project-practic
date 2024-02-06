import React from 'react';
//import Profile from './Profile';
import { Messege } from './Messege';

const Admin = (props) => {
  
  return (
    <div>
      <h1> {props.id} {props.name} {props.age} </h1>
      <Messege name={props.name}/>
    </div>
  );
};

export default Admin;