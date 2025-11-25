import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import { useRef } from "react";

function ProductsPage() {
  const productListRef = useRef();

  const handleProductAdded = () => {
    if (productListRef.current) {
      productListRef.current.loadProducts();
    }
  };

  return (
    <div className="App">
      <h1>Product Dashboard</h1>
      <ProductForm onProductAdded={handleProductAdded} />
      <ProductList ref={productListRef} />
    </div>
  );
}

export default ProductsPage;
