import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store/auth';
import { AuthLayout } from '../layout/AuthLayout';

import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';

const formData = {

  email: '',
  password: '',
  displayName: '',
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe tener un @'],
  password: [ (value) => value.length >= 6, 'El password debe tener mas de seis caracteres'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {
  
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage  } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status] );

  const { 
    formState, displayName, email, password, onInputChange, 
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);
    
    if (!isFormValid) return;

    dispatch( startCreatingUserWithEmailPassword(formState) )
    
  };

  return (
    
    <AuthLayout title='Crear Cuenta'>
      <form onSubmit={ onSubmit } className="animate__animated animate__fadeIn animate__faster">     
        <Grid container >
          <Grid item xs={ 12 } sx={{mt:2}}>
            <TextField
              name="displayName"
              value={ displayName }
              onChange= { onInputChange } 
              label="Nombre Completo"
              type="text"
              placeholder="John Doe"
              fullWidth
              error={ !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
            />
          </Grid>
          
          <Grid  item xs={ 12 } sx={{mt:2}}>
            <TextField
               name="email"
               value={ email }
               onChange= { onInputChange } 
              label="Correo"
              type="mail@google.com"
              placeholder="password"
              fullWidth
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid }
            />
          </Grid>

          <Grid  item xs={ 12 } sx={{mt:2}}>
            <TextField
              name="password"
              value={ password }
              onChange= { onInputChange }  
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
              error={ !!passwordValid && formSubmitted }
              helperText={ passwordValid }
            />
          </Grid>

          <Grid container spacing={ 2 } sx={{mb:2, mt:1}}>
            <Grid 
              item 
              xs={12} 
              display={ !!errorMessage ? '' : 'none' }
            >
              <Alert severity='error'>
                { errorMessage }
              </Alert>
            </Grid>            
            
            <Grid item xs={12} sm={6}>
              <Button
                disabled={ isCheckingAuthentication }
                type='submit'
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
