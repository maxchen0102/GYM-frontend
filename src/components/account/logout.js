import React from "react";
import axions from "axios";
import { useNavigate } from "react-router-dom";


const Logout=()=>{
    const navigate = useNavigate();
    const handleLogout= async ()=>{
        try {
            await axions.get("http://localhost:9999/logout");
            // setAuth(false);  maybe not needed (we use session ID )
        } 
        
        catch (err){
            console.error(err.message);
        }
        alert("You are logged out");
        navigate("/login");
    };
    
    return (
        <button onClick={handleLogout}>Logout</button>
        
    ); 
};

export default Logout;
