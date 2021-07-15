let students = ['Bill', 'Rose', 'Steve']

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

console.log('');

for (i = 0; i < students.length; i++) {
    console.log(students[i]);
}

console.log('');

let x = 0;

while (x < students.length) {
    console.log(students[x]);
    x++;
}

console.log('');

for (i = students.length - 1; i >= 0; i--) {
    console.log(students[i]);
}