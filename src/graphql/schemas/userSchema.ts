export const userType = `

    type User {
        id: ID!
        name: String!
        email: String!
        providers: String!
    }

    type AuthPayload {
        user: User!
        token: String!
    }
    type Query {
        me: User!
    }

    type Mutation {
        loginUser(id: String!): AuthPayload!
    }

`