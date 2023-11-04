import React from 'react'

const MyPost = ({post}) => {
  return (
    <div>
    <div>
        <span style={{paddingTop:'2vh 0vh',marginTop:"5vh",borderTop:"1px solid  grey",display:"flex",justifyContent:"center",gap:"5vh",textTransform:"uppercase"}}>Posts</span>
        <span>Reels</span>
        <span>Saved</span>
        <span>Tagged</span>
    </div>
    <div style={{width:"60vh", display:"grid",gridTemplateColumns:"auto auto auto",columnGap:"1vh",rowGap:"1vh"}} >
        {post.map((ele)=>{
         return<img src={`${ele.postImages[0]}`} alt="" style={{width:"400px",height:"300px",objectFit:"cover"}}/>
        })}
    </div>
    </div>
  )
}

export default MyPost