import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';

import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useMemo } from 'react';

export const LoginPage = () => {
  
  const { status, errorMessage } = useSelector( state => state.auth );
  const isAuthenticating = useMemo( () => status === 'checking', [status] ); // [status] -> dependencia, solo se actualiza el valor booleano cuando status cambia
  
  const dispatch = useDispatch();

  const { formState, email, password, onInputChange } = useForm({
    email: 'mail@mail.com',
    password: 'coso1234'
  })

  const onSubmit = (event) => {
    event.preventDefault();

    // console.log({email, password}); /
    dispatch( checkingAuthentication(email, password));

  }

  const onGoogleSignIn = () => {
    // console.log('onGoogleSignIn');

    dispatch( startGoogleSignIn() )

  }

  const onSignIn = () => {

    dispatch( startLoginWithEmailPassword(formState) );

  }

  return (
    
    <AuthLayout title='Login'>
      <form onSubmit={ onSubmit } className="animate__animated animate__fadeIn animate__faster">     
        <Grid container >
          <Grid item xs={ 12 } sx={{mt:2}}>
            <TextField 
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
            />
          </Grid>
          <Grid  item xs={ 12 } sx={{mt:2}}>
            <TextField 
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid container spacing={ 2 } sx={{mb:2, mt:1}}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled = { isAuthenticating }
                type="submit" 
                variant='contained' 
                fullWidth
                onClick={ onSignIn }
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled = { isAuthenticating } 
                variant='contained' 
                fullWidth
                onClick={ onGoogleSignIn }
              >
                <Google /> <Typography sx={{ml:1}}> Google </Typography> 
              </Button>
            </Grid>
          </Grid>

          <Grid 
            item 
            xs={12}
            display={ !!errorMessage ? '' : 'none' }
          >
            <Alert severity='error'>
              { errorMessage }
            </Alert>
          </Grid>
          <Grid container
            direction="row"
            justifyContent="end"
          >
            {/* <Link> Link de material */}
            <Link component={ RouterLink } color='inherit' to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
