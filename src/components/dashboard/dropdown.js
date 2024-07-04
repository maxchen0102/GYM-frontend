import React ,{ useContext } from 'react';
import { MyContext } from '../../contexts/context';
import Category from '../category/category';


export default function Dropdown() {
    // Your code here
    

    const {data } = useContext(MyContext);
    console.log(data);
    if (!data) {
        return null; // 或者返回一個加載中的指示，根據你的應用需求
    }
    const handleItemClick=(id)=>{
        console.log(id);
    }
  
    return (
        <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">

          {data.filter(category=>category!=null).map((category, index) => (
            <li key={index}><a className="dropdown-item"  onClick={() => handleItemClick(category.id)}  href="#">{category.name}</a></li>
          ))}
        </ul>
      </div>
    );
};

