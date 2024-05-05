// FUNCTION
function myFunction() {
    // Code to execute
}

// The Equals Signs in JS: =, ==, ===
// = is used to assign a value to a variable.
// == is used to compare two values for equality, but it converts the types if they are not the same (loose equality).
// === is used to compare two values for equality without converting their types (strict equality).

// If and TERNARY

if (condition) {
    // code to execute if condition is true
}

if (time < 12) {
    console.log("Good morning");
} else {
    console.log("Hi");
}


// expression1 is executed if the condition is true, and expression2 is executed if it's false.
condition ? expression1 : expression2;

console.log(time < 12 ? "Good morning" : "Hi");

// FOR LOOPS
for (initialization; condition; increment) {
    // code to run on each loop
}

// OBJECTS and ARRAYS

// object (dictionary)
let person = {
    name: "John",
    age: 30
};

// array (list)
let numbers = [1, 2, 3, 4, 5];

// ADD DATA 
// Adding to an object
person.job = "Developer";

// Adding to an array
numbers.push(6);

// Retrieving from an object
console.log(person.name);  // Outputs "John"

// Retrieving from an array
console.log(numbers[0]);   // Outputs 1


// API fetch
fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Coding&format=json')
  .then(response => response.json())  // Convert the response to JSON
  .then(data => console.log(data));   // Do something with the data


// Using JS to Create HTML Elements
// Create a new div element
const newDiv = document.createElement('div');

// Add some text content
newDiv.textContent = "Hello, this is a new div!";

// Append the new div to the body of the document
document.body.appendChild(newDiv);
