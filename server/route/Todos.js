const express = require("express")
const router = express.Router()

const db = require("../config/db")

router.post("/createTodo", (req, res) => {
  const title = req.body.title
  const description = req.body.description

  db.query(
    "INSERT INTO todos (title,description) VALUES (?,?)",
    [title, description],
    (err, result) => {
      if (err) {
        console.log(err)
      }
      console.log(result)
    }
  )
})

router.get("/all", (req, res) => {
  db.query("SELECT * FROM todos", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  })
})

router.post("/:todoId", (req, res) => {
  const title = req.body.title
  const description = req.body.description

  let updateTodos = {
    title,
    description,
  }
  let update_todos = `UPDATE todos SET ? WHERE id= '${req.params.todoId}'`

  db.query(update_todos, updateTodos, (err, result) => {
    if (err) throw err
    res.send(result)
  })
})

module.exports = router
