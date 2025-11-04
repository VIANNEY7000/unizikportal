import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loginpage from './PAGES/Loginpage'
import Registerpage from './PAGES/Registerpage'
import Home from './PAGES/Home' 
import Users from './PAGES/Users'
import Result from './PAGES/Result'
import Settings from './PAGES/Settings'
import Viewuser from './PAGES/Viewuser'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Loginpage />}/>
        <Route path='/Registerpage' element={<Registerpage />} />
        <Route path='/Home'element={<Home />}/>
        <Route path='Users' element={<Users />}/>
        <Route path='/Result' element={<Result />}/>
        <Route path='/Settings' element={<Settings/>}/>
        <Route path='/users/:id' element={<Viewuser />}/>
      </Routes>
    </div>
  )
}

export default App