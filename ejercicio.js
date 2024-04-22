let num1 = parseInt(prompt("Ingresa el primer número"));
let num2 = parseInt(prompt("Ingresa el segundo número"));
let num3 = parseInt(prompt("Ingresa el tercer número"));

let numMax = Math.max(num1, num2, num3);
let numMin = Math.min(num1, num2, num3);

let suma = num1 + num2 + num3;
let numCentro = suma - numMax - numMin;

console.log("Los numeros ordenados de menor a mayor son:", [numMin, numCentro, numMax].join(", "));

console.log("Los numeros ordenados de mayor a menor son:", [numMax, numCentro, numMin].join(", "));

if (num1 === num2 && num2 === num3) {
    console.log("Los 3 números son iguales");
}