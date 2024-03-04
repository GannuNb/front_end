import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import search_img from "/home/gannu/Desktop/react/google/googl/src/images/image 1.jpg";
import pizza1 from "/home/gannu/Desktop/react/google/googl/src/images/Rectangle 18.png";
import pizza2 from "/home/gannu/Desktop/react/google/googl/src/images/Rectangle 20.png";
import pizza3 from "/home/gannu/Desktop/react/google/googl/src/images/Rectangle 21.png";
import "/home/gannu/Desktop/react/google/googl/src/pizza.css";
import pizza_cart from "/home/gannu/Desktop/react/google/googl/src/images/Rectangle 23.png";
import Cart from "./cart";

const pizza_list = [
  {
    uniqueno: 1,
    imageUrl: pizza1,
    description: "Pizza Nerds",
  },
  {
    uniqueno: 2,
    imageUrl: pizza2,
    description: "Margarita",
  },
  {
    uniqueno: 3,
    imageUrl: pizza3,
    description: "Patriotic Pizza",
  },
  {
    uniqueno: 4,
    imageUrl: pizza1,
    description: "Pizza Nerds",
  },
];

class Pizza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      cartItems: [],
    };
  }

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  addToCart = (item) => {
    this.setState(prevState => ({
      cartItems: [...prevState.cartItems, item]
    }));
  };

  render() {
    const { searchTerm, cartItems } = this.state;

    let filteredPizzaList = pizza_list;
    if (searchTerm) {
      filteredPizzaList = pizza_list.filter((item) =>
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={
              <>
                <div className="pizza">
                  <div className="search1"></div>
                  <img className="image-7-icon" alt="" src={search_img}></img>
                  <input
                    className="search-for-pizza"
                    placeholder="Search for pizza"
                    type="text"
                    value={searchTerm}
                    onChange={this.handleSearchChange}
                  ></input>
                  <div className="available-pizzas">Available Pizzas</div>

                  <div className="pizza-container">
                    {filteredPizzaList.map((item) => (
                      <div className="card-item" key={item.uniqueno}>
                        <img className="card-image" alt="" src={item.imageUrl} />
                        <p className="card-description">{item.description}</p>
                        <div className="card-actions">
                          <button
                            className="add-to-cart-button"
                            onClick={() => this.addToCart(item)}
                          >
                            Add to Cart
                          </button>
                          <button className="buy-now-button">Buy Now</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="sidebar">
                  <div className="sidebar_item">
                    <p>Home </p>
                  </div>
                  <div className="sidebar_item">
                    <p>About </p>
                  </div>
                  <div className="sidebar_item">
                    <p>Orders </p>
                  </div>
                  <div className="sidebar_item">
                    <p>Favourites </p>
                  </div>
                  <div className="sidebar_item">
                    <p>Settings </p>
                  </div>
                </div>
              </>
            } />
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          </Routes>

          <Link to="/cart">
            <img src={pizza_cart} alt="Pizza Cart" className="pizza-item"/>
          </Link>
        </div>
      </Router>
    );
  }
}

export default Pizza;
