import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import { Route, Routes, useLocation } from 'react-router-dom'
import ChatBox from './components/ChatBox'
import Credits from './pages/Credits'
import Community from './pages/Community'
import { assets } from './assets/assets'
import './assets/prism.css'
import Loading from './pages/Loading'
import { useAppContext } from './context/AppContext'
import Login from './pages/Login'
import { Toaster } from 'react-hot-toast'
import PrivacyPolicy from './pages/PrivacyPolicy'
import About from './pages/About'

const App = () => {

  const { user, loadingUser } = useAppContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { pathname } = useLocation()

  if (pathname === '/loading' || loadingUser) return <Loading />

  return (
    <>

      <Toaster />

      {!isMenuOpen && <img src={assets.menu_icon} className='absolute top-3 left-3 w-8 h-8 cursor-pointer mh:hidden not-dark:invert' onClick={() => setIsMenuOpen(true)} />}

      {user ? (

        <div className='dark:bg-gradient-to-b from-[#242124] to-[#000000] dark:text-white '>
          <div className='flex h-screen w-screen'>
            <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Routes>
              <Route path='/' element={<ChatBox />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path='/credits' element={<Credits />} />
              <Route path='/community' element={<Community />} />
            </Routes>
          </div>
          <footer className="p-4 text-center bg-gray-100">
            <a href="/about" className="mx-2 text-blue-600">About</a>
            <a href="/privacy-policy" className="mx-2 text-blue-600">Privacy Policy</a>
          </footer>

        </div>

      ) : (
        <div className='bg-gradient-to-b from-[#242124] to-[#0000e0] flex items-center justify-center h-screen w-screen'>
          <Login />
        </div>
      )}
    </>

  )
}

export default App
