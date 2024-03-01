import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Translate from '../Components/Translate';
import { useDispatch, useSelector } from 'react-redux';
import { getConverted } from '../Redux/translateSlice';
import { RootState } from '../Redux/Store';
import Speak from '../Components/Speak';

const Learn = () => {

  interface wordType {
    Text: string
  }

  const [count, setCount] = useState<number>(0)
  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()
  const lang = searchParams.get("lang") as string;
  const code = searchParams.get("code");

  const dispatch = useDispatch()
  const { randomWord } = useSelector((state: RootState) => state.translate)
  const { convertedWord } = useSelector((state: RootState) => state.translate)

  let a: wordType[] = randomWord.map((e: string) => ({ Text: e }))

  const getConvertedWord = async () => {
    try {
      let convertedWords: any = await Translate(code, a)
      dispatch(getConverted(convertedWords))
    } catch (error) {
      console.log("error fddx");
    }
  }

  const handleSpeak = (word: string) => {
    Speak(word, lang)
  }

  const handleQuiz = () => {
    navigate("/quiz")
  }


  useEffect(() => {
    getConvertedWord()
  }, [])


  console.log(randomWord);
  console.log(convertedWord);


  return (
    <div className='w-full h-[100vh] bg-black text-white flex flex-col items-center justify-start gap-10 pt-10'>

      {convertedWord && convertedWord.length > 0 ? <>
        <p className='w-full h-[10vh] text-4xl text-white text-center uppercase'>{lang} Language</p>

        <div className='w-full h-[50vh] flex flex-col justify-between items-center p-10'>

          <p className='w-full flex gap-10 justify-start text-2xl items-center md:text-4xl'>
            <span>{count + 1}.</span>
            <span>{convertedWord[count]}</span>
            <span>{randomWord[count]}</span>
            <svg onClick={() => handleSpeak(convertedWord[count])} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
          </p>

          {count >= 7 ? <button className='w-[100%] text-2xl p-2 flex justify-center items-center bg-teal-950 cursor-pointer' onClick={() => handleQuiz()}>Quiz</button> : <button className='w-[100%] text-2xl p-2 flex justify-center items-center bg-teal-950 cursor-pointer' onClick={() => setCount((prev) => prev + 1)}>Next</button>}

          <div className='w-[100%] text-2xl p-2 flex justify-center items-center bg-teal-950 cursor-pointer' onClick={() => navigate("/quiz")}>QUIZ</div>

        </div>
      </> : <div className='flex flex-col gap-5'>
        <p>CHOOSE A LANGUAGE</p>
        <button className='w-full bg-teal-300 p-2 rounded-lg' onClick={() => navigate("/")}>CHOOSE</button>
      </div>}

    </div>
  )
}

export default Learn
