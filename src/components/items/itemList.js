import React, { useEffect, useState } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';

const ItemList = () => {
  const { id } = useParams();
  const [item_list, setItems] = useState([]);
  const [category_name, setcategory_name] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:9999/personal/get_items/', { category_id: id });
        setItems(response.data.item_list);
        setcategory_name(response.data.category_name);
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
   <Container className="mt-5">
      <Button variant="secondary" className="mb-4" onClick={() => navigate(-1)}>Back to Categories</Button>
      <h1 className="text-center mb-4">category name - {category_name}</h1>
      <div className="list-group">
        {item_list.map(item => (
          <Link 
            key={item.id} 
            to={`/item/${item.id}`} 
            className="list-group-item list-group-item-action text-center py-3"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default ItemList;
