const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let encodedLetter = '';
    let decodedLetter = '';
    let result = '';
    let indexOf1;
    for (let i = 0; i < expr.length; i += 10) {
        decodedLetter = '';
        encodedLetter = expr.substr(i, 10);
        console.log(encodedLetter);
        if (encodedLetter === '**********') {
            result += ' ';
        } else {
            while (encodedLetter.length > 1) {
                indexOf1 = encodedLetter.indexOf('1');
                decodedLetter = (encodedLetter.substr(indexOf1, 2) === '10') ? decodedLetter + '.' : decodedLetter + '-';
                encodedLetter = encodedLetter.slice(indexOf1 + 2);
                console.log(encodedLetter);     
            }
            console.log(decodedLetter);
            result += MORSE_TABLE[decodedLetter];
        }
    }
    return result;
}

module.exports = {
    decode
}