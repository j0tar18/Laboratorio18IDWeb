import multiplicar, { dividir } from "./multiplicacionDivision.js";
import { sumar, restar } from "./sumaResta.js";

const a = 10;
const b = 5;

console.log("\n=== EJERCICIO 09 ===");
console.log(`Suma: ${a} + ${b} = ${sumar(a, b)}`);
console.log(`Resta: ${a} - ${b} = ${restar(a, b)}`);
console.log(`Multiplicación: ${a} * ${b} = ${multiplicar(a, b)}`);

try {
    console.log(`División: ${a} / ${b} = ${dividir(a, b)}`);
} catch (error) {
    console.error(`Error en división: ${error.message}`);
}

console.log("\n--- Probando división por cero ---");
try {
    console.log(`División: ${a} / 0 = ${dividir(a, 0)}`);
} catch (error) {
    console.error(`Error en división: ${error.message}`);
}