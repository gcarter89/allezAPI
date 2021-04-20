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


### Prerequisites

To install and utilise this repository, the following is required:

* You need Node.js with version 10 or higher to utilise Prisma. Resources for setting up Node on your machine can be found here: https://nodejs.org/en/.

* To run this repository with limited configuration, you need PostgreSQL installed on your machine. You can find resources for installing PostgreSQL here: https://www.postgresql.org/about/. However, if you are familiar with configuring Prisma for other RDBMSs you may configure this in the ```schema.prisma``` file.
 
## Quickstart

1. ```npm install```
2. Create a ```.env``` file with the ```DATABASE_URL``` variable set to your PostgreSQL database: ```DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"```. If you require further guidance, please follow the Prisma documentation here: https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project-node-postgres
3. ```npx generate```
4. ```npx prisma migrate dev``
5. Seed your database with sample data in the following order (the order is important due to how the **rider** and **tour** models are related to eachother):
    * ```node ./seeds/rider_seed.js```
    * ```node ./seeds/tour_seed.js```

## Testing

To the run the tests in this repository use the following command: ```npm test```.

If you require further guidance, please peruse the Jest documentation found here: https://jestjs.io/docs/getting-started