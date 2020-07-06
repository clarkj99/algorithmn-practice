// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // Sort the strings and compare
    const sortString = (string) =>
        string
            .replace(/[^\w]/g, '')
            .split('')
            .sort()
            .join('')

    return sortString(stringA) === sortString(stringB)
}

module.exports = anagrams;


// function anagrams(stringA, stringB) {
//     const charMap = string => {
//         const map = {}
//         const arr = string
//             .replace(/[^\w]/g, "")
//             .toLowerCase()

//         for (let char of arr) {
//             map[char] = map[char] + 1 || 1
//         }

//         return map
//     }

//     const mapA = charMap(stringA);
//     const mapB = charMap(stringB);
//     const mapAKeys = Object.keys(mapA)
//     const mapBKeys = Object.keys(mapB)

//     if (mapAKeys.length === mapBKeys.length) {
//         return mapAKeys.every(char => mapA[char] === mapB[char])
//     }
//     else
//         return false
// }