import React from 'react';
import './form.css';

export class Form extends React.Component {
  state = {
    name: '',
    img: '',
    description: '',
    price: '',
    error: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, img, description, price } = this.state;
    const { addProduct } = this.props;

    if (!name || !img || !description || !price) {
      this.setState({
        error: true,
      });

      return;
    }

    addProduct(name, img, description, price);

    this.setState({
      name: '',
      img: '',
      description: '',
      price: '',
      error: false,
    });
  }

  render() {
    const { name, img, description, price, error } = this.state;

    return (
      <form
        className="ui form form__position"
        onSubmit={this.handleSubmit}
      >
        Add new product
        <label className="ui input input__position">
          <input
            name="name"
            placeholder="name"
            type="text"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className="ui input input__position">
          <input
            name="img"
            placeholder="URL"
            type="url"
            value={img}
            onChange={this.handleChange}
          />
        </label>
        <label className="ui input input__position">
          <input
            name="description"
            placeholder="Description"
            type="text"
            value={description}
            onChange={this.handleChange}
          />
        </label>
        <label className="ui input input__position">
          <input
          className="ui input"
            name="price"
            placeholder="Price"
            type="text"
            value={price}
            onChange={this.handleChange}
          />
        </label>
        <button
          type="submit"
          className="ui button button__style"
        >
          Add product
        </button>
        {error
        ? <p className="error">Enter all data</p>
        : '' 
        }
      </form>
    );
  }
}

