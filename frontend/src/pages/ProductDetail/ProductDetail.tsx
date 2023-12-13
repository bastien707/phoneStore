import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "../ProductPage/Products";
import OrderForm from "../../components/OrderForm/OrderForm";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<ProductData | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1/java/phones/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: ProductData = await response.json();
        setProduct(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProductData();
  }, [id]);

  if (!product) {
    return (
      <div className="pageContainer">
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <div className="pageContainer">
      {loading && <p>Loading product data...</p>}
      {error && <p>Error fetching data: {error}</p>}
      <div className="productDetailHeaderContainer">
        <h1>{product.name}</h1>
        <h2>{product.brand}</h2>
        <span>${product.price}</span>
      </div>

      <img src={`../img/home_phone_${id}.avif`} alt={product.name} />

      <h1>Order now</h1>
      <h2>Fill in the form below to order this product</h2>
      <OrderForm />
    </div>
  );
}
