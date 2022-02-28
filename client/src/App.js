import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Add from "./component/Add"
import Header from "./component/Header"
import Homepage from "./component/Homepage"
import Update from "./component/Updatelist"

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/add' element={<Add />} />
          <Route path='/update/:todoId' element={<Update />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
