/////////////////////////////////
// freeCodeCamp JS Challenges //
///////////////////////////////

// Challenge 1
// Reverse a String

const reverseString = (word) => {
    const splitArr = word.split("");
    const reverseArr = splitArr.reverse();
    const reverseString = reverseArr.join("");

    return reverseString
}

console.log(reverseString("love coding"));

// simpler way
// word.split("").reverse().join("")

// Challenge 2
// Factorialize a Number

const factorialize = (x) => {
    let result = 1
    for (let i=1; i<=x; i++) {
        result = result * i
    }
    console.log(result) 
}

factorialize(7)

// Challenge 3
// Palindrome Check

const palindrome = (word) => {
    const reversed = word.split("").reverse().join("");
    if (reversed === word) {
        return true
    } else {
        return false
    }
}

console.log(palindrome("eye"))
console.log(palindrome("hello"))

// Challenge 4
// Longest Word Check

const findLongestWord = (string) => {
    let words = string.split(" ");
    var longest = "";

    for (let word of words) {
        if(word.length > longest.length) {
            longest = word
        }
    }
    console.log(longest)
}

findLongestWord("The quick brown fox jumped over the lazy dog")