
import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await fetch('http://127.0.0.1/python/order');
        console.log(response)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setOrderData(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderData();
  }, []); 

  return (
    <>
      <h1>Welcome to PhoneStore</h1>
      {loading && <p>Loading order data...</p>}
      {error && <p>Error fetching data: {error}</p>}
      {orderData && <pre>{JSON.stringify(orderData, null, 2)}</pre>}
    </>
  );
}

export default App;
