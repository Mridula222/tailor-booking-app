import React, { useEffect, useState } from 'react';
import { getDesigns } from '../api';
import DesignCard from '../components/DesignCard';

function Home() {
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getDesigns();
      setDesigns(data);
    }
    fetchData();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Available Designs</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {designs.map((design) => (
          <DesignCard key={design._id} design={design} />
        ))}
      </div>
    </div>
  );
}

export default Home;
