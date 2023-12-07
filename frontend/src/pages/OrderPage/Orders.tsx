import { useEffect, useState } from "react";

export default function Order() {
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await fetch("http://127.0.0.1/python/order");
        console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setOrderData(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderData();
  }, []);

  return (
    <>
      <h2>Orders</h2>
      {loading && <p>Loading order data...</p>}
      {error && <p>Error fetching data: {error}</p>}
      {orderData && <pre>{JSON.stringify(orderData, null, 2)}</pre>}
    </>
  );
}
