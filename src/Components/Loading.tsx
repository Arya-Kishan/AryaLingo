import React from 'react'
import loader from '../assets/loader.svg'

const Loading = () => {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center z-20'>
            <img className='w-[150px]' src={loader} alt="" />
        </div>
    )
}

export default React.memo(Loading)
