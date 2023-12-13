import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./NavBar"
import Books from "./Books"


function App() {

  return (
    <div>
      <NavBar />
      <Books />
       
    </div>
  )
}


export default App;

