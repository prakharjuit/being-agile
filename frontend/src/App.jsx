import { useState } from 'react'
import {About,Clients, Courses,Review, Footer, Header, Navbar} from './components'
import { BrowserRouter,Router,Route,Routes } from 'react-router-dom'
import  Home  from "./Home"
import Aboutnav from "./Routes/Aboutnav"
import Teachwith from "./Routes/Teachwith"
import Coursesroute from "./Routes/Coursesroute"
import Blogs from "./Routes/Blogs"

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<Aboutnav/>}/>
    <Route path='/courses' element={<Coursesroute/>}/>
    <Route path='/blogs' element={<Blogs/>}/>
    <Route path='/teach' element={<Teachwith/>}/>
    </Routes>
     
     <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
