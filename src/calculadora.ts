function operar(operacion: string, a: number, b: number) {
    if (operacion === 'suma') {
        return suma(a, b);
    } else if (operacion === 'resta') {
        return restar(a, b);
    } else if (operacion === 'potencia') {
        return potencia (a, b);
    } else if (operacion === 'multiplicacion') {
        return multiplicar (a, b);
    } else if (operacion === 'factorial') {
        return factorial (a);
    } else if (operacion === 'division') {
        return dividir (a, b);
    }
}

function suma(a: number, b: number) {

    if (a === undefined || b === undefined) {
        console.log("retornando throw")
        throw new Error("No se puede sumar indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a + b;
}

function restar(a: number, b: number) {
    if (a === undefined || b === undefined) {
        console.log("retornando throw")
        throw new Error("No se puede restar indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a - b;
}

function multiplicar(a: number, b: number) {
    if (a === undefined || b === undefined) {
        console.log("retornando throw")
        throw new Error("No se puede multiplicar indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a * b;
}

function dividir(a: number, b: number) {

    if (a === undefined || b === undefined) {
        console.log("retornando throw");
        throw new Error("No se puede dividir indefinidos");
    }

    if (b === 0) {
        console.log("retornando throw");
        throw new Error("No se puede dividir por cero");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a / b;
}
    
function potencia(a: number, b: number) {

    if (a === undefined || b === undefined) {
        console.log("retornando throw")
        throw new Error("No se puede elevar indefinidos");
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }

    return a ** b;
}

    function factorial(a: number) {
        if (a === undefined) {
            console.log("retornando throw");
            throw new Error("No se puede calcular el factorial de un indefinido");
        }
    
        if (typeof a !== 'number' || a < 0 || !Number.isInteger(a)) {
            return NaN;
        }
    
        let resultado = 1;
    
        for (let i = 2; i <= a; i++) {
            resultado *= i;
        }
    
        return resultado;
}
    

export { suma, operar, restar, multiplicar, dividir, potencia, factorial };