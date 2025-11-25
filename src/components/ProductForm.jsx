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
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input 
        placeholder="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default ProductForm;
