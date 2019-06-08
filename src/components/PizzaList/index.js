import React from 'react';
import PizzaItem from '../PizzaItem';

const PizzaList = ({ pizzas }) => (
  <div className="col-8 menu-container">
    <div className="row title-container">
      <h3>Menu</h3>
    </div>
    <div className="row pizza-size-list">
      {pizzas.map(pizza => <PizzaItem key={pizza.name} {...pizza} />)}
    </div>
  </div>
);

export default PizzaList;
