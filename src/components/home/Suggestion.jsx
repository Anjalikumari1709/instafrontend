import React from 'react'
import SuggestionData from "../../data/suggestion"
import "../../styles/suggestion.css"
const Suggestion = () => {
  return (
    <div style={{width:'20vw',marginTop:'5vh',marginRight:'5vh'}}>
        {
            SuggestionData.map(user=>{
                return <div style={{paddingLeft:'1vw', marginTop:'1vh',border:"1px solid grey", height:"100px", display:'flex' ,justifyContent:"space-between", alignItems:'center'}}>
                <div style={{height:"100px" , display:"flex", flexdirection:"column",
                justifyContent:"center",gap:'10px'
                }}>
                      <span>{user.username}</span>

                      <img src={`${user.profilePic}`} width="40px" height="40px" style={{borderRadius:"50%"}} />
                </div>
                  <span className='followLink'>Follow</span>
                </div>
            })
        }
    </div>
  )
}

export default Suggestion