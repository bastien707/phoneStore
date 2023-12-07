import { OrderData } from "../../pages/OrderPage/Orders";
import "./OrderItem.css";

export default function OrderItem(order: OrderData) {
  return (
    <>
      <h3>Order #{order.id}</h3>
      <p>Phone ID: {order.phone_id}</p>
      <p>User name: {order.userName}</p>
      <p>Shipping address: {order.address}</p>
    </>
  );
}
