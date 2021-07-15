// Have the function BracketMatcher(str) take the str parameter being passed and return 1 if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" the the output should be 0 because the brackets do not correctly match up. Only "(" and ")" will be used as brackets. If str contains no brackets return 1.
// Examples
Input: "(coder)(byte))";
Output: 0;
Input: "(c(oder)) b(yte)";
Output: 1;
// check to see if string includes a matching set of brackets "(" and ")"
//If it does return 1 and if not return 0
// create a count of left and right brackets and check if they're equal to eachother

function BracketMatcher(str) {
  let splitString = str.split("");
  let left = 0;
  let right = 0;
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === "(") {
      left++;
    } else if (splitString[i] === ")") {
      right++;
    }
  }
  if (left === right) {
    return 1;
  } else {
    return 0;
  }
}

function BracketMatcher2(str) {
  let splitString = str.split("");
  let left = 0;
  let right = 0;
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i].includes("(")) {
      left++;
    } else if (splitString[i].includes(")")) {
      right++;
    }
  }
  if (left === right) {
    return 1;
  } else {
    return 0;
  }
}

function BracketMatcherSort(str) {
  let splitString = str.split("").sort();
  let left = 0;
  let right = 0;
  let i = 0;
  while (splitString[i] === "(" || splitString[i] === ")") {
    if (splitString[i] === "(") {
      left++;
      i++;
    } else if (splitString[i] === ")") {
      right++;
      i++;
    }
  }
  if (left === right) {
    return 1;
  } else {
    return 0;
  }
}

// console.log(BracketMatcher("(test))"));
// console.log(BracketMatcher2("test"));
console.log(BracketMatcherSort("((testsdfhsjkfhjkjshf)))"));
