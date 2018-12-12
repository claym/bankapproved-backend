"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
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
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/clay-mitchell/bankapproved/dev`
});
exports.prisma = new exports.Prisma();
var models = [
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
