module.exports = {
        typeDefs: /* GraphQL */ `type AggregateApplication {
  count: Int!
}

type AggregateApproval {
  count: Int!
}

type AggregateRequest {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Application {
  id: ID!
  ait: Int!
  name: String!
  owner: User
  upstream(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Application!]
  downstream(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Application!]
}

type ApplicationConnection {
  pageInfo: PageInfo!
  edges: [ApplicationEdge]!
  aggregate: AggregateApplication!
}

input ApplicationCreateInput {
  ait: Int!
  name: String!
  owner: UserCreateOneInput
  upstream: ApplicationCreateManyWithoutDownstreamInput
  downstream: ApplicationCreateManyWithoutUpstreamInput
}

input ApplicationCreateManyWithoutDownstreamInput {
  create: [ApplicationCreateWithoutDownstreamInput!]
  connect: [ApplicationWhereUniqueInput!]
}

input ApplicationCreateManyWithoutUpstreamInput {
  create: [ApplicationCreateWithoutUpstreamInput!]
  connect: [ApplicationWhereUniqueInput!]
}

input ApplicationCreateOneInput {
  create: ApplicationCreateInput
  connect: ApplicationWhereUniqueInput
}

input ApplicationCreateWithoutDownstreamInput {
  ait: Int!
  name: String!
  owner: UserCreateOneInput
  upstream: ApplicationCreateManyWithoutDownstreamInput
}

input ApplicationCreateWithoutUpstreamInput {
  ait: Int!
  name: String!
  owner: UserCreateOneInput
  downstream: ApplicationCreateManyWithoutUpstreamInput
}

type ApplicationEdge {
  node: Application!
  cursor: String!
}

enum ApplicationOrderByInput {
  id_ASC
  id_DESC
  ait_ASC
  ait_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ApplicationPreviousValues {
  id: ID!
  ait: Int!
  name: String!
}

input ApplicationScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  ait: Int
  ait_not: Int
  ait_in: [Int!]
  ait_not_in: [Int!]
  ait_lt: Int
  ait_lte: Int
  ait_gt: Int
  ait_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [ApplicationScalarWhereInput!]
  OR: [ApplicationScalarWhereInput!]
  NOT: [ApplicationScalarWhereInput!]
}

type ApplicationSubscriptionPayload {
  mutation: MutationType!
  node: Application
  updatedFields: [String!]
  previousValues: ApplicationPreviousValues
}

input ApplicationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ApplicationWhereInput
  AND: [ApplicationSubscriptionWhereInput!]
  OR: [ApplicationSubscriptionWhereInput!]
  NOT: [ApplicationSubscriptionWhereInput!]
}

input ApplicationUpdateDataInput {
  ait: Int
  name: String
  owner: UserUpdateOneInput
  upstream: ApplicationUpdateManyWithoutDownstreamInput
  downstream: ApplicationUpdateManyWithoutUpstreamInput
}

input ApplicationUpdateInput {
  ait: Int
  name: String
  owner: UserUpdateOneInput
  upstream: ApplicationUpdateManyWithoutDownstreamInput
  downstream: ApplicationUpdateManyWithoutUpstreamInput
}

input ApplicationUpdateManyDataInput {
  ait: Int
  name: String
}

input ApplicationUpdateManyMutationInput {
  ait: Int
  name: String
}

input ApplicationUpdateManyWithoutDownstreamInput {
  create: [ApplicationCreateWithoutDownstreamInput!]
  delete: [ApplicationWhereUniqueInput!]
  connect: [ApplicationWhereUniqueInput!]
  disconnect: [ApplicationWhereUniqueInput!]
  update: [ApplicationUpdateWithWhereUniqueWithoutDownstreamInput!]
  upsert: [ApplicationUpsertWithWhereUniqueWithoutDownstreamInput!]
  deleteMany: [ApplicationScalarWhereInput!]
  updateMany: [ApplicationUpdateManyWithWhereNestedInput!]
}

input ApplicationUpdateManyWithoutUpstreamInput {
  create: [ApplicationCreateWithoutUpstreamInput!]
  delete: [ApplicationWhereUniqueInput!]
  connect: [ApplicationWhereUniqueInput!]
  disconnect: [ApplicationWhereUniqueInput!]
  update: [ApplicationUpdateWithWhereUniqueWithoutUpstreamInput!]
  upsert: [ApplicationUpsertWithWhereUniqueWithoutUpstreamInput!]
  deleteMany: [ApplicationScalarWhereInput!]
  updateMany: [ApplicationUpdateManyWithWhereNestedInput!]
}

input ApplicationUpdateManyWithWhereNestedInput {
  where: ApplicationScalarWhereInput!
  data: ApplicationUpdateManyDataInput!
}

input ApplicationUpdateOneRequiredInput {
  create: ApplicationCreateInput
  update: ApplicationUpdateDataInput
  upsert: ApplicationUpsertNestedInput
  connect: ApplicationWhereUniqueInput
}

input ApplicationUpdateWithoutDownstreamDataInput {
  ait: Int
  name: String
  owner: UserUpdateOneInput
  upstream: ApplicationUpdateManyWithoutDownstreamInput
}

input ApplicationUpdateWithoutUpstreamDataInput {
  ait: Int
  name: String
  owner: UserUpdateOneInput
  downstream: ApplicationUpdateManyWithoutUpstreamInput
}

input ApplicationUpdateWithWhereUniqueWithoutDownstreamInput {
  where: ApplicationWhereUniqueInput!
  data: ApplicationUpdateWithoutDownstreamDataInput!
}

input ApplicationUpdateWithWhereUniqueWithoutUpstreamInput {
  where: ApplicationWhereUniqueInput!
  data: ApplicationUpdateWithoutUpstreamDataInput!
}

input ApplicationUpsertNestedInput {
  update: ApplicationUpdateDataInput!
  create: ApplicationCreateInput!
}

input ApplicationUpsertWithWhereUniqueWithoutDownstreamInput {
  where: ApplicationWhereUniqueInput!
  update: ApplicationUpdateWithoutDownstreamDataInput!
  create: ApplicationCreateWithoutDownstreamInput!
}

input ApplicationUpsertWithWhereUniqueWithoutUpstreamInput {
  where: ApplicationWhereUniqueInput!
  update: ApplicationUpdateWithoutUpstreamDataInput!
  create: ApplicationCreateWithoutUpstreamInput!
}

input ApplicationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  ait: Int
  ait_not: Int
  ait_in: [Int!]
  ait_not_in: [Int!]
  ait_lt: Int
  ait_lte: Int
  ait_gt: Int
  ait_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  owner: UserWhereInput
  upstream_every: ApplicationWhereInput
  upstream_some: ApplicationWhereInput
  upstream_none: ApplicationWhereInput
  downstream_every: ApplicationWhereInput
  downstream_some: ApplicationWhereInput
  downstream_none: ApplicationWhereInput
  AND: [ApplicationWhereInput!]
  OR: [ApplicationWhereInput!]
  NOT: [ApplicationWhereInput!]
}

input ApplicationWhereUniqueInput {
  id: ID
}

type Approval {
  id: ID!
  request: Request!
  user: User!
  approved: Boolean
  notes: String
}

type ApprovalConnection {
  pageInfo: PageInfo!
  edges: [ApprovalEdge]!
  aggregate: AggregateApproval!
}

input ApprovalCreateInput {
  request: RequestCreateOneInput!
  user: UserCreateOneInput!
  approved: Boolean
  notes: String
}

type ApprovalEdge {
  node: Approval!
  cursor: String!
}

enum ApprovalOrderByInput {
  id_ASC
  id_DESC
  approved_ASC
  approved_DESC
  notes_ASC
  notes_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ApprovalPreviousValues {
  id: ID!
  approved: Boolean
  notes: String
}

type ApprovalSubscriptionPayload {
  mutation: MutationType!
  node: Approval
  updatedFields: [String!]
  previousValues: ApprovalPreviousValues
}

input ApprovalSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ApprovalWhereInput
  AND: [ApprovalSubscriptionWhereInput!]
  OR: [ApprovalSubscriptionWhereInput!]
  NOT: [ApprovalSubscriptionWhereInput!]
}

input ApprovalUpdateInput {
  request: RequestUpdateOneRequiredInput
  user: UserUpdateOneRequiredInput
  approved: Boolean
  notes: String
}

input ApprovalUpdateManyMutationInput {
  approved: Boolean
  notes: String
}

input ApprovalWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  request: RequestWhereInput
  user: UserWhereInput
  approved: Boolean
  approved_not: Boolean
  notes: String
  notes_not: String
  notes_in: [String!]
  notes_not_in: [String!]
  notes_lt: String
  notes_lte: String
  notes_gt: String
  notes_gte: String
  notes_contains: String
  notes_not_contains: String
  notes_starts_with: String
  notes_not_starts_with: String
  notes_ends_with: String
  notes_not_ends_with: String
  AND: [ApprovalWhereInput!]
  OR: [ApprovalWhereInput!]
  NOT: [ApprovalWhereInput!]
}

input ApprovalWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createApplication(data: ApplicationCreateInput!): Application!
  updateApplication(data: ApplicationUpdateInput!, where: ApplicationWhereUniqueInput!): Application
  updateManyApplications(data: ApplicationUpdateManyMutationInput!, where: ApplicationWhereInput): BatchPayload!
  upsertApplication(where: ApplicationWhereUniqueInput!, create: ApplicationCreateInput!, update: ApplicationUpdateInput!): Application!
  deleteApplication(where: ApplicationWhereUniqueInput!): Application
  deleteManyApplications(where: ApplicationWhereInput): BatchPayload!
  createApproval(data: ApprovalCreateInput!): Approval!
  updateApproval(data: ApprovalUpdateInput!, where: ApprovalWhereUniqueInput!): Approval
  updateManyApprovals(data: ApprovalUpdateManyMutationInput!, where: ApprovalWhereInput): BatchPayload!
  upsertApproval(where: ApprovalWhereUniqueInput!, create: ApprovalCreateInput!, update: ApprovalUpdateInput!): Approval!
  deleteApproval(where: ApprovalWhereUniqueInput!): Approval
  deleteManyApprovals(where: ApprovalWhereInput): BatchPayload!
  createRequest(data: RequestCreateInput!): Request!
  updateRequest(data: RequestUpdateInput!, where: RequestWhereUniqueInput!): Request
  updateManyRequests(data: RequestUpdateManyMutationInput!, where: RequestWhereInput): BatchPayload!
  upsertRequest(where: RequestWhereUniqueInput!, create: RequestCreateInput!, update: RequestUpdateInput!): Request!
  deleteRequest(where: RequestWhereUniqueInput!): Request
  deleteManyRequests(where: RequestWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  application(where: ApplicationWhereUniqueInput!): Application
  applications(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Application]!
  applicationsConnection(where: ApplicationWhereInput, orderBy: ApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ApplicationConnection!
  approval(where: ApprovalWhereUniqueInput!): Approval
  approvals(where: ApprovalWhereInput, orderBy: ApprovalOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Approval]!
  approvalsConnection(where: ApprovalWhereInput, orderBy: ApprovalOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ApprovalConnection!
  request(where: RequestWhereUniqueInput!): Request
  requests(where: RequestWhereInput, orderBy: RequestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Request]!
  requestsConnection(where: RequestWhereInput, orderBy: RequestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RequestConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Request {
  id: ID!
  application: Application!
  name: String!
  description: String!
  date: DateTime!
}

type RequestConnection {
  pageInfo: PageInfo!
  edges: [RequestEdge]!
  aggregate: AggregateRequest!
}

input RequestCreateInput {
  application: ApplicationCreateOneInput!
  name: String!
  description: String!
  date: DateTime!
}

input RequestCreateOneInput {
  create: RequestCreateInput
  connect: RequestWhereUniqueInput
}

type RequestEdge {
  node: Request!
  cursor: String!
}

enum RequestOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  date_ASC
  date_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RequestPreviousValues {
  id: ID!
  name: String!
  description: String!
  date: DateTime!
}

type RequestSubscriptionPayload {
  mutation: MutationType!
  node: Request
  updatedFields: [String!]
  previousValues: RequestPreviousValues
}

input RequestSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RequestWhereInput
  AND: [RequestSubscriptionWhereInput!]
  OR: [RequestSubscriptionWhereInput!]
  NOT: [RequestSubscriptionWhereInput!]
}

input RequestUpdateDataInput {
  application: ApplicationUpdateOneRequiredInput
  name: String
  description: String
  date: DateTime
}

input RequestUpdateInput {
  application: ApplicationUpdateOneRequiredInput
  name: String
  description: String
  date: DateTime
}

input RequestUpdateManyMutationInput {
  name: String
  description: String
  date: DateTime
}

input RequestUpdateOneRequiredInput {
  create: RequestCreateInput
  update: RequestUpdateDataInput
  upsert: RequestUpsertNestedInput
  connect: RequestWhereUniqueInput
}

input RequestUpsertNestedInput {
  update: RequestUpdateDataInput!
  create: RequestCreateInput!
}

input RequestWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  application: ApplicationWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  AND: [RequestWhereInput!]
  OR: [RequestWhereInput!]
  NOT: [RequestWhereInput!]
}

input RequestWhereUniqueInput {
  id: ID
}

type Subscription {
  application(where: ApplicationSubscriptionWhereInput): ApplicationSubscriptionPayload
  approval(where: ApprovalSubscriptionWhereInput): ApprovalSubscriptionPayload
  request(where: RequestSubscriptionWhereInput): RequestSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
}

input UserUpdateInput {
  name: String
}

input UserUpdateManyMutationInput {
  name: String
}

input UserUpdateOneInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    