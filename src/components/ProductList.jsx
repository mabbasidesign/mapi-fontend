import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { getProducts, deleteProduct, updateProduct } from "../api/productApi";

const ProductList = forwardRef((props, ref) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", price: "" });
  const [searchTerm, setSearchTerm] = useState("");

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

  useImperativeHandle(ref, () => ({
    loadProducts
  }));

  useEffect(() => {
    loadProducts();
  }, []);

  const startEdit = (product) => {
    setEditingId(product.id);
    setEditForm({ name: product.name, price: product.price });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({ name: "", price: "" });
  };

  const saveEdit = async (id) => {
    try {
      await updateProduct(id, {
        name: editForm.name,
        price: Number(editForm.price),
      });
      await loadProducts();
      cancelEdit();
    } catch (err) {
      console.error("Failed to update product:", err);
    }
  };

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Products</h2>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {error && (
        <div style={{ color: "red", padding: "10px", background: "#fee" }}>
          Error: {error}
          <br />
          Make sure your backend API is running on https://localhost:7234
        </div>
      )}

      {loading && <p>Loading...</p>}

      {filteredProducts.map((p) => (
        <div key={p.id} className="product-item">
          {editingId === p.id ? (
            <>
              <input
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                placeholder="Name"
              />
              <input
                value={editForm.price}
                onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                type="number"
                placeholder="Price"
              />
              <button onClick={() => saveEdit(p.id)}>Save</button>
              <button onClick={cancelEdit}>Cancel</button>
            </>
          ) : (
            <>
              <span style={{ minWidth: 200 }}>{p.name} — ${p.price}</span>
              <button onClick={() => startEdit(p)}>Edit</button>
              <button onClick={() => deleteProduct(p.id).then(loadProducts)}>
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
});

export default ProductList;
