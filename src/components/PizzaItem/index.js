import React from 'react';

const PizzaItem = ({ name, basePrice, maxToppings }) => (
  <div key={name} className="pizza-size-item">
    <h4>{name}</h4>
    <p>Base Price: ${basePrice}</p>
    <p>Max Toppings: {maxToppings ? maxToppings : 'Unlimited'}</p>
  </div>
);

export default PizzaItem;
