import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetCategoryData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:9999/personal/get_category/')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Data from API Category</h1>
      <div className="row">
        {data.category_names.filter(value=>value!=null).map((value, index) => (
        
        <div className="card" style={{ margin: "5px 0" }} >
        <h5 className="card-header">{value}</h5>
        <div className="card-body">
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default GetCategoryData;
