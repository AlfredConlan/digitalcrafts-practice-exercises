// let score = -2;

// if (score === 0) {
//     console.log('No points have been scored');
// } else if (score > 0 && score < 10) {
//     console.log('Keep playing');
// } else {
//     console.log('The game is over');
// }

// const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (i = 0; i < numbersArray.length; i++) {
//     if (numbersArray[i] % 2 !== 0) {
//         console.log(numbersArray[i]);
//     }
// }

function FindAndChange(item) {
  if (typeof(item) == "boolean") {
      return !item;
  } else if (typeof(item) == "number") {
      return -item;
  } else if (typeof(item) == "string") {
    item.slice()
  }
}

console.log(FindAndChange(2));
