import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthConext } from '../auth/context';

export const PrivateRoute = ({ children }) => {

  const { state } = useContext( AuthConext );
  const  { pathname, search }  = useLocation();
  
  const lastPath = pathname + search;

  localStorage.setItem( 'lastPath', lastPath );

  return ( state.logged ) ? children : <Navigate to='/login' />
}
