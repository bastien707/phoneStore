import { useEffect, useState } from "react";

interface OrderData {
  address: string;
  id: number;
  phone_id: number;
  userName: string;
}

interface OrderResponse {
  orders: OrderData[];
}

export default function Order() {
  const [ordersData, setOrdersData] = useState<OrderResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await fetch("http://127.0.0.1/python/order");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: OrderResponse = await response.json();
        setOrdersData(data);
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
      {ordersData && (
        <ul>
          {ordersData.orders.map((order) => (
            <li key={order.id}>
              <p>Order ID: {order.id}</p>
              <p>User Name: {order.userName}</p>
              <p>Address: {order.address}</p>
              <p>Phone ID: {order.phone_id}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
