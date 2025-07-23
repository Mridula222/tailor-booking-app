import React from 'react';

function DesignCard({ design }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <img src={design.imageUrl} alt="Design" style={{ width: '200px', borderRadius: '8px' }} />
      <p>{design.description}</p>
    </div>
  );
}

export default DesignCard;
