import Auto from "./Auto.js";

describe("Jugar", () => {
    it("Al enviar I deberia girar una sola vez la izquierda", () => {
        const auto = new Auto();
        auto.mover("I");
        expect(auto.getPosicionFinal()).toEqual("0,0O");
    });
    it("Al enviar IIIII deberia girar seis veces a la izquierda", () => {
        const auto = new Auto();
        auto.mover("IIIIII");
        expect(auto.getPosicionFinal()).toEqual("0,0S");
    });
    it("Al enviar D deberia girar una sola vez la derecha", () => {
        const auto = new Auto();
        auto.mover("D");
        expect(auto.getPosicionFinal()).toEqual("0,0E");
    });
    it("Al enviar DDDD deberia girar cuatro veces a la derecha", () => {
        const auto = new Auto();
        auto.mover("DDDD");
        expect(auto.getPosicionFinal()).toEqual("0,0N");
    });
    it("Al enviar A deberia avanzar una vez", () => {
        const auto = new Auto();
        auto.mover("A");
        expect(auto.getPosicionFinal()).toEqual("0,1N");
    });
    it("Al enviar AAA deberia avanzar tres veces", () => {
        const auto = new Auto();
        auto.mover("AAA");
        expect(auto.getPosicionFinal()).toEqual("0,3N");
    });
  });