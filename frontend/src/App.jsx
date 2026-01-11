// import React from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Layout from './Layout'

// const App = () => {
//   return (
//     // <div className='flex min-h-screen flex-col'>
//     //   <Navbar />
//     //    {/* Main Content */}
//     //   <main className="flex-grow">
//     //     {/* Your routes / page content */}
//     //   </main>

//     //   <Footer />
//     // </div>

//     <>
//       <Routes>
//         <Route path element={<Layout />}>
//           <Route path='/' element={<Home />} />
//         </Route>
//       </Routes>
//     </>
//   )
// }

// export default App

import React from 'react'
import { Routes, Route } from "react-router-dom"

import Layout from "./Layout"
import Home from "./pages/Home"

import BlogDetail from './pages/BlogDetail'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Route>
    </Routes>
  )
}

export default App
