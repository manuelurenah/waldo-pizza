import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { ErrorMessage, Loading, PizzaList, Cart } from '../../components';

const GET_PIZZA_SIZES = gql`
  {
    pizzaSizes {
      name,
      maxToppings,
      basePrice,
      toppings {
        topping {
          name,
          price
        }
      }
    }
  }
`;

class Main extends Component {
  state = {
    cartItems: []
  }

  addPizzaToCart = (pizza) => {
    console.log({pizza});

    this.setState({
      cartItems: [
        ...this.state.cartItems,
        pizza
      ]
    });
  }

  render() {
    const { cartItems } = this.state;

    return (
      <Query query={GET_PIZZA_SIZES}>
        {({ data, loading, error }) => {
          if (error) return <ErrorMessage error={error} />;
          if (loading) return <Loading />;

          const { pizzaSizes } = data;

          return (
            <div className="row main-container">
              <PizzaList
                pizzas={pizzaSizes}
                onSelectPizza={this.addPizzaToCart}
              />
              <Cart items={cartItems} />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Main;
