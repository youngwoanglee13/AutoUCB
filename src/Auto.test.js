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
    it("deberia poder elejir la posicion inicial", () => {
        const auto = new Auto();
        auto.setPosicionInicial(1,2,"N");
        expect(auto.getPosicionFinal()).toEqual("1,2N");
    });
    it("DEBERIA PODER DEFINIR EL TAMAÑO DEL TABLERO", () => {
        const auto = new Auto();
        auto.setDefinirTablero(20,20);
        expect(auto.getTablero()).toEqual("20,20");
    });
    it("Al hacer un movimiento fuera del tablero no se toma en cuanta", () => {
        const auto = new Auto();
        auto.setDefinirTablero(2,2);
        auto.setComandos("AAAAAA");
        expect(auto.getPosicionFinal()).toEqual("0,2N");
    });
    it("Al enviar 10,10/2,2N/AAA deberia tomar todos los comandos ", () => {
    const auto = new Auto();
    auto.setDefinirTablero(2,2);
    auto.setComandos("10,10/1,1N/AADAADADAAAAAA");
    expect(auto.getPosicionFinal()).toEqual("0,2O");
    });
    it("Al enviar   J deberia hacer jump una vez", () => {
    const auto = new Auto();
    auto.mover("J");
    expect(auto.getPosicionFinal()).toEqual("0,2N");
    });
  });