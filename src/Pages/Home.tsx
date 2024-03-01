
import { useNavigate } from 'react-router-dom'
import { generate } from 'random-words';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRandom, gettingWord } from '../Redux/translateSlice';
import Russia from '../assets/Russia.svg'
import Hindi from '../assets/India.svg'
import China from '../assets/China.svg'
import Arab from '../assets/Arab.svg'
import German from '../assets/German.svg'
import Spain from '../assets/Spain.svg'
import French from '../assets/France.svg'
import Japan from '../assets/Japan.svg'
import Korea from '../assets/Korea.svg'
import Romania from '../assets/Romania.svg'
import Portugal from '../assets/Portugal.svg'
import Italy from '../assets/Italy.svg'
import Indonesia from '../assets/Indonesia.svg'
import Bulgaria from '../assets/Bulgaria.svg'
import Dutch from '../assets/Dutch.svg'
import Greece from '../assets/Greece.svg'

const Home = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    let random = generate(8);

    let flagsArr = [Russia, Hindi, China, Arab, German, Spain, French, Japan, Korea, Romania, Portugal, Italy, Indonesia, Bulgaria, Dutch, Greece]

    const languageArr = [
        { language: "Russia", code: "ru" },
        { language: "Hindi", code: "hi" },
        { language: "Chinese", code: "lzh" },
        { language: "Arabic", code: "ar" },
        { language: "German", code: "de" },
        { language: "Spanish", code: "es" },
        { language: "French", code: "fr" },
        { language: "Japan", code: "ja" },
        { language: "Korean", code: "ko" },
        { language: "Romanian", code: "ro" },
        { language: "Portuguese", code: "pt" },
        { language: "Italian", code: "it" },
        { language: "Indonesian", code: "id" },
        { language: "Bulgarian", code: "bg" },
        { language: "Dutch", code: "nl" },
        { language: "Greece", code: "el" },
    ]

    const handleLanguage = (lan: string, code: string) => {
        dispatch(gettingWord())
        navigate(`/learn?lang=${lan}&code=${code}`)
    }

    useEffect(() => {
        dispatch(getRandom(random))
    }, [])


    return (
        <div className='w-full bg-black text-white flex flex-col items-center justify-start gap-5 py-10'>

            <h1 className='text-4xl text-white'>Choose Language</h1>

            <div className='w-full flex flex-wrap gap-1 items-center justify-center'>

                {languageArr.map((e, i) => (

                    <div onClick={() => handleLanguage(e.language, e.code)} key={e.code} className='w-[100px] h-[100px] md:w-[15vw] md:h-[15vw] bg-teal-400 flex items-center justify-center gap-2 cursor-pointer hover:bg-yellow-400'>

                        <img className='w-[20px] md:w-[40px]' src={flagsArr[i]} alt="" srcSet="" />

                        <p className='text-[15px] md:text-[25px] z-10'>{e.language}</p>
                    </div>

                ))}

            </div>

        </div>
    )
}

export default Home
