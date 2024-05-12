

function pizzaSlice(pizza, pizzaEater) {
    const answer = `Each person gets ${pizza / pizzaEater} slices of pizza`
    return answer
}

console.log(pizzaSlice(16, 2));
console.log(pizzaSlice(100, 50));
console.log(pizzaSlice(50, 25));
console.log(pizzaSlice(25, 5));
console.log(pizzaSlice(65, 136));
console.log(pizzaSlice(1000000, 136));


// Example below

// Output: Each person gets 4 slices of pizza; from our 8 slice pizza
//console.log(sharePizza(8, 2)); 
// Output: Each person gets 2.67 slices of pizza; from our 8 slice pizza
//  console.log(sharePizza(8, 3)); 
// Output: Each person gets 1.05 slices of pizza; from our 21 slice pizza
//  console.log(sharePizza(21, 20));
// Output:Each person gets 3.33 slices of pizza; from our 10 slice pizza
// console.log(sharePizza(10, 3)); 