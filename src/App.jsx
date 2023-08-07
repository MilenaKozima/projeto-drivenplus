import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './pages/LoginPage/LoginPage'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import SubscriptionPage from './pages/SubscriptionPage/SubscriptionPage'
import HomePage from './pages/HomePage/HomePage'
import FormSubs from './pages/FormSubs/FormSubs'
import { UserContext } from './contexts/UserContext'
import { PlanContext } from './contexts/PlanContext'


function App() {

  const [user, setUser] = useState({});
  const [plan, setPlan] = useState({});

  return (
    <BrowserRouter>
    <UserContext.Provider value={{user, setUser}}>
    <PlanContext.Provider value={{plan, setPlan}}>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/sign-up' element={<RegistrationPage/>}/>
      <Route path='/subscriptions' element={<SubscriptionPage/>}/>
      <Route path='/subscriptions/:idPlano' element={<FormSubs/>}/>
      <Route path='/home' element={<HomePage/>}/>
    
    </Routes>
    </PlanContext.Provider>
    </UserContext.Provider>
    </BrowserRouter>

  )
}

export default App
