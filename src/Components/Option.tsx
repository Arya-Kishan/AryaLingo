import { useEffect, useState } from "react";
import { RootState } from "../Redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { setResult } from "../Redux/translateSlice";

interface propsType {
    correctAnswer: string,
    word: string,
    index: number
}

const Option = ({ correctAnswer, word, index }: propsType) => {

    const [bg, setBg] = useState<string>("bg-teal-400")
    const { changeOptionBg } = useSelector((state: RootState) => state.translate)
    const dispatch = useDispatch()

    const handleBackground = () => {

        dispatch(setResult(word))

        if (word == correctAnswer) {
            console.log("correct");
            setBg("bg-green-600")
        } else {
            console.log("wrong");
            setBg("bg-red-600")
        }
    }

    const resetBackground = () => {
        setBg("bg-teal-400")
    }

    // USED BELOW TO CHANGE OPTION BACKGROUND ON EVERY GLOBAL STATE CHANGE
    useEffect(() => {
        resetBackground()
    }, [changeOptionBg])


    return (
        <div onClick={() => handleBackground()} className={`w-[80%] ${bg} p-2 rounded-lg flex gap-2 cursor-pointer`}>
            <span className="w-[30px] h-[30px] rounded-full bg-yellow-300 flex items-center justify-center text-black">{index + 1}</span>
            <p>{word}</p>
        </div>
    )
}

export default Option
