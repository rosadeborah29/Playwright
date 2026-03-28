const str = "Testleaf";

// Reverse the string
const reversed = str.split('').reverse().join('');

console.log("Original String:", str);
console.log("Reversed String:", reversed);

// Check palindrome
if (str.toLowerCase() === reversed.toLowerCase()) {
    console.log("It is a Palindrome");
} else {
    console.log("It is NOT a Palindrome");
}