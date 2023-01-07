"use client";
import useSWR from "swr";
import fetcher from "../lib/fetchProducts"

function ProductsList() {
  const { data, error } = useSWR("products", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>Products</h1>
      {data.map((product) => (
        <div className="p-10" key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
