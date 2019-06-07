import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { ErrorMessage, Loading, PizzaList, Cart } from '../../components';

const GET_PIZZA_SIZES = gql`
  {
    pizzaSizes {
      name,
      maxToppings,
      basePrice
    }
  }
`;

const Main = () => (
  <Query query={GET_PIZZA_SIZES}>
    {({ data, loading, error }) => {
      if (error) return <ErrorMessage error={error} />;
      if (loading) return <Loading />;

      const { pizzaSizes } = data;

      return (
        <div className="row main-container">
          <div className="col-8">
            <PizzaList pizzas={pizzaSizes} />
          </div>
          <div className="col-4">
            <Cart />
          </div>
        </div>
      );
    }}
  </Query>
);

export default Main;
