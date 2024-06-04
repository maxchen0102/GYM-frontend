import { useState } from 'react';

import './index.css'; 
import Edit from './components/Edit';
import List from './components/List';

const Home=()=>{

    const [data , setData] = useState([])
    return <div  className="center-container" >
       
        <Edit add={setData}/>
        <List listData={data} />
    </div>
}

export default Home