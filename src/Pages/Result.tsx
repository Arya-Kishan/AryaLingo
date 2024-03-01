import { useSelector } from 'react-redux'
import { RootState } from '../Redux/Store'
import { useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Result = () => {

    const [number, setNumber] = useState<number>(0)
    const { randomWord } = useSelector((state: RootState) => state.translate)
    const { convertedWord } = useSelector((state: RootState) => state.translate)
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
        <div className='w-full h-[100vh] bg-black text-white flex flex-col items-center justify-start gap-10 pt-10'>

            <h1 className='text-4xl'>RESULT</h1>

            <div className='w-[80%] flex items-center justify-around bg-teal-600 rounded-lg p-2'>

                <div>
                    <p>Correct :{number}</p>
                    <p>Wrong :{8 - number}</p>
                </div>

                <div style={{ width: 100, height: 100 }}>
                    <CircularProgressbar value={number} text={`${number}%`} />
                </div>

            </div>

            <div className='flex flex-col gap-6'>

                <div className='w-full justify-around flex gap-10 text-xl md:text-2xl'>
                    <p>Word</p>
                    <p>Answer</p>
                    <p>Choosed</p>
                </div>

                <div>
                    {randomWord.map((e, i) => (
                        <div key={i} className='flex gap-5 md:gap-10'>
                            <p className='w-[70px] md:w-[100px] text-[]15px md:text-2xl'>{e}</p>
                            <p className='w-[70px] md:w-[100px] text-[]15px md:text-2xl'>{convertedWord[i]}</p>
                            <p className='w-[70px] md:w-[100px] text-[]15px md:text-2xl'>{result[i] == e ? <span className='text-green-600'>{result[i]}</span> : <span className='text-red-600'>{result[i]}</span>}</p>
                        </div>
                    ))}
                </div>

            </div>

            <div className='w-[80%] text-2xl bg-teal-500 p-2 rounded-lg'>

                Result : {number > 4 ? <span className='text-green-600 font-bold'>Pass</span> : <span className='text-red-600 font-bold'>Fail</span>}

            </div>

        </div>
    )
}

export default Result
