//built in functions
function reverseString(string) {
  /*let c = string.split(""); 
    c = c.reverse();
    c = c.join("");*/
  return string.split("").reverse().join("");
}
console.log(reverseString("Hello"));
//manual
function reverseStringWithoutReverse(string) {
  let n = string.length;
  let a = "";
  for (i = n - 1; i >= 0; i--) {
    a = a + string[i];
  }
  return a;
}
console.log(reverseStringWithoutReverse("Hello"));
