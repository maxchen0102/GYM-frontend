import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavPills.css'; 

export default function Board() {
  const navigate = useNavigate();
  const navigateToCategory = () => {
    navigate('/category');
  }

  return (
    <div className="container mt-5">
      {/* 頂部導航欄 */}
      <div className="row mb-4">
        <div className="col d-flex justify-content-between align-items-center">
          <button className="btn btn-outline-primary">
            <i className="fas fa-bars"></i>
          </button>
          <h1>您的總覽</h1>
          <img src="path/to/profile-image.jpg" alt="Profile" className="rounded-circle" width="40" height="40" />
        </div>
      </div>

      {/* 類別選擇 */}
      <div className="nav-container">
        <ul className="nav nav-pills mb-4">
          <li className="nav-item">
            <a className="nav-link active" href="#thighs">大腿</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#shoulders">肩膀</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#calves">小腿</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#back">背</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#arms">手臂</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#chest">胸</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#legs">腿部</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#neck">脖子</a>
          </li>
        </ul>
      </div>

      {/* 健身次數和數據顯示 */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="p-3 bg-light text-center">
            <h2>本月健身次數</h2>
            <p>24 days</p>
            <small>+20 days 相較於上個月</small>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 bg-light text-center">
            <h2>Title</h2>
            <p>2,405</p>
            <small>+33% month over month</small>
          </div>
        </div>
      </div>

      {/* 圖表顯示 */}
      <div className="row mb-4">
        <div className="col">
          <div className="p-3 bg-light">
            <h2>最大重量</h2>
            <img src="path/to/chart-image.jpg" alt="Chart" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* 底部按鈕 */}
      <div className="row mb-4">
        <div className="col">
          <button className="btn btn-primary btn-block" onClick={navigateToCategory}>開始記錄</button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-secondary btn-block">詳細數據</button>
        </div>
      </div>

      {/* 底部導航欄 */}
      <nav className="navbar fixed-bottom navbar-light bg-light">
        <ul className="nav justify-content-around w-100">
          <li className="nav-item">
            <a className="nav-link text-center" href="/home">
              <i className="fas fa-home"></i>
              <br />
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-center" href="/browse">
              <i className="fas fa-search"></i>
              <br />
              Browse
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-center" href="/radio">
              <i className="fas fa-microphone"></i>
              <br />
              Radio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-center" href="/library">
              <i className="fas fa-book"></i>
              <br />
              Library
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
