import React from 'react';
import PizzaItem from '../PizzaItem';

const PizzaList = ({ pizzas, onSelectPizza }) => (
  <div className="col-8 menu-container">
    <div className="row title-container">
      <h3 className="col">Menu</h3>
    </div>
    <div className="row pizza-size-list">
      {pizzas.map(pizza => (
        <PizzaItem
          key={pizza.name}
          onButtonClick={onSelectPizza.bind(null, pizza)}
          {...pizza}
        />
      ))}
    </div>
  </div>
);

export default PizzaList;
