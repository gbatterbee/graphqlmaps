import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLFloat } from 'graphql';

const Location = new GraphQLObjectType({
  name: 'Location',
  description: 'A Location',
  fields: () => ({
    lat: { type: new GraphQLNonNull(GraphQLFloat) },
    long: { type: new GraphQLNonNull(GraphQLFloat) },
  }),
});

export default new GraphQLObjectType({
  name: 'Property',
  description: 'A property',
  fields: () => ({
    address: {
      type: GraphQLString,
      description: 'the address of the property',
      resolve: ({ address }) => address,
    },
    id: {
      type: GraphQLString,
      description: 'the unique id of the property',
      resolve: ({ id }) => id,
    },
    location: {
      type: Location,
      resolve: ({ location }) => location,
    },
  }),
});
