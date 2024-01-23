/* eslint-disable no-unused-vars */
const isPalindrome = (string) => {
    // Removing non-alphanumeric characters and convert to lowercase
    const cleanString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Comparing the stringing with the original cleaned stringing
    return cleanString === cleanString.split('').reverse().join('');
}

// Test cases
// console.log(isPalindrome("levelaaa")); // Output: true
// console.log(isPalindrome("hello")); // Output: false
// console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
