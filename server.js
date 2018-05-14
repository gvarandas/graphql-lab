const express = require('express');
var cors = require('cors');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const RandomDie = require('./RandomDie.js');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }
  
  type Query {
    getDie(numSides: Int): RandomDie
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  getDie: ({ numSides = 6 }) => new RandomDie(numSides),
};

var app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');