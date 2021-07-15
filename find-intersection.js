/* 
Have the function FindIntersection(strArr) 
read the array of strings stored in strArr which will contain 2 elements: 
the first element will represent a list of comma-separated numbers sorted in \
ascending order, the second element will represent a second list of comma-separated 
numbers (also sorted). Your goal is to return a comma-separated string containing the 
numbers that occur in elements of strArr in sorted order. If there is no intersection, 
return the string false. 

Examples

Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15, 10000000 "] 
Output: 1,4,13

Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"] 
Output: 1,9,10

*/

// Create function
function FindIntersection(strArr) {
  // Read first string
  // Covert string into an array of numbers
  let array1 = strArr[0].split(",");
  // Read the second string
  // Covert string in an array
  let array2 = strArr[1].split(",");
  // Create an object from the first string of numbers that exist
  let object1 = {};
  for (let i = 0; i < array1.length; i++) {
    object1[array1[i]] = true;
  }

  let intersection = []; // Return value for the function
  // Compare 2nd_array to 1st_string_object
  for (let j = 0; j < array2.length; j++) {
    if (object1[array2[j]] == true) {
      intersection.push(array2[j]);
    }
  }
  console.log(intersection);
}

FindIntersection(["1, 18, 17, 51, 3, 4, 9, 1, 3", "1, 4, 9, 10"]);
