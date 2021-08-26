---
title: Introduction to GraphQL
sidebarTitle: Introduction
layout: docs
category: Learn
permalink: /learn/
next: /learn/queries/
---

> Learn about GraphQL, how it works, and how to use it.

## Contents

- [Typical Workflow](#typical-workflow)
- [Example](#example)
- [More Information](#more-information)

GraphQL is a query language for your API. It provides a server-side runtime for executing queries that you define for your data. GraphQL isn't tied to any specific database or storage engine. Instead, it's backed by your existing code and data. This makes GraphQL more efficient than REST APIs for large datasets because it allows you to fetch only the data you want.

## Typical Workflow

To create a GraphQL service, you'll follow this typical workflow:

1. Define your schema using types.
1. Get data from the server with functions.
1. Write a query.
1. Get the results and parse the data.

## Example

Following the workflow above, here's a basic example.

Define the types Character and the Query:

```graphql
#Create the Character type
type Character {
  name: String
  homeworld: String
}

#Create a query for the Character
type Query {
  hero: [Character]
}
```

Get the data from the server:

```js
//Data
const hero = [
  {
    name: "Luke Skywalker",
    homeworld: "Tatooine",
  },
  {
    name: "Leia Organa",
    homeworld: "Alderaan",
  },
];
```

Resolve the data:

```js
//Fetch data from hero
const resolvers = {
  Query: {
    hero: () => hero,
  },
};
```

After a GraphQL service is running (typically at a URL on a web service), it can receive GraphQL queries to validate and execute.
The service first checks a query to ensure it only refers to the types and fields defined, and then runs the provided functions
to produce a result.

For example, the query:

```graphql
query GetHero {
  hero {
    name
    homeworld
  }
}
```

Produces the following JSON result:

```json
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
```

## More Information

- Learn GraphQL with practical tutorials: [How to GraphQL](https://www.howtographql.com).
- Check out the free EDX online course: [Exploring GraphQL: A Query Language for APIs](https://www.edx.org/course/exploring-graphql-a-query-language-for-apis).
- Implement a GraphQL service with [a specific language](/code/).
