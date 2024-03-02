import { useSelector } from 'react-redux'
import { RootState } from '../Redux/Store'
import { useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Result = () => {

    const [number, setNumber] = useState<number>(0)
    const { randomWord } = useSelector((state: RootState) => state.translate)
    const { result } = useSelector((state: RootState) => state.translate)

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

            <h1 className='text-4xl'>RESULT</h1>

            <div className='w-full grid grid-cols-4 gap-2 px-10'>

                <div className='w-full col-span-3 flex flex-col items-center justify-center gap-3'>

                    <p className='w-full'>Correct : {number}</p>
                    <p className='w-full'>Wrong : {8 - number}</p>
                    <div className='w-full bg-white'>
                        <p className={`w-[${number*10}%] bg-red-600 h-[10px]`}></p>
                    </div>

                </div>

                <div className='w-full flex justify-center '>

                    <div style={{ width: 100, height: 100 }} className='w-full'>
                        <CircularProgressbar value={number * 10} text={`${number * 10}%`} />
                    </div>

                </div>

            </div>

            <div className='flex items-center justify-start flex-wrap gap-5 px-10'>
                {randomWord.map((e, i) => (

                    <div key={i} className={`${result[i] == e ? "bg-green-600" : "bg-red-700"} w-[100px] h-[70px] md:w-[200px] md:h-[100px] flex flex-col items-center justify-center`}>

                        <p className='text-[15px] md:text-2xl'>{e}</p>

                        <p className='text-[15px] md:text-2xl'>{result[i]}</p>

                    </div>

                ))}
            </div>

        </div>
    )
}

export default Result
