// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let valid = true;
    const arr = str.split('')
    for (const [i, char] of arr.entries()) {
        if (i > (arr.length / 2))
            break;
        else if (char !== arr[arr.length - i - 1]) {
            valid = false;
            break
        }
    }

    return valid
}

module.exports = palindrome;

// function palindrome(str) {
//     const rev = str.split('').reduce((reversed, character) => character + reversed, '')
//     return str === rev
// }

function palindrome2(str) {
    // this is inefficient
    return str
        .split('')
        .every(
            (char, i) => char === str[str.length - 1 - i]
        )
}