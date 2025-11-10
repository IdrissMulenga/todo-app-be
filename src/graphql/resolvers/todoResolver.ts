import { GraphQLError } from "graphql"
import Todo from "../../model/todoModel.js"

export default {
    Query: {
        getTodos: async () => {
            const todos = await Todo.find()
            return todos
        },
        getTodo: async (_: unknown, { id }: { id: string }) => {
            const todo = await Todo.findById(id)
            return todo
        }
    },
    Mutation: {
        createTodo: async (_: unknown, { input }: { input: { text: string, tag: string } }) => {
            const { text, tag } = input
            
            const checkTodo = await Todo.findOne({ text })
            
            if (checkTodo) throw new GraphQLError("Todo already exists");

            const newTodo = new Todo({ text, tag });

            await newTodo.save();

            return newTodo;
        },
        updateTodo: async (_: unknown, { id, input }: { id: string, input: { text: string, tag: string } }) => {

            const updateTodo = await Todo.findByIdAndUpdate(id, { ...input }, { new: true })
            
            return updateTodo;
        },
        deleteTodo: async (_: unknown, { id }: { id: string }) => {

            await Todo.findByIdAndDelete(id);

            return true;
        }
    }
}