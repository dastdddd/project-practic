import React from 'react';
import Admin from './Admin';

const Profile = (props) => {
  //const {name, index} = props
  return (
    <div>
      {/*{index + 1} {name}*/}
      <Admin name={props.name}/>
    </div>
  );
};

export default Profile;