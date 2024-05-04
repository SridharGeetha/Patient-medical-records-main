
import './App.css'
import '/Users/welcome/Patient-medical-records-main/src/css/style.css'
import '/Users/welcome/Patient-medical-records-main/src/css/animate.css'

import { Index } from './components/Index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminPage } from './components/AdminPage'
import { HospitalHome } from './components/HospitalHome'
import HospitalRegister from './components/HospitalRegister'
import { DocterRegisteration } from './components/DocterRegisteration'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/admin' element={<AdminPage />}></Route>
        <Route path='/hospital' element={<HospitalHome />}></Route>
        <Route path='/hospital-register' element={<HospitalRegister />}></Route>
        <Route path='/docter-register' element={<DocterRegisteration />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
