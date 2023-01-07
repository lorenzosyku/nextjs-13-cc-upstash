const fetcher = async () => {
  const data = await fetch("/api/getProducts").then((res) => res.json());
  console.log("----fetching products----");
  const products: Product[] = data.products;
  console.log(products);
  return products;
};

export default fetcher;
