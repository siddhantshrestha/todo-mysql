const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

app.use(express.json())

const db = require("./config/db")

// //Route

const postRoute = require("./route/Todos")
app.use("/todos", postRoute)
const todoRoute = require("./route/Todos")
app.use("/todos", todoRoute)
const updateNews = require("./route/Todos")
app.use("/updateTodo", updateNews)

// //connecting db
db.connect(err => {
  if (err) throw err

  // console.log("db connected")
})

// //Creating tale
app.get("/createtable", (req, res) => {
  const todo_tbl =
    "CREATE TABLE todos(id int AUTO_INCREMENT PRIMARY KEY, title varchar(5000),description varchar(10000))"

  db.query(todo_tbl, (err, result) => {
    if (err) throw err
    console.log(result)
  })
})

//delete todo
app.get("/deleteTodos/:id", (req, res) => {
  let dlt_todos = `DELETE FROM todos WHERE id ='${req.params.id}'`
  db.query(dlt_todos, (err, result) => {
    if (err) throw err
    res.send(result)
  })
})

app.listen(5000, (req, res) => {
  console.log("Server is running")
})
