import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

function ProductsPage() {
  return (
    <div className="App">
      <h1>Product Dashboard</h1>
      <ProductForm />
      <ProductList />
    </div>
  );
}

export default ProductsPage;
