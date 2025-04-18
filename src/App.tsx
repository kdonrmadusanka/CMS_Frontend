import { Box, CssBaseline } from "@mui/material"
import NavBar from "./components/NavBar"
import Sidebar from "./components/Sidebar"
import { useState } from "react"

function App() {

  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar toggleSidebar={ () => setOpen(!open) } />
      <Sidebar open={ open } setOpen={ setOpen }/>
    </ Box>
  )
}

export default App
