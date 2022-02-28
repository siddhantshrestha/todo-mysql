import React, { useState } from "react"
import { Box, Paper, Grid, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"

import axios from "axios"

const Todolist = props => {
  console.log(props)
  const deleteTodo = () => {
    axios
      .get(`http://localhost:5000/deleteTodos/${props.id}`)
      .then(res => {
        axios.get("http://localhost:5000/todos/all").then(res => {
          props.setTodoList(res.data)
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Box
      sx={{
        margin: "auto",
        marginTop: 4,
        display: "flex",
        justifyContent: "center",
      }}>
      <Paper
        margin='auto'
        sx={{ padding: 3, width: "500px", height: "auto" }}
        key={props.ky}>
        <Grid container>
          <Grid item xs={12} sm={10}>
            <Typography variant='h6'>{props.title}</Typography>
            <Typography variant='body1'>{props.description}</Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Link
              to={`/update/${props.id}`}
              state={{
                id: props.id,
                title: props.title,
                description: props.description,
              }}>
              <Button
                variant='contained'
                sx={{ marginBottom: "3px", width: "82px" }}
                // onClick={() => {
                //   navigate(`/update/${props.id}`)
                // }}
              >
                Edit
              </Button>
            </Link>
            <Button
              variant='contained'
              sx={{ backgroundColor: "red" }}
              onClick={deleteTodo}>
              Delete
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default Todolist
