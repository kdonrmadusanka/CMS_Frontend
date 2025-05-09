import { Box, CssBaseline } from "@mui/material"
import NavBar from "./components/NavBar"
import Sidebar from "./components/Sidebar"
import { useState } from "react"
import SignIn from "../mui/loginPage/SignIn"
import { Route, Routes } from "react-router-dom"

function Common() {

  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar toggleSidebar={ () => setOpen(!open) } />
      <Sidebar open={ open } setOpen={ setOpen }/>
    </ Box>
  )
}

function SignInPage() {
  return (
    <Box>
      <SignIn />
    </Box>
  )
}

function App() {
  return(
    <Routes>
      <Route path="/signin" element={ <SignInPage /> } />
  </Routes>
  )
}



export default App
