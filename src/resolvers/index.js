const { Query } = require('./Query')
const { auth } = require('./Mutation/auth')
const { post } = require('./Mutation/post')
const { Subscription } = require('./Subscription')
const { User } = require('./User')
const { Post } = require('./Post')
const { request } = require('./Mutation/request')

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...post,
    ...request
  },
  Subscription,
  User,
  Post,
}
