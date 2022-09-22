import { AuthConext } from '../context';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'


export const LoginPage = () => {

  const { state, login } = useContext( AuthConext );
  const navigate = useNavigate();

  const onLogin = () => {

    login( 'Peteco Petaca' )

    navigate('/', {
      replace: true,
    });
  }

  return (
  
    <div className="container mt-5">
      <h1>LogIn</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={ onLogin }
      >
        LogIn
      </button>
    </div>
    
  )
}
