import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Header() {
const navigate=useNavigate();

  return (

    <header className="m-5">
      <div className="header-inner">
        <span className="logo">Akash</span>
        <div className="links">
        <button className="" onClick={()=>{navigate('/');}}> Home  </button>
        
        <button className="" onClick={()=>{navigate('/project');}}> Projects  </button>
        <button className="" onClick={()=>{navigate('/Experiance');}}>Education & Experiance  </button>
        <button className="" onClick={()=>{navigate('/contact');}}> Contact  </button>
        </div>
     
      </div>

      
     
    </header>
  );
}

export default Header;
