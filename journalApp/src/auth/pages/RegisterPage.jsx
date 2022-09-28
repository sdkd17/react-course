import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    
    <AuthLayout title='Crear Cuenta'>
      <form>     
        <Grid container >
          <Grid item xs={ 12 } sx={{mt:2}}>
            <TextField 
              label="Nombre Completo"
              type="text"
              placeholder="John Doe"
              fullWidth
            />
          </Grid>
          
          <Grid  item xs={ 12 } sx={{mt:2}}>
            <TextField 
              label="Correo"
              type="mail@google.com"
              placeholder="password"
              fullWidth
            />
          </Grid>

          <Grid  item xs={ 12 } sx={{mt:2}}>
            <TextField 
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
            />
          </Grid>

          <Grid container spacing={ 2 } sx={{mb:2, mt:1}}>
            <Grid item xs={12} sm={6}>
              <Button 
                variant='contained' 
                fullWidth
              >
                Crear Cuenta
              </Button>
            </Grid>            
          </Grid>

          <Grid container
            direction="row"
            justifyContent="end"
          >
            <Typography sx={{mr:1}}>Ya tiene cuenta?</Typography>
            {/* <Link> Link de material */}
            <Link component={ RouterLink } color='inherit' to="/auth/register">
              Ingresar
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
