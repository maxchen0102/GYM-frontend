import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';


const ItemList = () => {
  const { id } = useParams();
  const [item_list, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:9999/personal/get_items/', { category_id: id });
        setItems(response.data.item_list);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchItems();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Items in Category {id}</h1>
      <ul className="list-group">
        {item_list.map(item => (
          <li key={item.id} className="list-group-item">
          <Link to={`/item/${item.id}`}>{item.name}</Link>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
