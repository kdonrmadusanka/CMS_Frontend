import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <AppBar
      position="fixed"
      component={motion.div}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5 }}
    >
        <Toolbar>
            <IconButton edge='start' color='inherit' aria-label='menu' sx={{ mr:2 }}>
                <MenuIcon />
            </IconButton>
            <Typography variant='h6' sx={{ flexGrow: 1 }}>
              Smart Campus System
            </Typography>
            <Button color='inherit' onClick={ () => navigate('/') }>
              Home
            </Button>
            <Button color='inherit' onClick={ () => navigate('/students') }>
              Students
            </Button>
            <Button color='inherit' onClick={ () => navigate('/courses') }>
              Courses
            </Button>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar