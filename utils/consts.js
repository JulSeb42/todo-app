const MONGO_URI =
    process.env.MONGODB_URI || "mongodb://localhost/todo-app"

module.exports = MONGO_URI
