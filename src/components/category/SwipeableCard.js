import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Link } from 'react-router-dom';
import './category.css';

const SwipeableCard = ({ category, onDelete }) => {
  const [translateX, setTranslateX] = useState(0);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      if (eventData.dir === 'Left') {
        const newTranslateX = Math.max(-150, -eventData.absX); // 限制滑動距離最多到 -150px
        setTranslateX(newTranslateX);
        if (newTranslateX === -150) {
          setShowDeleteButton(true);
        }
      } else if (eventData.dir === 'Right') {
        setTranslateX(0);
        setShowDeleteButton(false);
      }
    },
    onSwipedLeft: () => {
      setShowDeleteButton(true);
    },
    onSwipedRight: () => {
      setTranslateX(0);
      setShowDeleteButton(false);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="card-container" {...handlers}>
      <div className="card mb-3 swipeable-card" style={{ transform: `translateX(${translateX}px)` }}>
        <h5 className="card-header">{category.name}</h5>
        <div className="card-body">
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <Link to={`/category/${category.id}`} className="btn btn-primary">View Items</Link>
        </div>
      </div>
      {showDeleteButton && (
        <button className="delete-button" onClick={() => onDelete(category.id)}>
          刪除
        </button>
      )}
    </div>
  );
};

export default SwipeableCard;
