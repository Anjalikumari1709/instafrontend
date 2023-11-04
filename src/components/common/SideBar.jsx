import React from 'react';
import "../../styles/sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebarContainer">
        <ul >
        <li style={{marginBottom:"20px"}}><img width="120px" src="https://tse4.mm.bing.net/th?id=OIP.XMA9fSJNuyoox6nlKoQsYQHaCK&pid=Api&P=0&h=180"/></li>
            <li>Home</li>
            <li>Search</li>
            <li>Explore</li>
            <li>Reels</li>
            <li>Messages</li>
            <li>Notifications</li>
            <li>Create</li>
            <li>Profile</li>
        </ul>
    </div>
  )
}

export default SideBar