const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
#Create the Character type
type Character {
  name: String
  homeworld: String
  hasDroids: Boolean
}

#Create a query for the Character
type Query {
  hero: [Character]
}
`;

const hero = [
    {
      name: 'Luke Skywalker',
      homeworld: 'Tatooine',
      hasDroids: true,
    },
    {
      name: 'Leia Organa',
      homeworld: 'Alderaan',
      hasDroids: false,
    },
  ];


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves hero from the "hero" array above.
const resolvers = {
    Query: {
      hero: () => hero,
    },
  };
  

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});



/* 
//Query
query GetHero{
  hero {
    name,
    homeworld,
    }
}

//JSON Response
{
  "data": {
    "hero": [
      {
        "name": "Luke Skywalker",
        "homeworld": "Tatooine"
      },
      {
        "name": "Leia Organa",
        "homeworld": "Alderaan"
      }
    ]
  }
}
*/
  
  
  

