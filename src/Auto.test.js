import Auto from "./Auto.js";

describe("Jugar", () => {
    it("Al enviar I deberia girar una sola vez la izquierda", () => {
        const auto = new Auto();
        auto.girar("I");
        expect(auto.getPosicionFinal()).toEqual("0,0O");
    });
  });