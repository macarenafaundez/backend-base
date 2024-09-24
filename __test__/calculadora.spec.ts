import { describe, test, expect } from "@jest/globals";
import { restar, suma, operar, multiplicar, dividir, potencia, factorial } from "../src/calculadora.js";
import app from "../src/server.js";
import request from "supertest";

describe("Calculadora", () => {

    test("sumar dos numeros", () => {

        let a: any = 100;
        let b: any = 200;
        expect(suma(a, b)).toBe(300);

        a = 10;
        b = "a";
        expect(suma(a, b)).toBeNaN();

        a = undefined;
        b = 1;
        expect(() => { suma(a, b) }).toThrow("No se puede sumar indefinidos");

    });

    test("operar dos numeros", () => {

        let a: any = 100;
        let b: any = 200;
        expect(operar("resta", b, a)).toBe(100);

        a = 10;
        b = "a";
        expect(operar("suma", a, b)).toBeNaN();

        a = undefined;
        b = 1;
        expect(() => { operar("multiplicacion", a, b) }).toThrow("No se puede multiplicar indefinidos");

        a = undefined;
        b = 1;
        expect(() => {operar("potencia", a, b) }).toThrow("No se puede calcular indefinidos");

        a = 1;
        b = 2;
        expect(operar("factorial", b, a)).toBe(1);
        
        a = 10;
        b = 0;
        expect(operar("division", a, b)).toThrow("No se puede dividir por cero");
        
    });

    test("restar dos numeros", () => {

        let a: any = 100;
        let b: any = 200;
        expect(restar(b, a)).toBe(100);

        a = 10;
        b = "a";
        expect(restar(a, b)).toBeNaN();

        a = undefined;
        b = 1;
        expect(() => { restar(a, b) }).toThrow("No se puede restar indefinidos");
    });

    test("multiplicar dos numeros", () => {

        let a: any = 10;
        let b: any = 20;
        expect(multiplicar(a, b)).toBe(200);

        a = 10;
        b = "a";
        expect(multiplicar(a, b)).toBeNaN();

        a = undefined;
        b = 1;
        expect(() => { multiplicar(a, b) }).toThrow("No se puede multiplicar indefinidos");
    });

    test("dividir dos numeros", () => {

        let a: any = 200;
        let b: any = 200;
        expect(dividir(a, b)).toBe(1);

        a = 10;
        b = "a";
        expect(dividir(a, b)).toBeNaN();

        a = undefined;
        b = 100;
        expect(() => { dividir(a, b) }).toThrow("No se puede dividir indefinidos");

    });
    
    test("potencia de dos numeros", () => {

        let a: any = 2;
        let b: any = 2;
        expect(potencia (a, b)).toBe(4);

        a = undefined;
        b = 1;
        expect(() => { potencia (a, b) }).toThrow("No se puede elevar indefinidos");


        a = 10;
        b = "a";
        expect(potencia(a, b)).toBeNaN();

    });

    test("factorial de un número", () => {
        let a: any = 5;
        expect(factorial(a)).toBe(120);
    
        a = 0;
        expect(factorial(a)).toBe(1);
    
        a = "a";
        expect(factorial(a)).toBeNaN();
    
        a = undefined;
        expect(() => { factorial(a) }).toThrow("No se puede calcular el factorial de un indefinido");
    });

    test("test de endpoint /", async () => {
        return await request(app)
            .get("/")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe("Hola mundo al usuario cmd");
            })
    });

    test("test de endpoint operar", async () => {
        return await request(app)
            .get("/operar?a=30&b=30&oper=suma")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe("el resultado de la operacion suma de 30 y 30 es 60");
            })
    });


});