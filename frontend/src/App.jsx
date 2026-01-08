import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
       {/* Main Content */}
      <main className="flex-grow">
        {/* Your routes / page content */}
      </main>

      <Footer />
    </div>
  )
}

export default App
