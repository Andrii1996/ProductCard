import React from 'react';
import './form.css';

const initialState = {
  name: '',
  url: '',
  description: '',
  price: '',
}

export class Form extends React.Component {
  state = {
    ...initialState,
    id: this.props.id + 1,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, url, description, price } = this.state;
    const { addProduct } = this.props;
    console.log(this.state)
    addProduct(name, url, description, price);

    this.setState = { ...initialState };
    console.log(this.state)
  }

  render() {
    const { name, url, description, price } = this.state;

    return (
      <form
        className="form"
        onSubmit={this.handleSubmit}
      >
        Add new product
        <label className="form__input">
          <input
            name="name"
            placeholder="name"
            type="text"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className="form__input">
          <input
            name="url"
            placeholder="URL"
            type="url"
            value={url}
            onChange={this.handleChange}
          />
        </label>
        <label className="form__input">
          <input
            name="description"
            placeholder="Description"
            type="text"
            value={description}
            onChange={this.handleChange}
          />
        </label>
        <label className="form__input">
          <input
            name="price"
            placeholder="Price"
            type="text"
            value={price}
            onChange={this.handleChange}
          />
        </label>
        <button
          type="submit"
          className="form__button"
        >
          Add product
        </button>
      </form>
    );
  }
}

