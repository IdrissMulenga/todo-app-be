export const todoSchema = `
    type Todo {
        id: ID!
        text: String!
        tag: String!
        completed: Boolean!
        dueDate: Date!
        reminder: Date!
        createdAt: Date!
        updatedAt: Date!
    }
    type Query {
        getTodos: [Todo!]!
        getTodo(id: ID!): Todo
    }
    type Mutation {
        createTodo(input: TodoInput!): Todo!
        updateTodo(id: ID!, input: TodoInput!): Todo!
        deleteTodo(id: ID!): Boolean!
    }

    input TodoInput {
        text: String!
        tag: String!
    }
`