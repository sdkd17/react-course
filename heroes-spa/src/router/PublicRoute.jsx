import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthConext } from '../auth';

export const PublicRoute = ({ children }) => {

  const { state } = useContext( AuthConext )

  return ( !state.logged ) ? children : <Navigate to="/" /> ;
}
