## Node Graphql Apollo Template for Typescript

********************************************************************************************************
** Original from brianschardt/node_graphql_apollo_template **
I simply upgraded the packages for now!
Please use the original version, this one will be a work in progress for testing some proof of concepts.
********************************************************************************************************


My goal for this template is not to explain the basics of graphql, but to show someone how to quickly build a Graphql API that does not have the n + 1 issue. This template IS MEANT to be used for 
production as it contains easy ways to manage environment variables, and has an organized structure so code will not get out of hand. 
To manage the n + 1 issue, we use data loading, the thing facebook released to solve this issue.

Here is a link that goes over the code in this package in more detail. 

https://medium.com/@brianalois/best-graphql-node-api-template-for-sql-jwt-2018-5e956b715143

#### Authentication : JWT

#### ORM: Sequelize

#### Database: Mysql, or Postgres

Other Important packages used: express, apollo-server, graphql-sequelize, dataloader-sequelize

Note: This uses typescript for the app. It is so similar to javascript, you could never have used typescript and add to this template. However, I will be writing this to use plain javascript. Comment if you would like that.
