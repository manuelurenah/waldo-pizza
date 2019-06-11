import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import PizzaItem from '../PizzaItem';

const PizzaList = ({ pizzas, onSelectPizza }) => (
  <Col xs lg={8} className="menu-container">
    <Row className="title-container">
      <Col><h3>Menu</h3></Col>
    </Row>
    <Row className="pizza-size-list">
      {pizzas.map(pizza => (
        <PizzaItem
          key={pizza.name}
          onButtonClick={onSelectPizza.bind(null, pizza)}
          {...pizza}
        />
      ))}
    </Row>
  </Col>
);

export default PizzaList;
