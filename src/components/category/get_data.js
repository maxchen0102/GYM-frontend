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
        {data.category_names.map((value, index) => (
          value !== null && (
            <div key={index} className="col-sm-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{value}</h5>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default GetCategoryData;
