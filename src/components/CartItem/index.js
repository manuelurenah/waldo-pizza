import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CartItem = ({ name, basePrice, toppings, removeFromCart }) => {
  const toppingsPrice = toppings.reduce((total, topping) => total += topping.price, 0);
  const totalPrice = basePrice + toppingsPrice;

  return (
    <Col xs={12} className="cart-item">
      <Row>
        <Col className="item-title"><p>{name} Pizza</p></Col>
        <Col className="item-price"><p>${totalPrice.toFixed(2)}</p></Col>
      </Row>
      <Row>
        <ul className="toppings-list">
          {toppings.map(topping => (
            <Col xs={12} key={topping.name}>
              <li className="topping-item">{topping.name}</li>
            </Col>
          ))}
        </ul>
      </Row>
      <Button className="remove-item-btn" variant="link" onClick={removeFromCart}>Remove</Button>
    </Col>
  );
}

export default CartItem;
