import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Translate from '../Components/Translate';
import { useDispatch, useSelector } from 'react-redux';
import { clearRandomWords, getConverted, getRandom } from '../Redux/translateSlice';
import { RootState } from '../Redux/Store';
import Speak from '../Components/Speak';
import mic from '../assets/icons/speaker.png'
import star from '../assets/icons/star.png'
import { generate } from 'random-words';

const Learn = () => {

  interface wordType {
    Text: string
  }

  const [count, setCount] = useState<number>(0)
  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams();
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
  const getNewWords = () => {
    dispatch(clearRandomWords())
    dispatch(getRandom(generate(8)))
    getConvertedWord()
  }


  useEffect(() => {
    getConvertedWord()
    console.log(setSearchParams);
  }, [randomWord])


  return (
    <div className='w-full h-[100vh] bg-black text-white flex flex-col items-center justify-start gap-10 pt-10'>

      {convertedWord && convertedWord.length > 0 && <>

        <h1 className='w-full h-[20vh] text-4xl text-white text-center uppercase z-10'>{lang} Language</h1>

        <div className='w-full h-[80vh] flex flex-col justify-between items-center'>

          <p className='w-full flex gap-10 justify-start text-2xl items-center md:text-4xl p-10 z-10'>
            <span>{count + 1}.</span>
            <span>{convertedWord[count]}</span>
            <span>{randomWord[count]}</span>
            <img className='w-[20px]' onClick={() => handleSpeak(convertedWord[count])} src={mic} alt="" srcSet="" />
          </p>

          <div className='w-full h-full bg-teal-900 p-5 rounded-tl-[60px] rounded-tr-[60px] flex flex-col gap-5 pt-20 z-10'>

            <div className='w-full flex justify-around'>
              <button className='w-[40%] bg-white text-black p-2' onClick={() => setCount((prev) => prev - 1)} disabled={count <= 0 ? true : false} >   Previous</button>
              <button className='w-[40%] bg-white text-black p-2' onClick={() => setCount((prev) => prev + 1)} disabled={count >= 7 ? true : false}>Next</button>
            </div>

            <div className='w-full flex justify-around'>
              <button className='w-[40%] bg-white text-black p-2' onClick={getNewWords}>New Words</button>
              <button className='w-[40%] bg-white text-black p-2' onClick={() => navigate("/quiz")}>QUIZ</button>
            </div>

          </div>

        </div>


        {randomWord.map((e, i) => (<img className='w-[20px] z-1' id={`star${i + 1}`} src={star} alt={e} srcSet="" />))}

      </>}

    </div>
  )
}

export default Learn
