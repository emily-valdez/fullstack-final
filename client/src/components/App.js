import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "./SignIn";
import ToggleColorMode from "./Colormode";




function App() {
 
  return (
    <div>
      <ToggleColorMode />
      <SignIn />
      
    </div>
  
  )
}


export default App;

