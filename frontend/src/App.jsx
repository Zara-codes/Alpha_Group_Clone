import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    // <div className='flex min-h-screen flex-col'>
    //   <Navbar />
    //    {/* Main Content */}
    //   <main className="flex-grow">
    //     {/* Your routes / page content */}
    //   </main>

    //   <Footer />
    // </div>

    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App
