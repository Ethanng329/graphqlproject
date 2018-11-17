const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

//graphQL Schema
const schema = buildSchema(
  `
  type Query {
    message: String
  }`
);

//Root resolver {
const root = {
  message: 'Hello World'
};

const app = express();

app.use(
  '/graphql',
  express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(4000, console.log('listening to port 4000'));
