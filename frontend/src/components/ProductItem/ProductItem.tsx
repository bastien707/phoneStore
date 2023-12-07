import { Link } from "react-router-dom";
import { ProductData } from "../../pages/ProductPage/Products";
import "./ProductItem.css";

export default function ProcutItem(product: ProductData) {
  return (
    <div className="productItemContainer">
      <h3>{product.name}</h3>
      {product.imageUrl != null ? (
        <figure className="productImageContainer">
          <img src={product.imageUrl} alt={product.name} />
        </figure>
      ) : (
        <figure className="productImageContainer">
          <img src="img/phone_not_found.avif" alt={product.name} />
        </figure>
      )}
      <p>{product.brand}</p>
      <p>${product.price}</p>
      <Link to={`/products/${product.id}`} className="viewProductButton">
        View Product
      </Link>
    </div>
  );
}
