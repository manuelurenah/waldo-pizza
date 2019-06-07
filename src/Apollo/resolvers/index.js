import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    cartItems: [ID!]!
  }

  extend type PizzaSize {
    id: ID!
  }

  extend type Mutation {
    addOrRemoveFromCart(id: ID!): [PizzaSize]
  }
`;
const resolvers = {};

export { typeDefs, resolvers };
