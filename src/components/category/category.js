
import React, { useState } from 'react';
import GetCategoryData from './get_data';
import { CardComponent } from '../items/items';

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