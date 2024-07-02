import React, { useEffect, useState } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';


const RecordList = () => {
  const { itemId } = useParams();
  const [item_name, setItem] = useState(null);
  const [records_list, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();
  const navigateToItem = (itemId) => {
    navigate(`/category/${itemId}`);
}

  useEffect(() => {
    const fetchRecordDetails = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:9999/personal/get_record_list/', { item_id: itemId });
        setItem(response.data.item_name);
        setRecords(response.data.records_list);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchRecordDetails();
  }, [itemId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
<Container className="mt-5">
      <Button variant="secondary" className="mb-4" onClick={() => navigate(-1)}>Back to item</Button>
      <h1 className="text-center mb-4">Item name - {item_name}</h1>
      <div className="list-group">
        {records_list.map(record => (
          <li
            key={record.id} 
            className="list-group-item list-group-item-action text-center py-3"
          >
            {record.name}
          </li>
        ))}
      </div>
    </Container>
  );
};

export default RecordList;
