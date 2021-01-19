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