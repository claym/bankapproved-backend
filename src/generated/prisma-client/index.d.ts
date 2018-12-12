// Code generated by Prisma (prisma@1.22.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  application: (where?: ApplicationWhereInput) => Promise<boolean>;
  approval: (where?: ApprovalWhereInput) => Promise<boolean>;
  request: (where?: RequestWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  application: (where: ApplicationWhereUniqueInput) => ApplicationPromise;
  applications: (
    args?: {
      where?: ApplicationWhereInput;
      orderBy?: ApplicationOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Application>;
  applicationsConnection: (
    args?: {
      where?: ApplicationWhereInput;
      orderBy?: ApplicationOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ApplicationConnectionPromise;
  approval: (where: ApprovalWhereUniqueInput) => ApprovalPromise;
  approvals: (
    args?: {
      where?: ApprovalWhereInput;
      orderBy?: ApprovalOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Approval>;
  approvalsConnection: (
    args?: {
      where?: ApprovalWhereInput;
      orderBy?: ApprovalOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ApprovalConnectionPromise;
  request: (where: RequestWhereUniqueInput) => RequestPromise;
  requests: (
    args?: {
      where?: RequestWhereInput;
      orderBy?: RequestOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Request>;
  requestsConnection: (
    args?: {
      where?: RequestWhereInput;
      orderBy?: RequestOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => RequestConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createApplication: (data: ApplicationCreateInput) => ApplicationPromise;
  updateApplication: (
    args: { data: ApplicationUpdateInput; where: ApplicationWhereUniqueInput }
  ) => ApplicationPromise;
  updateManyApplications: (
    args: {
      data: ApplicationUpdateManyMutationInput;
      where?: ApplicationWhereInput;
    }
  ) => BatchPayloadPromise;
  upsertApplication: (
    args: {
      where: ApplicationWhereUniqueInput;
      create: ApplicationCreateInput;
      update: ApplicationUpdateInput;
    }
  ) => ApplicationPromise;
  deleteApplication: (where: ApplicationWhereUniqueInput) => ApplicationPromise;
  deleteManyApplications: (
    where?: ApplicationWhereInput
  ) => BatchPayloadPromise;
  createApproval: (data: ApprovalCreateInput) => ApprovalPromise;
  updateApproval: (
    args: { data: ApprovalUpdateInput; where: ApprovalWhereUniqueInput }
  ) => ApprovalPromise;
  updateManyApprovals: (
    args: { data: ApprovalUpdateManyMutationInput; where?: ApprovalWhereInput }
  ) => BatchPayloadPromise;
  upsertApproval: (
    args: {
      where: ApprovalWhereUniqueInput;
      create: ApprovalCreateInput;
      update: ApprovalUpdateInput;
    }
  ) => ApprovalPromise;
  deleteApproval: (where: ApprovalWhereUniqueInput) => ApprovalPromise;
  deleteManyApprovals: (where?: ApprovalWhereInput) => BatchPayloadPromise;
  createRequest: (data: RequestCreateInput) => RequestPromise;
  updateRequest: (
    args: { data: RequestUpdateInput; where: RequestWhereUniqueInput }
  ) => RequestPromise;
  updateManyRequests: (
    args: { data: RequestUpdateManyMutationInput; where?: RequestWhereInput }
  ) => BatchPayloadPromise;
  upsertRequest: (
    args: {
      where: RequestWhereUniqueInput;
      create: RequestCreateInput;
      update: RequestUpdateInput;
    }
  ) => RequestPromise;
  deleteRequest: (where: RequestWhereUniqueInput) => RequestPromise;
  deleteManyRequests: (where?: RequestWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  application: (
    where?: ApplicationSubscriptionWhereInput
  ) => ApplicationSubscriptionPayloadSubscription;
  approval: (
    where?: ApprovalSubscriptionWhereInput
  ) => ApprovalSubscriptionPayloadSubscription;
  request: (
    where?: RequestSubscriptionWhereInput
  ) => RequestSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ApplicationOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "ait_ASC"
  | "ait_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type ApprovalOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "approved_ASC"
  | "approved_DESC"
  | "notes_ASC"
  | "notes_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type RequestOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "description_ASC"
  | "description_DESC"
  | "date_ASC"
  | "date_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export type ApplicationWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface ApplicationUpdateWithoutDownstreamDataInput {
  ait?: Int;
  name?: String;
  owner?: UserUpdateOneInput;
  upstream?: ApplicationUpdateManyWithoutDownstreamInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface ApprovalCreateInput {
  request: RequestCreateOneInput;
  user: UserCreateOneInput;
  approved?: Boolean;
  notes?: String;
}

export interface ApplicationUpsertWithWhereUniqueWithoutDownstreamInput {
  where: ApplicationWhereUniqueInput;
  update: ApplicationUpdateWithoutDownstreamDataInput;
  create: ApplicationCreateWithoutDownstreamInput;
}

export interface ApplicationCreateInput {
  ait: Int;
  name: String;
  owner?: UserCreateOneInput;
  upstream?: ApplicationCreateManyWithoutDownstreamInput;
  downstream?: ApplicationCreateManyWithoutUpstreamInput;
}

export interface RequestSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: RequestWhereInput;
  AND?: RequestSubscriptionWhereInput[] | RequestSubscriptionWhereInput;
  OR?: RequestSubscriptionWhereInput[] | RequestSubscriptionWhereInput;
  NOT?: RequestSubscriptionWhereInput[] | RequestSubscriptionWhereInput;
}

export interface UserCreateOneInput {
  create?: UserCreateInput;
  connect?: UserWhereUniqueInput;
}

export type ApprovalWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserCreateInput {
  name: String;
}

export interface UserUpdateManyMutationInput {
  name?: String;
}

export interface ApplicationCreateManyWithoutDownstreamInput {
  create?:
    | ApplicationCreateWithoutDownstreamInput[]
    | ApplicationCreateWithoutDownstreamInput;
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput;
}

export interface ApprovalWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  request?: RequestWhereInput;
  user?: UserWhereInput;
  approved?: Boolean;
  approved_not?: Boolean;
  notes?: String;
  notes_not?: String;
  notes_in?: String[] | String;
  notes_not_in?: String[] | String;
  notes_lt?: String;
  notes_lte?: String;
  notes_gt?: String;
  notes_gte?: String;
  notes_contains?: String;
  notes_not_contains?: String;
  notes_starts_with?: String;
  notes_not_starts_with?: String;
  notes_ends_with?: String;
  notes_not_ends_with?: String;
  AND?: ApprovalWhereInput[] | ApprovalWhereInput;
  OR?: ApprovalWhereInput[] | ApprovalWhereInput;
  NOT?: ApprovalWhereInput[] | ApprovalWhereInput;
}

export interface ApplicationCreateWithoutDownstreamInput {
  ait: Int;
  name: String;
  owner?: UserCreateOneInput;
  upstream?: ApplicationCreateManyWithoutDownstreamInput;
}

export interface RequestUpdateManyMutationInput {
  name?: String;
  description?: String;
  date?: DateTimeInput;
}

export interface ApplicationCreateManyWithoutUpstreamInput {
  create?:
    | ApplicationCreateWithoutUpstreamInput[]
    | ApplicationCreateWithoutUpstreamInput;
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput;
}

export interface ApprovalUpdateManyMutationInput {
  approved?: Boolean;
  notes?: String;
}

export interface ApplicationCreateWithoutUpstreamInput {
  ait: Int;
  name: String;
  owner?: UserCreateOneInput;
  downstream?: ApplicationCreateManyWithoutUpstreamInput;
}

export type RequestWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface ApplicationUpdateInput {
  ait?: Int;
  name?: String;
  owner?: UserUpdateOneInput;
  upstream?: ApplicationUpdateManyWithoutDownstreamInput;
  downstream?: ApplicationUpdateManyWithoutUpstreamInput;
}

export interface ApplicationUpsertNestedInput {
  update: ApplicationUpdateDataInput;
  create: ApplicationCreateInput;
}

export interface UserUpdateOneInput {
  create?: UserCreateInput;
  update?: UserUpdateDataInput;
  upsert?: UserUpsertNestedInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: UserWhereUniqueInput;
}

export interface ApplicationUpdateOneRequiredInput {
  create?: ApplicationCreateInput;
  update?: ApplicationUpdateDataInput;
  upsert?: ApplicationUpsertNestedInput;
  connect?: ApplicationWhereUniqueInput;
}

export interface UserUpdateDataInput {
  name?: String;
}

export interface RequestUpdateDataInput {
  application?: ApplicationUpdateOneRequiredInput;
  name?: String;
  description?: String;
  date?: DateTimeInput;
}

export interface RequestCreateInput {
  application: ApplicationCreateOneInput;
  name: String;
  description: String;
  date: DateTimeInput;
}

export interface ApprovalUpdateInput {
  request?: RequestUpdateOneRequiredInput;
  user?: UserUpdateOneRequiredInput;
  approved?: Boolean;
  notes?: String;
}

export interface ApplicationUpdateManyWithoutDownstreamInput {
  create?:
    | ApplicationCreateWithoutDownstreamInput[]
    | ApplicationCreateWithoutDownstreamInput;
  delete?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput;
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput;
  disconnect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput;
  update?:
    | ApplicationUpdateWithWhereUniqueWithoutDownstreamInput[]
    | ApplicationUpdateWithWhereUniqueWithoutDownstreamInput;
  upsert?:
    | ApplicationUpsertWithWhereUniqueWithoutDownstreamInput[]
    | ApplicationUpsertWithWhereUniqueWithoutDownstreamInput;
  deleteMany?: ApplicationScalarWhereInput[] | ApplicationScalarWhereInput;
  updateMany?:
    | ApplicationUpdateManyWithWhereNestedInput[]
    | ApplicationUpdateManyWithWhereNestedInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface ApplicationUpdateWithWhereUniqueWithoutDownstreamInput {
  where: ApplicationWhereUniqueInput;
  data: ApplicationUpdateWithoutDownstreamDataInput;
}

export interface ApplicationSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ApplicationWhereInput;
  AND?: ApplicationSubscriptionWhereInput[] | ApplicationSubscriptionWhereInput;
  OR?: ApplicationSubscriptionWhereInput[] | ApplicationSubscriptionWhereInput;
  NOT?: ApplicationSubscriptionWhereInput[] | ApplicationSubscriptionWhereInput;
}

export interface ApplicationWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  ait?: Int;
  ait_not?: Int;
  ait_in?: Int[] | Int;
  ait_not_in?: Int[] | Int;
  ait_lt?: Int;
  ait_lte?: Int;
  ait_gt?: Int;
  ait_gte?: Int;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  owner?: UserWhereInput;
  upstream_every?: ApplicationWhereInput;
  upstream_some?: ApplicationWhereInput;
  upstream_none?: ApplicationWhereInput;
  downstream_every?: ApplicationWhereInput;
  downstream_some?: ApplicationWhereInput;
  downstream_none?: ApplicationWhereInput;
  AND?: ApplicationWhereInput[] | ApplicationWhereInput;
  OR?: ApplicationWhereInput[] | ApplicationWhereInput;
  NOT?: ApplicationWhereInput[] | ApplicationWhereInput;
}

export interface RequestWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  application?: ApplicationWhereInput;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  date?: DateTimeInput;
  date_not?: DateTimeInput;
  date_in?: DateTimeInput[] | DateTimeInput;
  date_not_in?: DateTimeInput[] | DateTimeInput;
  date_lt?: DateTimeInput;
  date_lte?: DateTimeInput;
  date_gt?: DateTimeInput;
  date_gte?: DateTimeInput;
  AND?: RequestWhereInput[] | RequestWhereInput;
  OR?: RequestWhereInput[] | RequestWhereInput;
  NOT?: RequestWhereInput[] | RequestWhereInput;
}

export interface RequestCreateOneInput {
  create?: RequestCreateInput;
  connect?: RequestWhereUniqueInput;
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput;
  update?: UserUpdateDataInput;
  upsert?: UserUpsertNestedInput;
  connect?: UserWhereUniqueInput;
}

export interface ApplicationScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  ait?: Int;
  ait_not?: Int;
  ait_in?: Int[] | Int;
  ait_not_in?: Int[] | Int;
  ait_lt?: Int;
  ait_lte?: Int;
  ait_gt?: Int;
  ait_gte?: Int;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  AND?: ApplicationScalarWhereInput[] | ApplicationScalarWhereInput;
  OR?: ApplicationScalarWhereInput[] | ApplicationScalarWhereInput;
  NOT?: ApplicationScalarWhereInput[] | ApplicationScalarWhereInput;
}

export interface ApplicationUpdateDataInput {
  ait?: Int;
  name?: String;
  owner?: UserUpdateOneInput;
  upstream?: ApplicationUpdateManyWithoutDownstreamInput;
  downstream?: ApplicationUpdateManyWithoutUpstreamInput;
}

export interface ApplicationUpdateManyWithWhereNestedInput {
  where: ApplicationScalarWhereInput;
  data: ApplicationUpdateManyDataInput;
}

export interface RequestUpdateOneRequiredInput {
  create?: RequestCreateInput;
  update?: RequestUpdateDataInput;
  upsert?: RequestUpsertNestedInput;
  connect?: RequestWhereUniqueInput;
}

export interface ApplicationUpdateManyDataInput {
  ait?: Int;
  name?: String;
}

export interface ApprovalSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ApprovalWhereInput;
  AND?: ApprovalSubscriptionWhereInput[] | ApprovalSubscriptionWhereInput;
  OR?: ApprovalSubscriptionWhereInput[] | ApprovalSubscriptionWhereInput;
  NOT?: ApprovalSubscriptionWhereInput[] | ApprovalSubscriptionWhereInput;
}

export interface ApplicationUpdateManyWithoutUpstreamInput {
  create?:
    | ApplicationCreateWithoutUpstreamInput[]
    | ApplicationCreateWithoutUpstreamInput;
  delete?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput;
  connect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput;
  disconnect?: ApplicationWhereUniqueInput[] | ApplicationWhereUniqueInput;
  update?:
    | ApplicationUpdateWithWhereUniqueWithoutUpstreamInput[]
    | ApplicationUpdateWithWhereUniqueWithoutUpstreamInput;
  upsert?:
    | ApplicationUpsertWithWhereUniqueWithoutUpstreamInput[]
    | ApplicationUpsertWithWhereUniqueWithoutUpstreamInput;
  deleteMany?: ApplicationScalarWhereInput[] | ApplicationScalarWhereInput;
  updateMany?:
    | ApplicationUpdateManyWithWhereNestedInput[]
    | ApplicationUpdateManyWithWhereNestedInput;
}

export interface RequestUpdateInput {
  application?: ApplicationUpdateOneRequiredInput;
  name?: String;
  description?: String;
  date?: DateTimeInput;
}

export interface ApplicationUpdateManyMutationInput {
  ait?: Int;
  name?: String;
}

export interface ApplicationUpsertWithWhereUniqueWithoutUpstreamInput {
  where: ApplicationWhereUniqueInput;
  update: ApplicationUpdateWithoutUpstreamDataInput;
  create: ApplicationCreateWithoutUpstreamInput;
}

export interface ApplicationUpdateWithoutUpstreamDataInput {
  ait?: Int;
  name?: String;
  owner?: UserUpdateOneInput;
  downstream?: ApplicationUpdateManyWithoutUpstreamInput;
}

export interface ApplicationUpdateWithWhereUniqueWithoutUpstreamInput {
  where: ApplicationWhereUniqueInput;
  data: ApplicationUpdateWithoutUpstreamDataInput;
}

export interface RequestUpsertNestedInput {
  update: RequestUpdateDataInput;
  create: RequestCreateInput;
}

export interface UserUpdateInput {
  name?: String;
}

export interface ApplicationCreateOneInput {
  create?: ApplicationCreateInput;
  connect?: ApplicationWhereUniqueInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface User {
  id: ID_Output;
  name: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface ApplicationConnection {}

export interface ApplicationConnectionPromise
  extends Promise<ApplicationConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ApplicationEdge>>() => T;
  aggregate: <T = AggregateApplicationPromise>() => T;
}

export interface ApplicationConnectionSubscription
  extends Promise<AsyncIterator<ApplicationConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ApplicationEdgeSubscription>>>() => T;
  aggregate: <T = AggregateApplicationSubscription>() => T;
}

export interface ApprovalConnection {}

export interface ApprovalConnectionPromise
  extends Promise<ApprovalConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ApprovalEdge>>() => T;
  aggregate: <T = AggregateApprovalPromise>() => T;
}

export interface ApprovalConnectionSubscription
  extends Promise<AsyncIterator<ApprovalConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ApprovalEdgeSubscription>>>() => T;
  aggregate: <T = AggregateApprovalSubscription>() => T;
}

export interface ApplicationEdge {
  cursor: String;
}

export interface ApplicationEdgePromise
  extends Promise<ApplicationEdge>,
    Fragmentable {
  node: <T = ApplicationPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ApplicationEdgeSubscription
  extends Promise<AsyncIterator<ApplicationEdge>>,
    Fragmentable {
  node: <T = ApplicationSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface RequestSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface RequestSubscriptionPayloadPromise
  extends Promise<RequestSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = RequestPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = RequestPreviousValuesPromise>() => T;
}

export interface RequestSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<RequestSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = RequestSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = RequestPreviousValuesSubscription>() => T;
}

export interface UserEdge {
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Request {
  id: ID_Output;
  name: String;
  description: String;
  date: DateTimeOutput;
}

export interface RequestPromise extends Promise<Request>, Fragmentable {
  id: () => Promise<ID_Output>;
  application: <T = ApplicationPromise>() => T;
  name: () => Promise<String>;
  description: () => Promise<String>;
  date: () => Promise<DateTimeOutput>;
}

export interface RequestSubscription
  extends Promise<AsyncIterator<Request>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  application: <T = ApplicationSubscription>() => T;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  date: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface Approval {
  id: ID_Output;
  approved?: Boolean;
  notes?: String;
}

export interface ApprovalPromise extends Promise<Approval>, Fragmentable {
  id: () => Promise<ID_Output>;
  request: <T = RequestPromise>() => T;
  user: <T = UserPromise>() => T;
  approved: () => Promise<Boolean>;
  notes: () => Promise<String>;
}

export interface ApprovalSubscription
  extends Promise<AsyncIterator<Approval>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  request: <T = RequestSubscription>() => T;
  user: <T = UserSubscription>() => T;
  approved: () => Promise<AsyncIterator<Boolean>>;
  notes: () => Promise<AsyncIterator<String>>;
}

export interface RequestEdge {
  cursor: String;
}

export interface RequestEdgePromise extends Promise<RequestEdge>, Fragmentable {
  node: <T = RequestPromise>() => T;
  cursor: () => Promise<String>;
}

export interface RequestEdgeSubscription
  extends Promise<AsyncIterator<RequestEdge>>,
    Fragmentable {
  node: <T = RequestSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Application {
  id: ID_Output;
  ait: Int;
  name: String;
}

export interface ApplicationPromise extends Promise<Application>, Fragmentable {
  id: () => Promise<ID_Output>;
  ait: () => Promise<Int>;
  name: () => Promise<String>;
  owner: <T = UserPromise>() => T;
  upstream: <T = FragmentableArray<Application>>(
    args?: {
      where?: ApplicationWhereInput;
      orderBy?: ApplicationOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  downstream: <T = FragmentableArray<Application>>(
    args?: {
      where?: ApplicationWhereInput;
      orderBy?: ApplicationOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface ApplicationSubscription
  extends Promise<AsyncIterator<Application>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  ait: () => Promise<AsyncIterator<Int>>;
  name: () => Promise<AsyncIterator<String>>;
  owner: <T = UserSubscription>() => T;
  upstream: <T = Promise<AsyncIterator<ApplicationSubscription>>>(
    args?: {
      where?: ApplicationWhereInput;
      orderBy?: ApplicationOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  downstream: <T = Promise<AsyncIterator<ApplicationSubscription>>>(
    args?: {
      where?: ApplicationWhereInput;
      orderBy?: ApplicationOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface RequestPreviousValues {
  id: ID_Output;
  name: String;
  description: String;
  date: DateTimeOutput;
}

export interface RequestPreviousValuesPromise
  extends Promise<RequestPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  date: () => Promise<DateTimeOutput>;
}

export interface RequestPreviousValuesSubscription
  extends Promise<AsyncIterator<RequestPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  date: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface ApplicationSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface ApplicationSubscriptionPayloadPromise
  extends Promise<ApplicationSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ApplicationPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ApplicationPreviousValuesPromise>() => T;
}

export interface ApplicationSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ApplicationSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ApplicationSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ApplicationPreviousValuesSubscription>() => T;
}

export interface ApprovalEdge {
  cursor: String;
}

export interface ApprovalEdgePromise
  extends Promise<ApprovalEdge>,
    Fragmentable {
  node: <T = ApprovalPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ApprovalEdgeSubscription
  extends Promise<AsyncIterator<ApprovalEdge>>,
    Fragmentable {
  node: <T = ApprovalSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserConnection {}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface ApprovalPreviousValues {
  id: ID_Output;
  approved?: Boolean;
  notes?: String;
}

export interface ApprovalPreviousValuesPromise
  extends Promise<ApprovalPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  approved: () => Promise<Boolean>;
  notes: () => Promise<String>;
}

export interface ApprovalPreviousValuesSubscription
  extends Promise<AsyncIterator<ApprovalPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  approved: () => Promise<AsyncIterator<Boolean>>;
  notes: () => Promise<AsyncIterator<String>>;
}

export interface ApprovalSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface ApprovalSubscriptionPayloadPromise
  extends Promise<ApprovalSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ApprovalPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ApprovalPreviousValuesPromise>() => T;
}

export interface ApprovalSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ApprovalSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ApprovalSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ApprovalPreviousValuesSubscription>() => T;
}

export interface AggregateApplication {
  count: Int;
}

export interface AggregateApplicationPromise
  extends Promise<AggregateApplication>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateApplicationSubscription
  extends Promise<AsyncIterator<AggregateApplication>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ApplicationPreviousValues {
  id: ID_Output;
  ait: Int;
  name: String;
}

export interface ApplicationPreviousValuesPromise
  extends Promise<ApplicationPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  ait: () => Promise<Int>;
  name: () => Promise<String>;
}

export interface ApplicationPreviousValuesSubscription
  extends Promise<AsyncIterator<ApplicationPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  ait: () => Promise<AsyncIterator<Int>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface AggregateRequest {
  count: Int;
}

export interface AggregateRequestPromise
  extends Promise<AggregateRequest>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateRequestSubscription
  extends Promise<AsyncIterator<AggregateRequest>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AggregateApproval {
  count: Int;
}

export interface AggregateApprovalPromise
  extends Promise<AggregateApproval>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateApprovalSubscription
  extends Promise<AsyncIterator<AggregateApproval>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface RequestConnection {}

export interface RequestConnectionPromise
  extends Promise<RequestConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<RequestEdge>>() => T;
  aggregate: <T = AggregateRequestPromise>() => T;
}

export interface RequestConnectionSubscription
  extends Promise<AsyncIterator<RequestConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<RequestEdgeSubscription>>>() => T;
  aggregate: <T = AggregateRequestSubscription>() => T;
}

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

export type Long = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/**
 * Model Metadata
 */

export const models = [
  {
    name: "Application",
    embedded: false
  },
  {
    name: "Approval",
    embedded: false
  },
  {
    name: "Request",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
