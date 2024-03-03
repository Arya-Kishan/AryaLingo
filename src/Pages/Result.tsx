import { useSelector } from 'react-redux'
import { RootState } from '../Redux/Store'
import { useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import star from '../assets/icons/star.png'

const Result = () => {

    const [number, setNumber] = useState<number>(0)
    const { randomWord } = useSelector((state: RootState) => state.translate)
    const { result } = useSelector((state: RootState) => state.translate)
    const navigate = useNavigate()

    const checkResult = () => {
        let num = 0;
        result.forEach((e, i) => {
            if (e == randomWord[i]) {
                num++
            }
        });
        setNumber(num)
    }

    useEffect(() => {
        checkResult()
    }, [])


    return (
        <div className='w-full min-h-[100vh] bg-teal-900 text-white flex flex-col items-center justify-start gap-10 pt-10'>

            <h1 className='text-4xl z-10'>RESULT</h1>

            <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-2 px-10'>

                <div className='w-full col-span-3 flex flex-col items-center justify-center gap-3 order-2 md:order-1'>

                    <div className='w-full flex md:flex-col justify-between'>
                        <p className='z-10'>Correct : {number}</p>
                        <p className='z-10'>Wrong : {8 - number}</p>
                    </div>
                    <div className='w-full bg-white z-10'>
                        <p style={{ width: `${Math.round(number / 8 * 100)}%` }} className={`bg-red-600 h-[10px]`}></p>
                    </div>

                </div>

                <div className='w-full flex flex-col gap-4 items-center justify-center order-1 md:order-2'>

                    <div style={{ width: 100, height: 100 }} className='w-full z-10'>
                        <CircularProgressbar value={Math.round(number / 8 * 100)} text={`${Math.round(number / 8 * 100)}%`} />
                    </div>

                    <div onClick={() => navigate("/quiz")} className='bg-red-500 px-3 py-2 z-10 cursor-pointer'>Try Again</div>

                </div>

            </div>

            <h1 className='w-full text-start pl-10 text-2xl'>MCQ's</h1>

            <div className='flex items-center justify-start flex-wrap gap-5 px-10'>
                {randomWord.map((e, i) => (

                    <div key={i} className={`${result[i] == e ? "bg-green-600" : "bg-red-700"} w-[100px] h-[70px] md:w-[200px] md:h-[100px] flex flex-col items-center justify-center capitalize z-10`}>

                        <p className='text-[15px] md:text-2xl'>{e}</p>

                        <p className='text-[15px] md:text-2xl'>{result[i]}</p>

                    </div>

                ))}
            </div>

            {/* STARS */}
            {randomWord.map((e, i) => (<img className='w-[20px] z-1' id={`star${i + 1}`} src={star} key={i} alt={e} srcSet="" />))}

        </div>
    )
}

export default Result
