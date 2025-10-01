import { useParams } from "react-router-dom";

function ProductPage() {
  const params = useParams();
  console.log(params);
  return <h1>Product Page: {id}</h1>;
}

export default ProductPage;
