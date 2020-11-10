import React from 'react';
import { ProductList } from './components/productList/ProductList';
import { Form } from './components/form/Form';
import './App.css';

const ProductCards = [
  {
    name: 'Bread',
    img: 'https://food-images.files.bbci.co.uk/food/recipes/paul_hollywoods_crusty_83536_16x9.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 80,
    id: 0,
  },
  {
    name: 'Milk',
    img: 'https://www.greenqueen.com.hk/wp-content/uploads/2020/01/turtletree-labs.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 120,
    id: 1,
  },
  {
    name: 'Sausage',
    img: 'https://cdn.shopify.com/s/files/1/0028/0235/2172/products/100_-Beef-Thin_1024x.png?v=1580875141',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 280,
    id: 2,
  }
];

export class App extends React.Component {
  state = {
    products: ProductCards,
  };

  addProduct = (name, url, description, price) => {
    const newProduct = {
      name,
      url,
      description,
      price,
    };

    this.setState(prevState => ({
      products: [...prevState.products, newProduct],
    }));
  }

  deleteProduct = () => {

  }

  pin = () => {

  }

  render() {
    const { products } = this.state;

    return (
      <div className="App">
        <ProductList
          ProductCards={products}
        />
        <div>
          <Form
            addProduct={this.addProduct}
            id={products.length}
            deleteProduct={this.deleteProduct}
            pin={this.pin}
          />
        </div>

      </div>
    );
  }
}
