const { Schema, model } = require("mongoose")

const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        date: String,
        time: String,
        description: String,
        tags: Array,
        status: {
            type: String,
            enum: ["todo", "doing", "done"],
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
)

const Task = model("Task", taskSchema)

module.exports = Task
