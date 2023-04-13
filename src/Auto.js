class Auto{
    constructor() {
        this.orientacion = "N";
        this.posicionActual = [0,0];
        this.posicionInicial = "0,0N";
        this.ancho = 100;
        this.alto = 100;
        this.movimientosEjecutados ="";
    }
    setComandos(cadenaDeComandos){
        cadenaDeComandos = cadenaDeComandos.split("/");
        if(cadenaDeComandos.length == 1){
            this.mover(cadenaDeComandos[0]);
        }else{
            this.movimientosEjecutados ="";
            var tablero = cadenaDeComandos[0].split(",");
            var posicionInicial = cadenaDeComandos[1].substring(0,cadenaDeComandos[1].length-1).split(",");
            var orientacion = cadenaDeComandos[1][cadenaDeComandos[1].length-1].toUpperCase();
            this.setDefinirTablero(tablero[0],tablero[1]);
            this.setPosicionInicial(parseInt(posicionInicial[0]),parseInt(posicionInicial[1]),orientacion);
            this.mover(cadenaDeComandos[2].toUpperCase());
        }
        
    }
    mover(cadenaDeComandos){ 
        for(let i = 0; i < cadenaDeComandos.length; i++){
            if(cadenaDeComandos[i] == "I"){
                this.orientacion = this.girar("I");
            }
            if(cadenaDeComandos[i] == "D"){
                this.orientacion = this.girar("D");
            }
            if(cadenaDeComandos[i] == "A"){
                this.avanzar(cadenaDeComandos[i]);
            }
            this.movimientosEjecutados=this.movimientosEjecutados+cadenaDeComandos[i];
        }
    }
    getMovimientosEjecutados()
    {
        return this.movimientosEjecutados;
    }
    girar(sentido){
        if(this.orientacion == 'O' && sentido == "D" || this.orientacion == 'E' && sentido == "I"){
            return "N";
        }
        if(this.orientacion == 'N' && sentido == "D" || this.orientacion == 'S' && sentido == "I"){
            return "E";
        }
        if(this.orientacion == 'E' && sentido == "D" || this.orientacion == 'O' && sentido == "I"){
            return "S";
        }
        if(this.orientacion == 'S' && sentido == "D" || this.orientacion == 'N' && sentido == "I"){
            return "O";
        }
    }
    avanzar(cadenaDeComandos){
            if(this.orientacion == "N" && this.posicionActual[1] < this.alto){
                this.posicionActual[1] = this.posicionActual[1] + 1;
            }
            if(this.orientacion == "O" && this.posicionActual[0] > 0){
                this.posicionActual[0] = this.posicionActual[0] - 1;
            }
            if(this.orientacion == "S" && this.posicionActual[1] > 0){
                this.posicionActual[1] = this.posicionActual[1] - 1;
            }
            if(this.orientacion == "E" && this.posicionActual[0] < this.ancho){
                this.posicionActual[0] = this.posicionActual[0] + 1;
            }
    }
    getPosicionFinal(){
        return this.posicionActual[0]+","+this.posicionActual[1]+this.orientacion;
    }
    getPosicionInicial(){
        return this.posicionInicial;
    }
    setPosicionInicial(posx, posy,posorientacion) {
        this.posicionInicial=posx+","+posy+posorientacion;
        this.posicionActual = [posx,posy];
        this.orientacion=posorientacion;
    }
    setDefinirTablero(tamAncho,tamAlto) {
        this.ancho = tamAncho;
        this.alto = tamAlto;
    }
    getTablero(){
        return this.ancho + "," + this.alto;
    }
}
export default Auto;