import React from 'react';
import { Button } from '..';

const PizzaModal = ({ name, toppings }) => (
  <div className="modal fade" id={`${name}-pizza-modal`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">{name} Pizza</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {toppings.map((topping, index) => (
            <div key={index} className="topping-item">
              <input type="checkbox" name={topping.name} value={topping.name} />{topping.name} (${topping.price})
            </div>
          ))}
        </div>
        <div className="modal-footer">
          <Button type="primary" text="Add To Cart" />
        </div>
      </div>
    </div>
  </div>
);

export default PizzaModal;
