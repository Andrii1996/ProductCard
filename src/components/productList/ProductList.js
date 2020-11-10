import React from 'react';
import './productList.css';

export const ProductList = ({ ProductCards, deleteProduct, pin, id }) => (
  <div className="first-block">
    <div className="productList">
      {ProductCards.map(card => (
        <div
          key={card.id}
          className="productCard"
        >
          <img
            src={card.img}
            alt="logo bread"
            className="productCard_logo"
          />
          <p>{`name: ${card.name}`}</p>
          <p>{`description: ${card.description}`}</p>
          <p>{`price: ${card.price} UAH`}</p>
          <div>
            <button
              type="button"
              name="delete"
              onClick={deleteProduct}
            >
              Delete
            </button>
            <button
              type="button"
              name="pin"
              onClick={pin}
            >
              Pin
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
)
