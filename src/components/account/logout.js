import React from "react";
import axions from "axios";



const Logout=()=>{
    const handleLogout= async ()=>{
        try {
            await axions.get("http://localhost:5000/auth/logout");
            // setAuth(false);  maybe not needed (we use session ID )
        } catch (err){
            console.error(err.message);
        }
    };
    
    return (
        <button onClick={handleLogout}>Logout</button>
    ); 
};

export default Logout;
