import { resolver } from "graphql-sequelize"
// const resolver = require("graphql-sequelize")
import { Company } from "../../models"
// import to from 'await-to-js';

export const CompanyMap = {
  users: resolver(Company.associations.users)
}
