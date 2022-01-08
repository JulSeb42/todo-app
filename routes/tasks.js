// Packages
const router = require("express").Router()

const Task = require("../models/Task.model")
const User = require("../models/User.model")

// All tasks
router.get("/task", (req, res, next) => {
    Task.find()
        .then(taskFromDb => {
            res.status(200).json(taskFromDb)
        })
        .catch(err => next(err))
})

// New task
router.put("/new-task", (req, res, next) => {
    const { title, date, time, description, tags, status, user } = req.body

    if (!title) {
        return res.status(400).json({ message: "The title can not be empty!" })
    }

    Task.create({ title, date, time, description, tags, status, user })
        .then(createdTask => {
            User.findOneAndUpdate(
                { _id: user },
                { $push: { tasks: createdTask } }
            ).then(updatedUser => {
                res.status(200).json({ user: updatedUser, createdTask })
            })
        })
        .catch(err => next(err))
})

// Edit status
router.put("/task/:id/change-status", (req, res, next) => {
    const { status } = req.body

    Task.findByIdAndUpdate(req.params.id, { status }, { new: true })
        .then(updatedTask => res.status(200).json({ updatedTask }))
        .catch(err => next(err))
})

// Edit task
router.put("/task/:id/edit", (req, res, next) => {
    const { title, date, time, description, tags } = req.body

    Task.findByIdAndUpdate(
        req.params.id,
        {
            title,
            date,
            time,
            description,
            tags,
        },
        { new: true }
    )
        .then(updatedTask => res.status(200).json({ updatedTask }))
        .catch(err => next(err))
})

// Delete task
router.delete("/task/:id/delete", (req, res, next) => {
    Task.findByIdAndRemove(req.params.id)
        .then(() => res.status(200).json({ message: "Task deleted" }))
        .catch(err => next(err))
})

module.exports = router
