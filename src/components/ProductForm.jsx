import { useState } from "react";
import { createProduct } from "../api/productApi";

function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createProduct({ name, price: Number(price) });

    setName("");
    setPrice("");
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input 
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input 
        placeholder="Price ($)"
        type="number"
        step="0.01"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <button type="submit">➕ Add Product</button>
    </form>
  );
}

export default ProductForm;
