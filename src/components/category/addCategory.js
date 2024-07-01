import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

export default function AddCategoryModal({ onAdd }) {
  const [categoryName, setCategoryName] = useState('');
  const [UUID, setUUID] = useState(''); // [1
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddCategory = () => {

    const data = {
        name: categoryName,
        UUID: UUID,  // 假設這是你需要的 UUID
      };

    axios.post('http://127.0.0.1:9999/personal/add_category/', data)
      .then(response => {
        onAdd(response.data);
        setCategoryName('');
        setUUID(''); // [1
        setError(null);
        setShowModal(false); // 使用 React 狀態來控制模態框的顯示
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Add Category
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="categoryName">Category Name</label>
            <input
              type="text"
              className="form-control"
              id="categoryName"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />

            <label htmlFor="categoryName">UUID</label>
            <input
              type="text"
              className="form-control"
              id="categoryUUID"
              value={UUID}
              onChange={(e) => setUUID(e.target.value)}
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleAddCategory}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}