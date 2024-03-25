import React from 'react'
import {About,Clients, Courses,Review,AboveFooter, Footer, Header, Navbar} from './components'
const Home = () => {
  return (
    <div>
      <Header/>
     <About/>
     <Courses/> 
     <Clients/>
     <Review/>
     <AboveFooter/>
    </div>
  )
}

export default Home
