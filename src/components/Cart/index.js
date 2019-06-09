import React from 'react';
import { CartItem } from '..';

const Cart = ({ items }) => {
  const itemsLength = items.length;
  const subtotal = items.reduce((total, current) => total += current.price, 0);

  return (
    <div className="col-4 cart-container">
      <div className="row title-container">
        <h3 className="col">Cart</h3>
      </div>
      <div className="row pizza-size-list">
        {items.map(item => <CartItem key={item.name} {...item} />)}
      </div>
      <div className="row subtotal-container">
        <div className="col">
          <p>Subtotal ({itemsLength} item(s))</p>
        </div>
        <div className="col">
          <p>$ {subtotal}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
