import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage, HomePage, LoginPage } from './Pages';
import { Navbar } from './Components';
import { UserProvider } from './Contexts/UserProvider';


export const MainApp = () => {
  return (
    <UserProvider> 
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={ <Navigate to="/home" /> }/>
        <Route path="/home" element={ <HomePage /> }/>
        <Route path="/about" element={ <AboutPage /> }/>
        <Route path="/login" element={ <LoginPage /> }/>

        <Route path="/*" element={ <Navigate to="/login" /> } />
      </Routes>
      
    </UserProvider>    
  )
}
