import React from 'react'
import SideBar from '../../common/SideBar'
import Header from './Header'
import { myInfo } from '../../../data/myinfo'
import MyPost from './MyPost';
const Profile = () => {
  return (
    <div style={{display:'flex', gap:'10vw'}}>
        <SideBar/>
        <div>
        <Header myInfo={myInfo}/>
        <Post post={myInfo.posts}/>
       </div>
    </div>
  )
}

export default Profile