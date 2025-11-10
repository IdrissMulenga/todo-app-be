import mongoose from "mongoose";

const { Schema, model } = mongoose

const providerSchema = new Schema({
    provider: {
        type: String,
        required: true,
        enum: ["google","github"]
    },
    sub: {
        type: String,
        required: true
    }
})

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    providers: {
        type: [providerSchema],
        default: []
    },
}, { timestamps: true });

userSchema.index({ "providers.provider": 1, "providers.sub": 1 }, { unique: true })

const User = model("User", userSchema)

export default User