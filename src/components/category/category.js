
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

        <div className="card" style={{ margin: "20px 0" }} >
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
        </div>

        <div className="card" style={{ margin: "20px 0" }}>
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
        </div>
        

            

            <ItemData />

            






















            
        </div>
    );
}