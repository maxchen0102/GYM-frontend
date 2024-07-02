import React, { useEffect, useState } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import axios from 'axios';


const RecordList = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
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
        console.log(response.data.item_name)
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
    <div className="container mt-5">
      <h1 className="text-center mb-4"> {item}</h1>
      <button className="btn btn-secondary mt-4" onClick={() => navigate(-1)}>Back to Items</button>
      <div>
        <h2>Records:</h2>
        <ul className="list-group">
          {records_list.map(record => (
            <li key={record.id} className="list-group-item">{record.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecordList;
