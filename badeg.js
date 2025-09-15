// BAD CODE EXAMPLE - Violates all 20 standards

var A = 10 
if (A == "10") { 
    b = "Hello"+" "+"World"
  }  
function doStuff(){console.log("Doing something");} 
        let veryLongVariableNameThatMakesCodeHardToReadAndExceedsTheMaximumLineLengthLimitWhichShouldBe100Characters = "oops"; // (6) bad indent, (7) line > 100 chars

FunctionName = function(X){return X+1} 

try {
  throw "Some error"
} catch(e) {
  console.log("bad error")
}


async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  return data[0].id
}


return {foo:"bar"}  


items[0].json.name = "changed"


function giantMessyFunction() {
  for (let i=0;i<50;i++){
    console.log(i)
  }
}


const result = items.map(item => {
  return {name:item.json.name.toUpperCase()}
})


