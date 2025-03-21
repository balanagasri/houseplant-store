import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from '../redux/actions';

import products from "../data/products";

const ProductListing = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Our Houseplants</h2>
      {["Indoor", "Outdoor", "Succulents"].map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <div className="product-list">
            {products
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div key={plant.id} className="product">
                  <img src={plant.image} alt={plant.name} />
                  <h4>{plant.name}</h4>
                  <p>${plant.price}</p>
                  <button onClick={() => dispatch(addToCart(plant))}>Add to Cart</button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
