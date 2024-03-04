import React, { Component } from 'react';

class Cart extends Component {
  render() {
    const { cartItems } = this.props;

    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return <div>Your cart is empty</div>;
    }

    return (
      <div className="cart">
        <h2>Cart</h2>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.uniqueno} className="cart-item">
              <img src={item.imageUrl} alt={item.description} />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Cart;
