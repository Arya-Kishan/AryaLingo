import { useEffect, useRef, useState } from 'react';
import Translate from '../Components/Translate';
import { MdOutlineMicNone } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoIosCopy } from "react-icons/io";
import "regenerator-runtime/runtime.js";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import loader from '../assets/loader.svg'



const Converter = () => {


    const {
        transcript,
        finalTranscript,
        listening,
    } = useSpeechRecognition();
    const [languages, setLanguages] = useState<string>("तुम कैसे हो")
    const [showMicDiv, setShowMicDiv] = useState<boolean>(false)
    const [showLoader, setShowLoader] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    let lan = [
        { name: 'Afrikaans', code: 'af' },
        { name: 'Amharic', code: 'am' },
        { name: 'Arabic', code: 'ar' },
        { name: 'Assamese', code: 'as' },
        { name: 'Azerbaijani', code: 'az' },
        { name: 'Bashkir', code: 'ba' },
        { name: 'Bulgarian', code: 'bg' },
        { name: 'Bhojpuri', code: 'bho' },
        { name: 'Bangla', code: 'bn' },
        { name: 'Tibetan', code: 'bo' },
        { name: 'Bodo', code: 'brx' },
        { name: 'Bosnian', code: 'bs' },
        { name: 'Catalan', code: 'ca' },
        { name: 'Czech', code: 'cs' },
        { name: 'Welsh', code: 'cy' },
        { name: 'Danish', code: 'da' },
        { name: 'German', code: 'de' },
        { name: 'Dogri', code: 'doi' },
        { name: 'Lower Sorbian', code: 'dsb' },
        { name: 'Divehi', code: 'dv' },
        { name: 'Greek', code: 'el' },
        { name: 'English', code: 'en' },
        { name: 'Spanish', code: 'es' },
        { name: 'Estonian', code: 'et' },
        { name: 'Basque', code: 'eu' },
        { name: 'Persian', code: 'fa' },
        { name: 'Finnish', code: 'fi' },
        { name: 'Filipino', code: 'fil' },
        { name: 'Fijian', code: 'fj' },
        { name: 'Faroese', code: 'fo' },
        { name: 'French', code: 'fr' },
        { name: 'French (Canada)', code: 'fr-CA' },
        { name: 'Irish', code: 'ga' },
        { name: 'Galician', code: 'gl' },
        { name: 'Konkani', code: 'gom' },
        { name: 'Gujarati', code: 'gu' },
        { name: 'Hausa', code: 'ha' },
        { name: 'Hebrew', code: 'he' },
        { name: 'Hindi', code: 'hi' },
        { name: 'Chhattisgarhi', code: 'hne' },
        { name: 'Croatian', code: 'hr' },
        { name: 'Upper Sorbian', code: 'hsb' },
        { name: 'Haitian Creole', code: 'ht' },
        { name: 'Hungarian', code: 'hu' },
        { name: 'Armenian', code: 'hy' },
        { name: 'Indonesian', code: 'id' },
        { name: 'Igbo', code: 'ig' },
        { name: 'Inuinnaqtun', code: 'ikt' },
        { name: 'Icelandic', code: 'is' },
        { name: 'Italian', code: 'it' },
        { name: 'Inuktitut', code: 'iu' },
        { name: 'Inuktitut (Latin)', code: 'iu-Latn' },
        { name: 'Japanese', code: 'ja' },
        { name: 'Georgian', code: 'ka' },
        { name: 'Kazakh', code: 'kk' },
        { name: 'Khmer', code: 'km' },
        { name: 'Kurdish (Northern)', code: 'kmr' },
        { name: 'Kannada', code: 'kn' },
        { name: 'Korean', code: 'ko' },
        { name: 'Kashmiri', code: 'ks' },
        { name: 'Kurdish (Central)', code: 'ku' },
        { name: 'Kyrgyz', code: 'ky' },
        { name: 'Lingala', code: 'ln' },
        { name: 'Lao', code: 'lo' },
        { name: 'Lithuanian', code: 'lt' },
        { name: 'Ganda', code: 'lug' },
        { name: 'Latvian', code: 'lv' },
        { name: 'Chinese (Literary)', code: 'lzh' },
        { name: 'Maithili', code: 'mai' },
        { name: 'Malagasy', code: 'mg' },
        { name: 'Māori', code: 'mi' },
        { name: 'Macedonian', code: 'mk' },
        { name: 'Malayalam', code: 'ml' },
        { name: 'Mongolian (Cyrillic)', code: 'mn-Cyrl' },
        { name: 'Mongolian (Traditional)', code: 'mn-Mong' },
        { name: 'Manipuri', code: 'mni' },
        { name: 'Marathi', code: 'mr' },
        { name: 'Malay', code: 'ms' },
        { name: 'Maltese', code: 'mt' },
        { name: 'Hmong Daw', code: 'mww' },
        { name: 'Myanmar (Burmese)', code: 'my' },
        { name: 'Norwegian', code: 'nb' },
        { name: 'Nepali', code: 'ne' },
        { name: 'Dutch', code: 'nl' },
        { name: 'Sesotho sa Leboa', code: 'nso' },
        { name: 'Nyanja', code: 'nya' },
        { name: 'Odia', code: 'or' },
        { name: 'Querétaro Otomi', code: 'otq' },
        { name: 'Punjabi', code: 'pa' },
        { name: 'Polish', code: 'pl' },
        { name: 'Dari', code: 'prs' },
        { name: 'Pashto', code: 'ps' },
        { name: 'Portuguese (Brazil)', code: 'pt' },
        { name: 'Portuguese (Portugal)', code: 'pt-PT' },
        { name: 'Romanian', code: 'ro' },
        { name: 'Russian', code: 'ru' },
        { name: 'Rundi', code: 'run' },
        { name: 'Kinyarwanda', code: 'rw' },
        { name: 'Sindhi', code: 'sd' },
        { name: 'Sinhala', code: 'si' },
        { name: 'Slovak', code: 'sk' },
        { name: 'Slovenian', code: 'sl' },
        { name: 'Samoan', code: 'sm' },
        { name: 'Shona', code: 'sn' },
        { name: 'Somali', code: 'so' },
        { name: 'Albanian', code: 'sq' },
        { name: 'Serbian (Cyrillic)', code: 'sr-Cyrl' },
        { name: 'Serbian (Latin)', code: 'sr-Latn' },
        { name: 'Sesotho', code: 'st' },
        { name: 'Swedish', code: 'sv' },
        { name: 'Swahili', code: 'sw' },
        { name: 'Tamil', code: 'ta' },
        { name: 'Telugu', code: 'te' },
        { name: 'Thai', code: 'th' },
        { name: 'Tigrinya', code: 'ti' },
        { name: 'Turkmen', code: 'tk' },
        { name: 'Klingon (Latin)', code: 'tlh-Latn' },
        { name: 'Klingon (pIqaD)', code: 'tlh-Piqd' },
        { name: 'Setswana', code: 'tn' },
        { name: 'Tongan', code: 'to' },
        { name: 'Turkish', code: 'tr' },
        { name: 'Tatar', code: 'tt' },
        { name: 'Tahitian', code: 'ty' },
        { name: 'Uyghur', code: 'ug' },
        { name: 'Ukrainian', code: 'uk' },
        { name: 'Urdu', code: 'ur' },
        { name: 'Uzbek (Latin)', code: 'uz' },
        { name: 'Vietnamese', code: 'vi' },
        { name: 'Xhosa', code: 'xh' },
        { name: 'Yoruba', code: 'yo' },
        { name: 'Yucatec Maya', code: 'yua' },
        { name: 'Cantonese (Traditional)', code: 'yue' },
        { name: 'Chinese Simplified', code: 'zh-Hans' },
        { name: 'Chinese Traditional', code: 'zh-Hant' },
        { name: 'Zulu', code: 'zu' }
    ]

    const getConvert = async () => {
        let code = inputRef.current?.value.split("-")[1]!;
        console.log(code);

        setShowLoader(true)
        let word = await Translate(code ? code : "hi", [{ Text: textAreaRef.current?.value! }])
        setShowLoader(false)
        console.log(word);
        if (word) {
            setLanguages(word[0])
        }

    }

    const clearText = () => {
        if (textAreaRef.current) {
            textAreaRef.current.value = ""
            setLanguages("")
        }
    }

    const copyToClipboard = () => {

        navigator.clipboard.writeText(languages).then(() => {
            console.log("Text copied to clipboard!");
        });

    }

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
    }

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
    }
    const startListening = () => {
        SpeechRecognition.startListening({
            continuous: false,
            language: 'en-GB',
        });
        setShowMicDiv(true)
    };

    useEffect(() => {

        if (finalTranscript !== '') {
            if (textAreaRef.current) {
                textAreaRef.current.value = transcript;
                setShowMicDiv(false)
                getConvert()
            }
        }

    }, [finalTranscript]);

    return (
        <div className='w-full flex flex-col bg-teal-700'>

            <h1 className='w-full text-center text-4xl text-white'>Translate</h1>

            <div className='w-full h-[calc(100vh-40px)] flex flex-col justify-around items-center'>

                {/* LANGUAGE SELECT */}
                <div className='w-[90%] flex justify-around items-center bg-white p-2 rounded-lg'>

                    <div className='w-[130px] md:w-[100%] text-xl md:text-2xl flex justify-center md:justify-start'>English</div>

                    <div className='w-[30px] h-[30px] flex justify-center items-center'>
                        {showLoader ? <img className='w-[30px] h-[30px]' src={loader} alt="" srcSet="" /> :
                            <FaArrowRightArrowLeft />}
                    </div>

                    <div className='w-[130px] md:w-[100%] flex gap-5'>

                        <input className='w-full text-end text-xl md:text-2xl placeholder-black outline-none' ref={inputRef} list="browsers" name="browser" id="browser" placeholder='Choose' />

                        <datalist id="browsers">
                            {lan.map((e) => (<option className='text-2xl' key={e.name} value={`${e.name}-${e.code}`} />))}
                        </datalist>

                    </div>

                </div>

                {/* TEXTAREA */}
                <div className='w-full flex flex-col lg:flex-row justify-around items-center gap-5'>

                    <textarea ref={textAreaRef} className='w-[90%] lg:w-[40%] h-[200px] lg:h-[400px] rounded-lg p-4 relative' name="" id="" placeholder='How are you'></textarea>

                    <p className='w-[90%] lg:w-[40%] h-[200px] lg:h-[400px] bg-white rounded-lg p-4 relative'>
                        {languages}
                        <span onClick={copyToClipboard} className='absolute bottom-2 right-2 cursor-pointer'><IoIosCopy /></span></p>

                </div>

                {/* BUTTON */}
                <div className='w-full flex items-center justify-evenly p-2 font-sans'>

                    <p onClick={clearText} className='w-[100px] lg:w-[200px] text-center text-xl text-white bg-teal-600 px-2 py-1 rounded-lg shadow-2xl flex gap-1 items-center justify-center cursor-pointer'>
                        Clear
                        <MdClear className='text-[22px] pt-[2px]' />
                    </p>

                    <p onClick={getConvert} className='w-[100px] lg:w-[200px] text-center text-xl text-white bg-teal-600 px-2 py-1 rounded-lg shadow-2xl flex gap-2 items-center justify-center cursor-pointer'>
                        Convert
                    </p>

                    <p onClick={startListening} className='w-[100px] lg:w-[200px] text-center text-xl text-white bg-teal-600 px-2 py-1 rounded-lg shadow-2xl flex gap-1 items-center justify-center cursor-pointer'>
                        Mic
                        <MdOutlineMicNone />
                    </p>

                </div>

            </div>

            {showMicDiv && <div className='w-full h-[200px] fixed top-0 left-0 bg-teal-500 flex justify-center items-center text-3xl text-white'>
                {listening ? "Speak" : "Stop"} : {transcript}
            </div>}

        </div>
    )
}

export default Converter
