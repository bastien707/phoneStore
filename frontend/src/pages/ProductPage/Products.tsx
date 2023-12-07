import { useEffect, useState } from "react";
import ProcutItem from "../../components/ProductItem/ProductItem";

export interface ProductData {
  id: number;
  name: string;
  brand: string;
  price: number;
  imageUrl: string | null;
}

export default function Products() {
  const [productData, setProductData] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch("http://127.0.0.1/java/phones/all");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: ProductData[] = await response.json();
        setProductData(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);

  return (
    <>
      <h2>Products</h2>
      {loading && <p>Loading product data...</p>}
      {error && <p>Error fetching data: {error}</p>}
      {productData && (
        <ul>
          {productData.map((product) => (
            <li key={product.id}>
              <ProcutItem {...product} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
