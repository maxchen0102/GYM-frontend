
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate =useNavigate();
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const data = new FormData();
    data.append('username', username);
    data.append('password1', password1);
    data.append('password2', password2);

    try {
      const response = await axios.post('http://localhost:9999/sign_up/',data,  {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      if (response.status === 200) {
        setSuccess('Account created successfully!');
        setUsername('');
        setPassword1('');
        setPassword2('');
        navigate('/');
      }
    } catch (error) {
      setError('An error occurred during registration.');
      if (error.response && error.response.data) {
        setError(error.response.data);
      }
      setShowErrorModal(true);
    }
  };


  // 關閉錯誤訊息視窗  
  const handleClose = () => setShowErrorModal(false);

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {error && <p style={{ color: 'red' }}>{JSON.stringify(error)}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

    <Modal show={showErrorModal} onHide={handleClose}> 
        <Modal.Header closeButton>
        <Modal.Title>註冊有問題哦！</Modal.Title>
        </Modal.Header>    
        <Modal.Body>
            <p> 請再試一次</p>
            {error}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            我知道了！
            </Button>
        </Modal.Footer>
    </Modal>


    </div>
  );
}

export default SignUp;
