import logo1 from '../assets/icons/logo.png'
import logo2 from '../assets/icons/flagLogo.png'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div className='w-full h-[54px] bg-teal-900 flex items-center justify-between px-4 md:px-10'>

      <div className='flex items-center justify-center gap-2'>
        <img className='w-[30px]' src={logo2} alt="" srcSet="" />
        <p className='text-white text-3xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 text-transparent bg-clip-text'>Aryalingo</p>
      </div>

      <img onClick={() => navigate("/converter")} className='w-[20px]' src={logo1} alt="" />

    </div>
  )
}

export default React.memo(Navbar)
