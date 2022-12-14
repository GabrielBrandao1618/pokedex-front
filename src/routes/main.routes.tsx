import {Route, Routes} from 'react-router-dom'
import { Details } from '../pages/Details'
import { Home } from '../pages/Home'

export function MainRoutes(){
  return (
    <Routes>
      <Route 
        path='/'
        element={<Home/>}
      />
      <Route 
        path='/details/:pokemon'
        element={<Details />}
      />
    </Routes>
  )
}