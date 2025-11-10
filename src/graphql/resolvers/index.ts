import todoResolver from "./todoResolver.js";


export const resolvers = {
    Query: {
        ...todoResolver.Query
    },
    Mutation: {
        ...todoResolver.Mutation
    }
}