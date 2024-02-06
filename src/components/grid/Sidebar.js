import React from 'react';
import SidebarText from './sidebar/SidebarText';

function Sidebar() {
  return (
    <div className="sidebar items">
      <SidebarText text1="Menu" color="red" fontSize="15px" />
      <SidebarText text1="Info" color="green" fontSize="17px" />
      <SidebarText text1="Contact" color="yellow" fontSize="19px" />
      <SidebarText text1="About" color="blue" fontSize="21px" />
    </div>
  );
}

export default Sidebar;