
import { useReducer } from 'react'

import { AuthConext } from './AuthConext'
import { AuthReducer } from './AuthReducer'
import { types } from '../types/types'

const initialState = {
  logged: false,
}

export const AuthProvider = ({ children }) => {

  const [ state, dispatch ] = useReducer(AuthReducer, initialState);

  const login = ( name ) => {
    
    const action = {
      type: types.login,
      payload: {
        name: name,
      }
    }

    dispatch(action);
  }

  const logout = () => {

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
