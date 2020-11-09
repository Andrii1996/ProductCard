import React from 'react';
import './productList.css';

export const ProductList = ({ ProductCards }) => (
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
        </div>
      ))}
    </div>
  </div>
)
