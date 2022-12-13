import { TurnedInNot } from "@mui/icons-material"
import { Grid, Drawer, Box, Toolbar, Typography, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"


export const Sidebar = ({ drawerWidth = 240}) => {
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm:0 } }}
    >
      <Drawer
        variant='permanent'
        open
        sx={{ display: { xs: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Nombre Apellido
          </Typography>
        </Toolbar>

        <Divider />

        {
          ['Enero', 'Febrero', 'Marzo', 'Abril'].map( text => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary='text'/>
                  <ListItemText primary='asdasdas a asd asdasd asd asd asd asd'/>
                </Grid>
              </ListItemButton>
            </ListItem>
          ) )
        }
      </Drawer>
    </Box>
  )
}
