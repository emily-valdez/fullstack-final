import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";



function App() {
 
  return (
    <div>
      <SignIn />
      <SignUp />
    </div>
  
  )
}


export default App;

