import { useState } from "react";
import { useParams } from "react-router-dom";

export default function OrderForm() {
  const { id } = useParams<{ id: string }>();
  const [orderMessage, setOrderMessage] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      userName: formData.get("userName"),
      address: formData.get("address"),
      phone_id: id,
    };

    try {
      const response = await fetch("http://127.0.0.1/python/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      event.target.reset();

      if (response.ok) {
        setOrderMessage("Order placed successfully!");
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (e: any) {
      setOrderMessage(`Error: ${e.message}`);
    }
  };

  return (
    <>
      <form className="buyProductForm" onSubmit={handleSubmit}>
        <label htmlFor="userName">Username</label>
        <input type="text" id="userName" name="userName" required />

        <label htmlFor="quantity">Quantity</label>
        <input type="number" id="quantity" name="quantity" min="1" required />

        <label htmlFor="address">Shipping address</label>
        <input type="text" id="address" name="address" required />

        <button type="submit">Buy now !</button>
      </form>
      <p>{orderMessage}</p>
    </>
  );
}
