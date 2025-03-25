import { useEffect, useState } from "react";
import Card from "./carditem";

const Items = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing") 
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <div className="row">
        {products.map((item) => (
          <div className="col-md-4 py-3 py-md-0" key={item.id}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Items;
