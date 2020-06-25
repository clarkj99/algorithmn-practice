// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((reversed, character) => character + reversed, '')
}

module.exports = reverse;



// function reverse(str) {
//     let reversedString = '';
//     for (let character of str) {
//         reversedString = character + reversedString
//     }
//     return reversedString
// }


// function reverse(str) {
//     let reversedString = '';
//     for (let i = str.length; i > 0; i--) {
//         reversedString += str.substr(i - 1, 1)
//     }
//     return reversedString
// }