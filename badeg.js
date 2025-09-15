// BAD CODE EXAMPLE - Violates all 20 standards

var A = 10 // (1) using var instead of const/let, (10) missing semicolon
if (A == "10") { // (2) using == instead of ===
    b = "Hello"+" "+"World"
  }  // (3) bad variable name, (11) string concatenation
function doStuff(){console.log("Doing something");}  // (4) function not reusable, no purpose
// (5) No comments for complex logic

        let veryLongVariableNameThatMakesCodeHardToReadAndExceedsTheMaximumLineLengthLimitWhichShouldBe100Characters = "oops"; // (6) bad indent, (7) line > 100 chars

FunctionName = function(X){return X+1} // (8) not camelCase, (9) constant not UPPER_CASE

try {
  throw "Some error" // (12) bad error handling, (13) no meaningful error object
} catch(e) {
  console.log("bad error") // poor logging
}

// (14) Not validating API response
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  return data[0].id
}

// (15) Wrong return format for n8n
return {foo:"bar"}  

// (16) Mutating input directly
items[0].json.name = "changed"

// (17) Function longer than 30 lines with random logic
function giantMessyFunction() {
  for (let i=0;i<50;i++){
    console.log(i)
  }
}

// (18) No helper functions reused, everything inline
const result = items.map(item => {
  return {name:item.json.name.toUpperCase()}
})

// (19) ESLint not used, so all errors unchecked
// (20) No PR lint check pipeline configured
