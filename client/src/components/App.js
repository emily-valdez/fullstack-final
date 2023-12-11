import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header"
import Books from "./Books"
import Authors from "./Authors"


function App() {
 

  return (
    <div>
      <Header />
      <Books />
    </div>
  
  )
}


export default App;

