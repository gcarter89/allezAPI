# allezPI

## Summary

This repository is a backend implementation of the **Prisma** library to build a RESTful API using a relational, postgreSQL database. The codebase is JavaScript and server requests are facilitated by NodeJS, and the API returns a JavaScript Object.

## Contents

This repository is a JavaScript implementation of the **Prisma** ORM library to build a RESTful API with a relational, postgreSQL database. It contains the following:
  * A schema with two models **rider** and **tour** with relational fields between the two for classification victories.
    * Additional configuration for producing a total number of classification wins per rider.
  * Two seed files containing sample data for instances of **rider** and **tour**.
  * A server.js file containing functions for handling two GET endpoint requests using **Express**.
  * A testing suite using the **Jest** library to validate actual output against expected output.
 
## To run

```npm install```

### Pre-requisites