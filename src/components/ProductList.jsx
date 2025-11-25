import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../api/productApi";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError(err.message);
      console.error("Failed to load products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {error && (
        <div style={{ color: "red", padding: "10px", background: "#fee" }}>
          Error: {error}
          <br />
          Make sure your backend API is running on https://localhost:7234
        </div>
      )}

      {loading && <p>Loading...</p>}

      {products.map((p) => (
        <div key={p.id} style={{ display: "flex", gap: 20 }}>
          <span>{p.name} — ${p.price}</span>
          <button onClick={() => deleteProduct(p.id).then(loadProducts)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
