import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// 創建Context
export const MyContext = createContext();

// 創建Provider組件
export const MyProvider = ({ children }) => {
    const [value, setValue] = useState(0);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);


    const UUID={
        UUID :2
    } // 假設這是你的 UUID

    const fetchData = async () => {
        try{
            const response = await axios.post('http://127.0.0.1:9999/personal/get_category/', UUID);
            setData(response.data.categories); 
        }catch(error){
            console.log(error);
        }
        };

    useEffect(() => {
        fetchData();
        }, []); // 空依賴數組，確保這段代碼只在組件掛載時運行一次
        
  

    return (
        <MyContext.Provider value={{ value, setValue, data, setData}}>
        {children}
    </MyContext.Provider>
    );
};
