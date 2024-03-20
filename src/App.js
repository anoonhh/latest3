import React from 'react'
import Main from './components/Main'
import Login from './components/Login'
import Bar from './components/Bar'
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div> 
<Bar/>

<Routes>
<Route path='/' element={<Main/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>

</Routes>
    </div>
  )
}

export default App