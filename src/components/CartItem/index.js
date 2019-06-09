import React from 'react';

const CartItem = ({ name, price, toppings }) => (
  <div className="col-12 cart-item">
    <div className="row">
      <p className="col">{name}</p>
      <p className="col">$ {price}</p>
    </div>
    <ul className="row">
      {toppings.map((topping, index) => <li key={index} className="col-12">{topping.name}</li>)}
    </ul>
  </div>
);

export default CartItem;
