import React from "react";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';

function Logout({setUser}){
  const navigate = useNavigate();
  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE'
    }).then((resp) => {
      if (resp.ok) {
        navigate('/logout')
        setUser(null)
        navigate('/')
      }
    })
  }
    return (
      <>
      <Header />
          <h1>Thank you for stopping by.</h1>
        </>
    );
  
  }
  export default Logout

