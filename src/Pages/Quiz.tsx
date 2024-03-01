import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RootState } from "../Redux/Store"
import { generate } from "random-words"
import _ from "lodash"
import Option from "../Components/Option"
import { changeBg, clearResult } from "../Redux/translateSlice"

const Quiz = () => {

    const [count, setCount] = useState<number>(0)
    const [shuffled, setShuffled] = useState<string[]>()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { randomWord } = useSelector((state: RootState) => state.translate)
    const { convertedWord } = useSelector((state: RootState) => state.translate)

    const handleNext = () => {
        setCount((prev) => prev + 1)
        shuffle(randomWord[count + 1])
        dispatch(changeBg(count + 1))
    }

    const handlePrev = () => {
        setCount((prev) => prev - 1)
        shuffle(randomWord[count - 1])
        dispatch(changeBg(count))
    }

    let shuffle = (answer: string) => {
        let threeRandomWords = generate(3)
        let options = [...threeRandomWords, answer];
        setShuffled(_.shuffle(options))
    }

    const handleResult = () => {
        navigate("/result")
    }

    useEffect(() => {
        shuffle(randomWord[0])
        dispatch(clearResult())
    }, [])

    return (
        <div className='w-full h-[100vh] bg-black text-white flex flex-col items-center justify-start gap-10 pt-10'>

            <h1 className="text-4xl">Quiz</h1>

            <div className="w-full flex flex-col gap-6">

                <p className="text-xl md:text-3xl pl-10 capitalize">{count + 1}. {convertedWord[count]}</p>

                <div className="flex flex-col gap-4 pl-10">

                    {shuffled?.map((word, i) => (
                        <Option key={i} correctAnswer={randomWord[count]} word={word} index={i} />
                    ))}

                </div>

                {/* BUTTONS FOR NEXT AND PREVIOUS */}
                <div className="w-full flex justify-center items-center gap-4 p-4">
                    <button onClick={handlePrev} disabled={count <= 0 ? true : false} className="w-full text-black bg-yellow-500 p-2">Previous</button>

                    {count >= 7 ? <button onClick={handleResult} className="w-full text-black bg-yellow-500 p-2">Result</button> : <button onClick={handleNext} className="w-full text-black bg-yellow-500 p-2">Next</button>}

                </div>

            </div>

        </div>
    )
}

export default Quiz
