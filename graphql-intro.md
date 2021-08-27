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

GraphQL is a query language for your API that relies on graphs, or relationships, between pieces of data. GraphQL isn't tied to any specific database or storage engine. Instead, it's backed by your existing code and data and provides a server-side runtime environment to execute your queries. This makes GraphQL more efficient than REST APIs for large, complex datasets because it allows you to fetch only the data you want.

## Workflow

To create a GraphQL service, you'll follow this workflow:

1. Define your [schema](/schema/) using types and fields.
1. Get data with functions.
1. Start the server.
1. Write a [query](/queries/).
1. Get the results.

## Example

Following the workflow above, here's a basic example.

First, define the **Character** type according to the way your data is structured, including its fields and their [data types](/schema/#scalar-types). Then, define the **Query**:

```graphql
#Create the character
type Character {
  name: String
  homeworld: String
  firstAppearance: String
}

#Create a query that gets characters as an array
type Query {
  hero: [Character]
}
```

Where the data from the server looks like the following:

```js
//Data
const hero = [
  {
    name: "Luke Skywalker",
    homeworld: "Tatooine",
    firstAppearance: "A New Hope",
  },
  {
    name: "Leia Organa",
    homeworld: "Alderaan",
    firstAppearance: "A New Hope",
  },
];
```

Get the data with functions:

```js
//Fetch data from hero with resolver
const resolvers = {
  Query: {
    hero: () => hero,
  },
};
```

When you start the server and make a query, the service [validates](/validation/) the query to ensure it only refers to defined types and fields. Then, it [executes](/execution/) the functions that you provide, like the resolver above, to produce a result.

So a query that fetches the hero's name and homeworld like this:

```graphql
query GetHeroes {
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

- Learn GraphQL with practical tutorials from [How to GraphQL](https://www.howtographql.com)
- Check out the free EDX online course [Exploring GraphQL: A Query Language for APIs](https://www.edx.org/course/exploring-graphql-a-query-language-for-apis)
- Implement a GraphQL service with a specific [programming language](/code/)
