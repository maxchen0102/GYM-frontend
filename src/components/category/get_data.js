import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddCategoryModal from './addCategory';
import { Link } from 'react-router-dom'; // 確保正確導入 Link
import A from './addButtonIcon.png'
import './category.css';
import { useSwipeable } from 'react-swipeable';
import SwipeableCard from './SwipeableCard'; // 導入 SwipeableCard 組件
import {removeCategory} from '../../services/categoryService';



const GetCategoryData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const UUID={
    UUID :2
  } // 假設這是你的 UUID

  const fetchData = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:9999/personal/get_category/', {
        withCredentials: true
      });
      setData(response.data.categories);  
      console.log(response.data);
      console.log(response.data.categories);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  // 先獲取數據
  useEffect(() => {
    fetchData();
  }, []); // 空依賴數組，確保這段代碼只在組件掛載時運行一次
  
  const reloadCategory = async () => {
    await fetchData(); // 添加新分類後重新獲取數據
  };

  const handleAddCategory = () => {
    console.log("add category");
    alert("add category")
  };


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

const hadleDeleteCategory = async (id) => {
  await removeCategory(id); // 確保等待刪除操作完成
  reloadCategory(); // 然後重新加載類別
  console.log("delete category with id", id);
};

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Data from API Category</h1>
      <div className="row">
      {data.filter(category => category != null).map((category, index) => (
          <SwipeableCard key={index} category={category} onDelete={hadleDeleteCategory} />
        ))}
      </div>

      <AddCategoryModal onAdd={reloadCategory}/> 
    </div>


  );
};



export default GetCategoryData;
