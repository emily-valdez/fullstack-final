import React from "react";
import { useOutletContext } from "react-router-dom";

function Logout(){
  const {user, setUser} = useOutletContext()

    return (
      <>
          <h1>Thank you for stopping by.</h1>
        </>
    );
  
  }
  export default Logout

