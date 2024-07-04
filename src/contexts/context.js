import React, { createContext, useState, useEffect } from 'react';

// 創建Context
export const MyContext = createContext();

// 創建Provider組件
export const MyProvider = ({ children }) => {
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);


  
//   useEffect(() => {
//     // 假設這是你的API請求
//     fetch('https://api.example.com/data')
//       .then(response => response.json())
//       .then(data => {
//         setValue(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       });
//   }, []);

  return (
    <MyContext.Provider value={{ value, setValue }}>
    {children}
  </MyContext.Provider>
  );
};
