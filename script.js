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

factorialize(10)