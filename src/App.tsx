import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'
import MainPage from './components/pages/MainPage'

const App = () => {
  return (
    <div style={{width: '100%'}}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' Component={LoginPage} />
          <Route path='/main' Component={MainPage} />
          <Route path='*' element={<Navigate to='/login' />}/>
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App