console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello ${name}!`;
}
// Remember to call the function to test
console.log('Test - should say "Hello Meir!"', helloName('Meir'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  console.log('in addNumbers:', firstNumber, secondNumber)
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
} // end addNumbers
console.log('running addNumbers with 5 & 8, should return 13 =>', addNumbers(5,8));



// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3){
  let answer = num1 * num2 * num3;
  return answer;
} // end multiplyThree

console.log('running multiplyThree with 2, 3, and 5, should return 30 =>', multiplyThree(2,3,5));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else 
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let cards = [ 'A', 'K', 'Q', 'J'];
let people = ['meir', 'jake', 'joe', 'chad', 'liz'];
let nothing = [];

// INPUT: array
// OUTPUT: value of LAST item in some array
function getLast(things) {
  return things[things.length -1]
    }
 // end getLast
 
 console.log('getLast - should return J =>', getLast(cards));
 console.log('getLast - should return liz =>', getLast(people));
 console.log('getLast - should return undefined =>', getLast(nothing));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( thingToFind, toSearch ){
  for(let i=0; i<toSearch.length; i++){
    if(toSearch[i] === thingToFind){
      return true;
    } 
  }
  return false;
} // end find

console.log('find - should say true', find('A', cards ));
console.log('find - should say true', find('joe', people ));
console.log('find - should say false', find('A', nothing ));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
