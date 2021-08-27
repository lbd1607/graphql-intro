# GraphQL Best Practices

_Intro stuff here ..._

## Serving

> Serve GraphQL over HTTP

GraphQL is typically served over HTTP via a single endpoint that expresses its full capabilities. Read more about this in [Serving Over HTTP](https://graphql.org/learn/serving-over-http/).

## Serializing with JSON

> If serializing with JSON, use gzip for content encoding in production.

To use gzip, send it to the content encoding header:

```html
Accept-Encoding: gzip
```

... default types do not include `null` unless explicitly declared
