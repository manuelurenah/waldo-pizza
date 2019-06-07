import React from 'react';
import PizzaItem from '../PizzaItem';

const PizzaList = ({ pizzas }) => (
  <div className="main-container">
    <div className="pizza-size-list">
      {pizzas.map(pizza => <PizzaItem key={pizza.name} {...pizza} />)}
    </div>
  </div>
);

export default PizzaList;
