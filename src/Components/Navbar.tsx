import logo1 from '../assets/icons/logo.png'
import logo2 from '../assets/icons/flagLogo.png'

const Navbar = () => {
  return (
    <div className='w-full h-[54px] bg-teal-900 flex items-center justify-between px-10'>

      <div className='flex items-center justify-center gap-2'>
        <img className='w-[20px]' src={logo1} alt="" srcSet="" />
        <p className='text-white text-2xl'>Aryalingo</p>
      </div>

      <img className='w-[20px]' src={logo2} alt="" />

    </div>
  )
}

export default Navbar
