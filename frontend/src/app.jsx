import React from 'react';

function App() {
  return (
    <div className="app-container">
      <h1>👗 Tailor Booking App</h1>
      <p>Welcome! Browse and book your favorite tailor designs.</p>

      <div className="design-card">
        <h3>Sample Design</h3>
        <img
          className="design-img"
          src="https://example.com/design.jpg"
          alt="Design"
        />
        <p>Cotton kurti with embroidery</p>
      </div>
    </div>
  );
}

export default App;
