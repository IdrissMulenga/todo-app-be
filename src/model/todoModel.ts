import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const Schema = mongoose.Schema

// Define the schema for the Todo model

const todoSchema = new Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    text: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true,
        enum: ['personal', 'work', 'study', 'others']
    },
    completed: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: Date,
        required: false
    },
    reminder: {
        type: Date,
        required: false
    }

}, { timestamps: true });

todoSchema.index({ user: 1, dueDate: 1, completed: 1 })

// Create the Todo model from the schema
const Todo = mongoose.model("Todo", todoSchema);

export default Todo;