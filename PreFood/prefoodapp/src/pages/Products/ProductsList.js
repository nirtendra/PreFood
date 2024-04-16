import { useEffect, useState } from "react";
import { ProductCard } from "../../components";
import { FilterBar } from "./components/FilterBar";


import { useTitle } from "../../components/hooks/useTitle";

import {OrderPage } from "../Order/OrderPage"


export const ProductsList = () => {

useTitle("Explore Digital Food Me")


  const [show, setShow] = useState(false); 
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [selectedProductId, setSelectedProductId] = useState(null);
  
  

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`http://localhost:4000/products`);
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // Reset to all products if searchTerm is empty
    }
  }, [products, searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToOrder = (productId) => {
   
    setSelectedProductId(productId);
  };

 


  return (
    <main>
      <section>
        <div className="btn-productlist-conatiner">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            All Food ({filteredProducts.length})
          </span>
          <span>
            <input
              type="text"
              placeholder="Search Products"
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            <button onClick={() => setShow(!show)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-filter-square"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
              </svg>
            </button>
          </span>
        </div>

        <div className="productlist-container">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product}    onClick={() => handleAddToOrder(product.id)}/>
            
          ))}
        </div>
      </section>

      {show && <FilterBar setShow={setShow} />}
      {selectedProductId && <OrderPage productId={selectedProductId} />}
      
    </main>
  );
};
