import React from 'react';

import { PIZZA_IMG_URLS } from '../../utils/constants';
import { Button } from '..';

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
        <Button
          customClass="select-pizza-btn"
          text="Select"
          type="primary"
          onButtonClick={onButtonClick}
        />
      </div>
    </div>
  </div>
);

export default PizzaItem;
