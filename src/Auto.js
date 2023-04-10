class Auto{
    constructor(){
        this.orientacion = "N";
        this.posicionActual = [0,0];
    }
    mover(cadenaDeComandos){ 
        for(let i = 0; i < cadenaDeComandos.length; i++){
            if(cadenaDeComandos[i] == "I"){
                this.orientacion = this.girarIzquierda();
            }
            if(cadenaDeComandos[i] == "D"){
                this.orientacion = this.girarDerecha();
            }
            if(cadenaDeComandos[i] == "A"){
                this.avanzar(cadenaDeComandos[i]);
            }
        }
    }
    girarIzquierda(){
        if(this.orientacion == "N"){
            return "O";
        }
        if(this.orientacion == "O"){
            return "S";
        }
        if(this.orientacion == "S"){
            return "E";
        }
        if(this.orientacion == "E"){
            return "N";
        }
    }
    girarDerecha(){
        if(this.orientacion == "N"){
            return "E";
        }
        if(this.orientacion == "O"){
            return "N";
        }
        if(this.orientacion == "S"){
            return "O";
        }
        if(this.orientacion == "E"){
            return "S";
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
    }////


}
export default Auto;