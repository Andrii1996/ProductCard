import React from 'react';
import './searchProduct.css';

export const SearchProduct = ({ search, handleChange }) => (
  <div className="ui input focus" id="input">
    <input
      placeholder="Search"
      name="search"
      value={search}
      onChange={handleChange}
    />
  </div>
);
