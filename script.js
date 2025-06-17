// Part 1: Declaring and Invoking Functions
// Step 1: Declare a simple function
function greet(name = "Guest") {
    return "Hello, " + name + "!";
}

// Step 2: Invoke the function
console.log("Part 1 & 5 - greet function:");
console.log(greet("Gorkem"));
console.log(greet());

// Part 2: Working with Parameters and Returning Values
// Step 3: Create a function to add two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log("\nPart 2 - addNumbers function:");
console.log("Sum of 5 and 3:", addNumbers(5, 3));
console.log("Sum of 10 and -2:", addNumbers(10, -2));

// Part 3: Function Scope
// Step 4: Local and Global Scope
let x = 10;
function changeValue() {
    let x = 20;
    console.log("Inside changeValue function, local x:", x);
}

console.log("\nPart 3 - Scope demonstration:");
console.log("Global x before calling changeValue:", x);
changeValue();
console.log("Global x after calling changeValue:", x);

// Part 4: Closures
// Step 5: Create a function with closure
function outerFunction() {
    let count = 0;
    return function() {
        count++;
        return "Count is now: " + count;
    };
}

console.log("\nPart 4 - Closures demonstration (outerFunction):");
const incrementCounter = outerFunction();
console.log(incrementCounter());
console.log(incrementCounter());
console.log(incrementCounter());

const anotherCounter = outerFunction();
console.log("\nPart 4 - Another independent closure (anotherCounter):");
console.log(anotherCounter());
console.log(anotherCounter());

// Experiment with closures with different behavior
function createNameGenerator(initialName = "Guest") {
    let currentName = initialName;

    return function(newName) {
        if (newName) {
            currentName = newName;
            return "Name updated to: " + currentName;
        } else {
            return "Current name: " + currentName;
        }
    };
}

console.log("\nExperiment with Closures - createNameGenerator:");
const myName = createNameGenerator("Ken Block");
console.log(myName());
console.log(myName("Akira Nakai"));
console.log(myName()); // Current name: Akira Nakai

const yourName = createNameGenerator();
console.log(yourName());
console.log(yourName("Peter Jones")); // Name updated to: Peter Jones
