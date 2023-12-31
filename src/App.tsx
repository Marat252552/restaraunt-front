import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './components/pages/LoginPage'
import MainPage from './components/pages/MainPage'
import { Provider } from 'react-redux'
import { setupStore } from './state/store'

let store = setupStore()

const App = () => {
  return (
    <div style={{ width: '100%' }}>
      <Provider store={store}>
        <HashRouter>
          <Routes>
            <Route path='/login' Component={LoginPage} />
            <Route path='/main' Component={MainPage} />
            <Route path='*' element={<Navigate to='/login' />} />
          </Routes>

        </HashRouter>
      </Provider>


    </div>
  )
}

export default App