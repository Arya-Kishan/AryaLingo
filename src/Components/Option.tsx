import { useEffect, useState } from "react";
import { RootState } from "../Redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { setResult } from "../Redux/translateSlice";

interface propsType {
    correctAnswer: string,
    word: string,
    index: number,
    firstClick: number,
    setFirstClick: React.Dispatch<React.SetStateAction<number>>,
}

const Option = ({ correctAnswer, word, index, firstClick, setFirstClick }: propsType) => {

    const [bg, setBg] = useState<string>("bg-teal-400")
    // BELOW STATE IS USED TO CHANGE BACKGROUND TO DEFAULT BGCOLOR OF OPTIONS ON CLICKING NEXT OR PREVIOUS BUTTON
    const { changeOptionBg } = useSelector((state: RootState) => state.translate)
    const dispatch = useDispatch()

    const handleBackground = () => {

        firstClick <= 0 ? dispatch(setResult(word)) : ""
        setFirstClick(prev => prev + 1)

        if (word == correctAnswer) {
            console.log("correct");
            setBg("bg-green-600")
        } else {
            console.log("wrong");
            setBg("bg-red-600")
        }

    }

    console.log(firstClick);


    const resetBackground = () => {
        setBg("bg-teal-400")
        setFirstClick(0)
    }

    // USED BELOW TO CHANGE OPTION BACKGROUND ON EVERY GLOBAL STATE CHANGE
    useEffect(() => {
        resetBackground()
    }, [changeOptionBg])


    return (
        <div onClick={() => handleBackground()} className={`w-full ${bg} p-2 rounded-lg flex gap-2 cursor-pointer capitalize z-10`}>

            <span className="w-[30px] h-[30px] rounded-full bg-yellow-300 flex items-center justify-center text-black">{index + 1}</span>

            <p>{word}</p>

        </div>
    )
}

export default Option
