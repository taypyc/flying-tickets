
import React from 'react';

const LoadMoreButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="load-more-button">
      Показати ще 5 квитків
    </button>
  );
};

export default LoadMoreButton;
