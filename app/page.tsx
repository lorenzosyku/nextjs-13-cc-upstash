import ProductList from "./ProductsList";
import ProductForm from "./productForm";

function Homepage() {
  return (
    <div className="">
      <h1>i am the Homepage</h1>

      <ProductForm />
      <ProductList />
    </div>
  );
}

export default Homepage;
