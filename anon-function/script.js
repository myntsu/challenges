let firstVariable = prompt("Type in any first number:");
let secondVariable = prompt("Type in any second number:");

let divide = function(a,b) {
    let result = parseInt(a) / parseInt(b);
    return result;
}

document.write("The result is " + divide(firstVariable, secondVariable));