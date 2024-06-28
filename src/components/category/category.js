
import React, { useState } from 'react';
import GetCategoryData from './get_data';

export  function Category() {
    const [showData,setShowData]= useState(false);

    const handleClick =()=>{
        setShowData(!showData);
    };

    return (
        <div>
            <button onClick={handleClick}>Show your Category Data</button>
            {showData && <GetCategoryData />}
            
        </div>
    );
}