class Auto{
    constructor(){
        this.orientacion = "N";
        this.posicionActual = [0,0];
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
        }
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
            if(this.orientacion == "N"){
                this.posicionActual[1] = this.posicionActual[1] + 1;
            }
            if(this.orientacion == "O"){
                this.posicionActual[0] = this.posicionActual[0] - 1;
            }
            if(this.orientacion == "S"){
                this.posicionActual[1] = this.posicionActual[1] - 1;
            }
            if(this.orientacion == "E"){
                this.posicionActual[0] = this.posicionActual[0] + 1;
            }
    }
    getPosicionFinal(){
        return this.posicionActual[0]+","+this.posicionActual[1]+this.orientacion;
    }
}
export default Auto;