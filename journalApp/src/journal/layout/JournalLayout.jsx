import { Box, Toolbar } from '@mui/material'
import { Navbar, Sidebar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }} className="animate__animated animate__fadeIn animate__faster">
      {/* Navbar drawerWidth*/}
      <Navbar drawerWidth={ drawerWidth }/>
      {/* sidebar */}
      <Sidebar drawerWidth={ drawerWidth } />

      <Box
        component='main'
        sx={{ flexGrow: 1, p:3 }}
      >
        {/* toolbar */}
        <Toolbar />

        { children }
        
      </Box>
    </Box>
  )
}
