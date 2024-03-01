const Speak = (word: string, lang: string) => {

    console.log(word);
    console.log(lang);

    const getCode = () => {

        if (lang == "Russia") {
            return "ru-RU"
        } else if (lang == "Chinese") {
            return "zh-TW"
        } else if (lang == "Hindi") {
            return "hi-IN"
        } else if (lang == "Arabic") {
            return "ar-SA"
        } else if (lang == "German") {
            return "de-DE"
        } else if (lang == "Spanish") {
            return "es-AR"
        } else if (lang == "French") {
            return "fr-FR"
        } else if (lang == "Japanese") {
            return "ja-JP"
        } else if (lang == "Korean") {
            return "ko-KR"
        } else if (lang == "Romanian") {
            return "ro-RO"
        } else if (lang == "Portuguese") {
            return "pt-PT"
        } else if (lang == "Italian") {
            return "it-IT"
        } else if (lang == "Indonesian") {
            return "id-ID"
        } else if (lang == "Bulgarian") {
            return "bg-BG"
        } else if (lang == "Dutch") {
            return "nl-NL"
        } else if (lang == "Greek") {
            return "el-GR"
        } else {
            return "en-US"
        }

    }

    // Create a new SpeechSynthesisUtterance object.
    const utterance = new SpeechSynthesisUtterance();

    // Set the language of the utterance.
    utterance.lang = getCode();

    // Set the text of the utterance.
    utterance.text = word;

    // Speak the utterance.
    speechSynthesis.speak(utterance);

}

export default Speak;

// type lan = "ru" | "hi" | "lzh" | "ar" | "de" | "es" | "fr" | "ja" | "ko" | "ro" | "pt" | "it" | "id" | "bg" | "nl" | "el" | null | string
// // russia,hindi,chinese,arabic,german,spanish,french,,japan

/* 
Russian (Russia) ➡️ ru-RU
Hindi (India) ➡️ hi-IN
Chinese (Mandarin, Taiwan) ➡️ zh-TW
Arabic (Saudi Arabia) ➡️ ar-SA
German (Germany) ➡️ de-DE
Spanish (Argentina) ➡️ es-AR
French (France) ➡️ fr-FR
Japanese (Japan) ➡️ ja-JP
Korean (South Korea) ➡️ ko-KR
Romanian (Romania) ➡️ ro-RO
Portuguese (Portugal) ➡️ pt-PT
Italian (Italy) ➡️ it-IT
Indonesian (Indonesia) ➡️ id-ID
Bulgarian (Bulgaria) ➡️ bg-BG
Dutch (Netherlands) ➡️ nl-NL
Greek (Greece) ➡️ el-GR
*/