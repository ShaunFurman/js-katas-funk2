//KATAs Functions 2------------>

// Kata 1--- Write a function named "add" which takes two arguments (as input variables) and returns their sum.



function add(x, y) {
    return x + y 

}  let sum = add(2, 4)
console.log(sum)







//Kata 2--- Write a function named "multiply" which takes two arguments (as input variables) and returns their product.

// You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will use a FOR loop which calls your add function from the first kata.

// For example, calling multiply(6, 4) should return a result of 24, which could be expressed by adding 6 to itself 4 times:    6 + 6 + 6 + 6 = 24


function multiply(x, y) {

    for (let count = 0; count <= y; count +1) 
      return x + x
}
let newCount = count +1
console.log(newCount)






// //Kata 3 Power--Write a function named "power" which takes two arguments ( x and n) and returns the the result of raising x to the nth power.

// You may not use built-in math operators or functions (such as the * multiplication operator), or the ** operator for power/exponentiation). Instead, you will re-use functions you wrote in earlier katas to write this function.

// // For example, if we called power(2, 8), we should return 256 by multiplying 2 by itself 8 times:

function power(x, n) {
    
    for (let i = 0; i<= n; i+=1)
        return x**n 
let newPower = (2, 4)
}  
console.log(Power)
 


            
// //Kata 4 Factorial--Write a function named "factorial" which takes a single argument and returns the factorial of that value.

// You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will re-use functions you wrote in earlier katas to write this function.

// A factorial multiplies a given number by every number below it. For example, "5 factorial" (usually symbolized by 5! in Mathematics) would be:
 
function factorial(x) {
    for (let i= 4;i > 0; i --)
    return x *(x - 1)
}
console.log(factorial(4))







// BONUS: Write a function named "Fibonacci" which takes an argument n and returns the nth Fibonacci number.

// You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will use functions you wrote in earlier katas to write this function.

// For example, calling fibonacci(8) should return a result of 13. The fibonnaci sequence begins: