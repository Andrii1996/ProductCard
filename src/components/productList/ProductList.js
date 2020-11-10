import React from 'react';
import './productList.css';
import { SearchProduct } from '../searchProduct/SearchProduct';
import PropTypes from 'prop-types';

export class ProductList extends React.Component {
  state = {
    search: '',
  };

  
  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
    console.log(this.state)
  }

  render() {
    const { ProductCards, deleteProduct, pin } = this.props;
    const { search } = this.state;
    const filteredProduct = ProductCards.filter(product => {
      return product.name.toLowerCase().includes(search.toLowerCase())
      || product.description.toLowerCase().includes(search.toLowerCase())
    });

    return (
      <div className="first-block">
        <SearchProduct
          search={search}
          handleChange={this.handleChange}
        />
        <div className="productList">
          {filteredProduct.map(card => (
            <div
              key={card.id}
              className="ui card"
              id="productCard"
            >
              <img
                src={card.img}
                alt={`logo ${card.name}`}
                className="productCard_logo"
              />
              <div className="content">
                <p>
                  <span>{`name: `}</span>
                  <span className="title">{card.name}</span>
                </p>
                <p>{`description: ${card.description}`}</p>
                <p>
                  <span>{`price: `}</span>
                  <span className="price">{`${card.price} UAH`}</span>
                </p>
              </div>
              <div>
                <button
                className="ui button"
                  type="button"
                  name="delete"
                  onClick={() => deleteProduct(card.id)}
                >
                  Delete
                </button>
                <button
                  className="ui button"
                  type="button"
                  name="pin"
                  onClick={() => pin(card.id)}
                >
                  Pin
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

}  

ProductList.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
};
