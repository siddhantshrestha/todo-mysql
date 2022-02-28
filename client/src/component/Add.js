import React from "react"
import { Box, Paper, TextField, Grid, Button, Typography } from "@mui/material"
import { useForm } from "react-hook-form"
import {useNavigate} from 'react-router-dom'
import axios from 'axios';


const Add = () => {
  const navigate= useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({})

  const onSubmit = ((data) => {
    axios.post('http://localhost:5000/todos/createTodo',{
        title:data.title,
        description:data.description,
       
    }).then((res)=>{
        console.log(res);
    }).catch((err)=>{
            console.log(err)

        });
        navigate('/')

  })  
      
  

  return (
    <Box
      sx={{
        margin: "auto",
        marginTop: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
      <Paper
        elevation={2}
        sx={{
          width: "500px",
          height: "280px",
          margin:'auto',
          padding: 3,
          display: "flex",
          justifyContent: "center",
        }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography align='center' variant='h5' gutterBottom>
            Add Note
          </Typography>

          <Grid container spacing={3} mb={2}>
            <Grid item xs={12}>
              <TextField
                label='title'
                name='title'
                {...register("title", { required: true })}
                fullWidth
              />
              {errors.title?.type === "required" && "title is required"}
            </Grid>
            <Grid item xs={12}>
              <TextField
                type='Description'
                name='Description'
                label='Description'
                {...register("description", { required: true })}
                fullWidth
              />
            </Grid>

            <Grid item sx={{ margin: "auto" }}>
              <Button variant='contained' sx={{ width: "300px" }} type='submit'>
                {" "}
                Add{" "}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  )
}

export default Add
