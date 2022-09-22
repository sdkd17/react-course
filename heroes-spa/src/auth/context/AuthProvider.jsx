
import { useReducer } from 'react'

import { AuthConext } from './AuthConext'
import { AuthReducer } from './AuthReducer'
import { types } from '../types/types'
import { json } from 'react-router-dom'


const init = () => {
  const user = JSON.parse( localStorage.getItem( 'user' ) );

  return {
    logged: !!user,
    user,
  }
}

export const AuthProvider = ({ children }) => {

  const [ state, dispatch ] = useReducer(AuthReducer, {}, init);

  const login = ( name ) => {
    
    const user = { id: 1, name }

    const action = {
      type: types.login,
      payload: user
      
    }

    localStorage.setItem( 'user', JSON.stringify( user ) );
    dispatch(action);
  }

  const logout = () => {

    localStorage.removeItem('user')
    dispatch({
      type: types.logout
    })

  }

  return (
    <AuthConext.Provider value={ {state, login, logout} }>
      { children }
    </AuthConext.Provider>
  )
}
