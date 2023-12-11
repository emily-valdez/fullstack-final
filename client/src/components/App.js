import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header"
import Books from "./Books"


function App() {

  return (
    <div>
      <input type="file" />
      <Header />
      <Books />
       
    </div>
  )
}


export default App;

