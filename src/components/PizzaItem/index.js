import React from 'react';
import Button from 'react-bootstrap/Button';

import { PIZZA_IMG_URLS } from '../../utils/constants';

const PizzaItem = ({ name, basePrice, maxToppings, onButtonClick }) => (
  <div key={name} className="col pizza-size-item">
    <div className="card">
      <img src={PIZZA_IMG_URLS[name]} className="card-img-top" alt="Pizza" />
      <div className="card-body text-left">
        <h5 className="card-title">{name} Pizza</h5>
        <p className="card-text">
          Base Price: ${basePrice} <br />
          Max Toppings: {maxToppings ? maxToppings : 'Unlimited'}
        </p>
        <Button onClick={onButtonClick}>Select</Button>
      </div>
    </div>
  </div>
);

export default PizzaItem;
