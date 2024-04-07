# Graphql API with Apollo Server

Following along with the Pluralsight course Building a GraphQL API with Apollo Server by Jonathan Mills

## Misc

npm start to run

Use the playground for queries. For example, when the resolver for session returns the sessions data from the json file, you can query for the sessions like below.

First, declare a query in the playground:

```
query {
}
```

Then, look at the queries available from the schema on the right side of the playground. In the first example there is just one - session.

```
query {
  sessions {
    
  }
}
```

In graphql you must specify the fields you want returned in the query. So, for example, if you want the id and title of the sessions, you would query like this:

```
query {
  sessions {
    id
    title
  }
}
```

Field level directives

* `@include(if: Boolean)`: Only include this field if the argument is true
* `@skip(if: Boolean)`: Skip this field if the argument is true
* `@deprecated(reason: String)`: Mark this field as deprecated and provide a reason

Can write custom directives as well.

