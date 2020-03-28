import React, { useState } from 'react';
import AuthPage from './components/pages/AuthPage';
import MainDrawer from './components/drawer/Drawer';


function App() {
  const [isAuth, setAuth] = useState(false)
  const fakeAuth = () => {
    setAuth(true)
  }

 return (
   <>
   {isAuth ?  <MainDrawer/> : <AuthPage fakeAuth={fakeAuth} />}
   
   </>
 )
}

export default App;