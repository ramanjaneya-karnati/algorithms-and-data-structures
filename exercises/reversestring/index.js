// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed='';

   for(let character of str){
       reversed = character + reversed
   }
   return reversed;
}
/*function reverse(str) {
    return str.splice().reverse().join();
}*/

module.exports = reverse;


//string
//1. declare temp variable
//2. use for of loop with temp variable in obj
//3. s + ''
// 4. se