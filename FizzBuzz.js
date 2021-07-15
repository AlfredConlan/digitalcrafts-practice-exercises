// create a function that iterates 1 through 100
// If the number is divisible by 3 log 'Fizz'
// If the number is divisible by 5 log 'Buzz'
// If the number is divisible by 3 and 5 log 'FizzBuzz'
// Else log the number

let fizzBuzz = () => {
    for (i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    } 
}

fizzBuzz();