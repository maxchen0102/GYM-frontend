
import React, { useState } from 'react';
import GetCategoryData from './get_data';
import ItemData  from '../items/itemsData';
import { useNavigate } from 'react-router-dom';

export default function Category() {
    const navigate = useNavigate();
    const navigateToDashboard = () => {
        navigate('/');
    }
   
    return (
        <div className='container mt-3 '>
            <div className='row' >
                <div className='col-4'>
                     <button  type="button" className="btn btn-success" onClick={navigateToDashboard}>dashboard</button>
                </div>
                
            </div>
            <GetCategoryData />

        

            

            

            






















            
        </div>
    );
}