function isPalindrome(str) {
  
  
  return str === str.split('').reverse().join('');
}
console.log(isPalindrome('mom'))



/* 
  Add your pseudocode here
*/

/*
Input:
The function receives a string called str.
For example: "racecar".

Split the string into characters:
str.split('') turns the string into an array of characters.
Example: "racecar" becomes ['r', 'a', 'c', 'e', 'c', 'a', 'r'].

Reverse the array:
.reverse() reverses the order of the array.
Result: ['r', 'a', 'c', 'e', 'c', 'a', 'r'] → ['r', 'a', 'c', 'e', 'c', 'a', 'r']
(no change here because it's already a palindrome)

Join the characters back into a string:
.join('') joins the characters into a new string.
Result: "racecar"

Compare the reversed string to the original:
str === reversedString
If they’re the same, return true (it’s a palindrome).
If not, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  //console.log("Expecting: true");
  console.log( isPalindrome("racecar"));

  console.log("");
  console.log(isPalindrome('sis'))

  //console.log("Expecting: false");
  console.log(isPalindrome("robot"));
}

module.exports = isPalindrome;
console.log(isPalindrome('dad'))