import './App.css'
import Preloader from './components/Preloader'
import Auth from './pages/Auth'
import PagenotFound from './pages/PagenotFound'
import Home from './users/pages/Home'
import { Route, Routes } from 'react-router-dom'
import Careers from './users/pages/Careers'
import { useEffect, useState } from 'react'
import AllBooks from './users/pages/AllBooks'
import Contact from './users/pages/Contact'
import Profile from './users/pages/Profile'

function App() {
  
  const [isloading , setIsloading] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setIsloading(true)
    },7200)
  },[])
  return (
    <>
   
    <Routes>
      <Route path='/' element={isloading?<Home/>:<Preloader/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/all-Books' element={<AllBooks/>}/>
      <Route path='/careers' element={<Careers/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='*' element={<PagenotFound/>}/>
     
    </Routes>
    
    </>
  )
}

export default App
