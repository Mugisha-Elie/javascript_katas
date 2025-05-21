const MORSE_CODE = {
  '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D',
  '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H',
  '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L',
  '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P',
  '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
  '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
  '-.--': 'Y', '--..': 'Z', '-----': '0', '.----': '1',
  '..---': '2', '...--': '3', '....-': '4', '.....': '5',
  '-....': '6', '--...': '7', '---..': '8', '----.': '9',
  '...---...': 'SOS'
};
function decodeMorse(morseCode){
    //remove spaces before or after morseCode
    morseCode = morseCode.trim();
    //separate words in morse code(3 spaces)
    const morseWords = morseCode.split('   ');
    //decode each word
    let result = "";

    for(let i=0; i<morseWords.length; i++){
        //separate letters
        const word = morseWords[i];
        const morseLetters = word.split(' ');
        let decodedWord = "";

        //decode each letter
        for(let j = 0; j<morseLetters.length; j++){
            const code = morseLetters[j];
            if(MORSE_CODE[code]){
                decodedWord += MORSE_CODE[code];

            }
        }

        //Add the decoded word to the result
        if(i>0){
            result += " ";
        }
            result += decodedWord;
        
    }
    return result;
}
console.log(decodeMorse(".... ..   -.-- --- ..-"));