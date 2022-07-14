const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Note {
  _id: ID!
  title: String!,
  date: Date,
  content: String!,
  createdAt: String
}

type Query {
  allNotes: [Note]
}
`;

module.exports = typeDefs;
