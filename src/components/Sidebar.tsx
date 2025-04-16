import { Book, Home, School } from "@mui/icons-material";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

interface MenuItem {
    text: string;
    icon: React.ReactNode;
    path: string;
}

const Sidebar: React.FC = () => {
    const navigate = useNavigate();

    const menuItem: MenuItem[] = [
        { text: 'Home', icon: <Home />, path: '/' },
        { text: 'Students', icon: <School />, path: '/students' },
        { text: 'Courses', icon: <Book />, path: '/courses' },
    ];

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { 
                    width: drawerWidth, 
                    boxSizing: 'border-box',
                },
            }}
        >
            <motion.div
                initial={{ x: -drawerWidth }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <List>
                    { menuItem.map((item) => (
                        <ListItemButton key={item.text} onClick={() => navigate(item.path)} component={motion.div} whileHover={{ scale: 1.05 }}>
                            <ListItemIcon sx={{'&.Mui-selected': { backgroundColor: '#e3f2fd',color: '#1976d2', },'&:hover': { backgroundColor: '#f5f5f5', },borderRadius: 1,marginBottom: 0.5,}}>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    )) }
                </List>
            </motion.div>
        </Drawer>
    )
}

export default Sidebar;