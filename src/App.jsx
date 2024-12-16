import React from 'react'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Login from './components/Login'
import Register from './components/Register'
import Complaints from './components/Complaints'
import Newcomplaints from './components/Newcomplaints'
import Mycomplaint from './components/Mycomplaint'
import Status from './components/Status'
import Plainnav from './components/Plainnav';

const App = () => {
  return (
    <BrowserRouter> 
  
              
      
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/complaints' element={<Complaints/>} />
      <Route path='/newcomplaints' element={<Newcomplaints/>} />
      <Route path='/mycomplaint' element={<Mycomplaint/>} />
      <Route path='/status' element={<Status/>} />


    </Routes>

   
 
</BrowserRouter>
    
    
  )
}

export default App