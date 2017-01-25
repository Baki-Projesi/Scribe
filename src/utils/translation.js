import { ottomanArabic, ottomanTurkish, ottomanLatin, ottomanCyrillic } from '../utils/reverse-rules'
import { arabicCodes, turkishCodes, latinCodes, cyrillicCodes } from '../utils/rules'

export default function translate(newInput, language) {
    var outputText = '', codeToCharRules;

    //Choose encoding rules based on language
    if (language.toLowerCase() === "turkish") {
        codeToCharRules = ottomanTurkish;
    }
    else if (language.toLowerCase() === "ottoman arabic") {
        codeToCharRules = ottomanArabic;
    }
    else if (language.toLowerCase() === "latin") {
        codeToCharRules = ottomanLatin;
    }
    else if (language.toLowerCase() === "cyrillic") {
        codeToCharRules = ottomanCyrillic;
    }
    else {
        return 'Unsupoorted Language Detected.';
    }

    //Parse input
    for (let i = 0; i < newInput.length; ++i) {
        var character = newInput.charAt(i);
        if (character === '&' && newInput.charAt(i + 1) === '#') {
            //detect HTML encoded characters such as '&#1407;'
            let k = i;
            while (newInput.charAt(k) !== ';' && k - i < 6) {
                ++k;
                character += newInput.charAt(k);
            }
            i = k;
        }

        if (character === ' ' || character === '\n') {
            //character is a space or newline
            outputText += character;
        }
        else {
            var code = turkishCodes[character]; //TODO: what is the input language?
            if (code !== undefined) {
                if (Array.isArray(code)) {
                    //TODO: find out which one to use
                    code = code[0];
                }
                var translatedChar = codeToCharRules[code];

                if (translatedChar !== undefined) {
                    outputText += translatedChar;

                }
            }
        }
    }
    return outputText;
}