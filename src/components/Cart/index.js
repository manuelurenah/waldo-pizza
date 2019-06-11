import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { CartItem } from '..';

const Cart = ({ items, onRemoveClick }) => {
  const itemsLength = items.length;
  const subtotal = items.reduce((total, item) => {
    total += item.basePrice;
    total += item.toppings.reduce((accum, topping) => accum += topping.price, 0);

    return total;
  }, 0);

  return (
    <Col xs lg={4} className="cart-container">
      <Row className="title-container">
        <Col><h3>Cart</h3></Col>
      </Row>
      <Row className="pizza-size-list">
        {items.map((item, index) => (
          <CartItem
            key={index}
            removeFromCart={onRemoveClick.bind(null, index)}
            {...item}
          />
        ))}
      </Row>
      <Row className="subtotal-container">
        <Col>
          <p>Subtotal ({itemsLength} item(s))</p>
        </Col>
        <Col>
          <p>${subtotal.toFixed(2)}</p>
        </Col>
      </Row>
    </Col>
  );
};

export default Cart;
