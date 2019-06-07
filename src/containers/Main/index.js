import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';

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
        <div className="main-container">
          <ul className="pizza-size-list">
            {pizzaSizes.map(size => (
              <li key={size.name} className="pizza-size">{size.name} ${size.basePrice}</li>
            ))}
          </ul>
        </div>
      );
    }}
  </Query>
);

export default Main;
