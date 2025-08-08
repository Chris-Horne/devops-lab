import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error('Error fetching message:', err));
  }, []);

  return (
    <div style={{ textAlign: 'center', paddingTop: '2rem' }}>
      <h1>DevOps Lab Frontend</h1>
      <p>{message ? message : 'Loading...'}</p>
    </div>
  );
}

export default App;
