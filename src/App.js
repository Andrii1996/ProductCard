import React from 'react';
import { ProductList } from './components/productList/ProductList';
import { Form } from './components/form/Form';

import './App.css';
import 'semantic-ui-css/semantic.min.css';

const ProductCards = [
  {
    name: 'Bread',
    img: 'https://food-images.files.bbci.co.uk/food/recipes/paul_hollywoods_crusty_83536_16x9.jpg',
    description: 'A food made from a dough of flour or meal mixed with water or milk, usually raised with yeast or baking powder and then baked. necessary food.',
    price: 80,
    id: 0,
  },
  {
    name: 'Milk',
    img: 'https://www.greenqueen.com.hk/wp-content/uploads/2020/01/turtletree-labs.jpg',
    description: 'The definition of milk is a white or yellowish liquid that comes out of the nipples of mammals to feed their babies.',
    price: 120,
    id: 1,
  },
  {
    name: 'Sausage',
    img: 'https://cdn.shopify.com/s/files/1/0028/0235/2172/products/100_-Beef-Thin_1024x.png?v=1580875141',
    description: 'Sausages are a meat product usually made from ground meat, often pork, beef, or poultry, along with salt, spices and other flavourings.',
    price: 280,
    id: 2,
  }
];

export class App extends React.Component {
  state = {
    products: ProductCards,
    id: ProductCards.length,
  };

  addProduct = (name, img, description, price) => {
    const { id }  = this.state;
    const newProduct = {
      name,
      img,
      description,
      price,
      id,
    };

    this.setState(prevState => ({
      products: [...prevState.products, newProduct],
      id: id + 1,
    }));
  }

  deleteProduct = (id) => {
    const { products } = this.state;
    const findProduct = products.findIndex(product => product.id === id);
    products.splice(findProduct, 1)

    this.setState({
      products: products,
    });
  }

  pin = (id) => {
    const { products } = this.state;
    const findProduct = products.findIndex(product => product.id === id);
    const selctedProduct = products.splice(findProduct, 1);

    this.setState({
      products: [...selctedProduct, ...products],
    });
  }


  render() {
    const { products } = this.state;

    return (
      <div className="App">
        <ProductList
          ProductCards={products}
          deleteProduct={this.deleteProduct}
          pin={this.pin}
        />
        <div>
          <Form
            addProduct={this.addProduct}
          />
        </div>

      </div>
    );
  }
}
