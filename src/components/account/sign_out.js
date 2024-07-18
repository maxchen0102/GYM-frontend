import React from "react";
import axions from "axios";
import { useNavigate } from "react-router-dom";


const SignOut=()=>{
    const navigate = useNavigate();
    const handleLogout= async ()=>{
        try {
            await axions.get("http://localhost:9999/sign_out");
            // setAuth(false);  maybe not needed (we use session ID )
        } 
        
        catch (err){
            console.error(err.message);
        }
        alert("You are logged out");
        navigate("/login");
    };
    
    return (
        <button onClick={handleLogout}>Sign_out</button>
        
    ); 
};

export default SignOut;
