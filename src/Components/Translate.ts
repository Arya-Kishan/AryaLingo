import axios from "axios";

interface dataType {
    detectedLanguage: {},
    translations: [{ text: string, to: string }]
}

interface wordType {
    Text: string
}


type lan = "ru" | "hi" | "lzh" | "ar" | "de" | "es" | "fr" | "ja" | "ko" | "sr-Cyrl" | "pt-PT" | "it" | "id" | "bg" | "nl" | "el" | null | string

const Translate = async (lang: lan, word: wordType[]) => {

    const options = {
        method: 'POST',
        url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
        params: {
            'to[0]': lang,
            'api-version': '3.0',
            profanityAction: 'NoAction',
            textType: 'plain'
        },
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '05a93b77d4msh839e9a754db1eeep150ea1jsn3ad6d4ad71b0',
            'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
        },
        data: word
    };

    try {
        const response = await axios.request(options);
        let word = response.data.map((e: dataType) => e.translations[0].text)
        return (word)
    } catch (error) {
        console.error(error);
    }

}

export default Translate;