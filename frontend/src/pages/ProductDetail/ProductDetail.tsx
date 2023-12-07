import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "../ProductPage/Products";

const ProductDetail = () => {
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
    return <div>Product {id} not found </div>;
  }

  return (
    <div>
      {loading && <p>Loading product data...</p>}
      {error && <p>Error fetching data: {error}</p>}
      <h2>{product.name}</h2>
      <p>{product.brand}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductDetail;
