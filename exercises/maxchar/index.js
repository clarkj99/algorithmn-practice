// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charCount = {}
    let maxCount = 0;
    let result = "";
    for (let char of str.split('')) {
        charCount[char] = charCount[char] + 1 || 1;
        if (charCount[char] > maxCount) {
            result = char;
            maxCount = charCount[char];
        }
    }
    return result;
}
module.exports = maxChar;
