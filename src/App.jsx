import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './pages/LoginPage/LoginPage'
import RegistrationPage from './pages/RegistrationPage/RegistrationPage'
import SubscriptionPage from './pages/SubscriptionPage/SubscriptionPage'
import HomePage from './pages/HomePage/HomePage'
import FormSubs from './pages/FormSubs/FormSubs'


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/sign-up' element={<RegistrationPage/>}/>
      <Route path='/subscriptions' element={<SubscriptionPage/>}/>
      <Route path='/subscriptions/ID_DO_PLANO' element={<FormSubs/>}/>
      <Route path='/home/ID_DO_PLANO' element={<HomePage/>}/>
    
    </Routes>
    </BrowserRouter>

  )
}

export default App
