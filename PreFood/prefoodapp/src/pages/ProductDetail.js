import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import {Rating} from "../components"
import {useParams} from "react-router-dom"
import { useTitle } from "../components/hooks/useTitle";


export const ProductDetail = () => {
  const [product, setProduct] = useState({});
const {id} = useParams();
useTitle(product.name)







useEffect(() => {
    async function fetchProducts(){
      const response = await fetch(`http://localhost:4000/products/${id}`);
      const data = await response.json()
      setProduct(data);
    }
    fetchProducts();
  }, [id]);


  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.description}</p>

      <div className="main-productdetail">
        <div className="img-Container">
          <img src={product.img} alt={product.name}></img>
        </div>

        <div>
          <div className="des-Container">
            <span>
              <h3>${product.price}</h3>
            </span>
            <span className="rating-container">
                <Rating  rating={product.rating}/>
                
                </span>

            {product.top_seller && (
              <span>
                <p>Best Seller</p>
              </span>
            )}

            {product.in_stock && (
              <span>
                <p>Instock</p>
              </span>
            )}

            {!product.in_stock && (
              <span>
                <p>Outofstock</p>
              </span>
            )}
            <button  type="button" className="btn btn-primary">
              Order Now
            </button>
           


            {product.description &&  <p>
             {product.description}
            </p>} 
          </div>
        </div>
      </div>
    </>
  );
};
