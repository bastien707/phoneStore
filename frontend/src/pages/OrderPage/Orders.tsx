import { useEffect, useState } from "react";
import OrderItem from "../../components/OrderItem/OrderItem";
import "./Orders.css";

export interface OrderData {
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
    <div className="pageContainer">
      <h2>Orders</h2>
      {loading && <p>Loading order data...</p>}
      {error && <p>Error fetching data: {error}</p>}
      {ordersData && (
        <div className="orderList">
          {ordersData.orders.map((order) => (
            <div key={order.id} className="orderItemContainer">
              <OrderItem {...order} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
