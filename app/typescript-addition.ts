var findSum = function(firstValue: number, secondValue: number) {
  var sum: number = firstValue + secondValue;
  alert('The sum of your two numbers is: '+sum);
}

var firstNumber = parseInt(prompt('please enter a number'));
var secondNumber = parseInt(prompt('enter another number'));
findSum(firstNumber, secondNumber);


// the code below was original code
// var firstNumber: number = parseInt(prompt('please enter a number'));
// var secondNumber: number = parseInt(prompt('enter another number'));
// var sum: number = firstNumber + secondNumber;
// alert('the sum of your two numbers is: '+sum);
