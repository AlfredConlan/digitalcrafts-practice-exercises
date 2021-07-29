// 2)	Write a function named "printTable(n)" to print multiplication
// table up to 10 for the given number where 'n' is the number for which
// the table is printed.

// Test cases:

// No	Input	Expected Output
// 1	3		3 x 1 = 3
// 			3 x 2 = 6
// 			3 x 3 = 9
// 			3 x 4 = 12
// 			3 x 5 = 15
// 			3 x 6 = 18
// 			3 x 7 = 21
// 			3 x 8 = 24
// 			3 x 9 = 27
// 			3 x 10 = 30

// Modify the above function to accept 2 parameters like "printTable(n,m)"
//where 'n' is the number for which the table is printed,
// and 'm' is the number up to which the table needs to be printed.

const printTable = (n, m) => {
  // keep track of solution
  let solution = 1;

  // loop through and print each solution
  for (let i = 1; i <= m; i++) {
    solution = i * n;
    console.log(n + " x " + i + " = " + solution);
  }
};

printTable(2, 15);
