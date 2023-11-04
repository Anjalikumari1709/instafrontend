import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import "./styles/app.css";
import Home from "./components/home/Home";
import Profile from "./components/home/profile/Profile";
function App() {
  return (
    <div className="App">
      <Profile/>
    {/* <Home/>*/}
     {/*<Login/>*/}
   {/*}  <div style={{height:"100vh",display:'flex',alignItem:'center'}}>
    <Register/>
    </div>*/}
    </div>
  );
}

export default App;
