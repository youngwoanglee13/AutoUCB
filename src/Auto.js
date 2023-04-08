class Auto{
    constructor(){
        this.orientacion = "N";
    }
    girar(cadenaDeComandos){ 
        for(let i = 0; i < cadenaDeComandos.length; i++){
            if(cadenaDeComandos[i] == "I"){
                this.orientacion = this.girarIzquierda();
            }
            if(cadenaDeComandos[i] == "D"){
                this.orientacion = this.girarDerecha();
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
    getPosicionFinal(){
        return "0,0"+this.orientacion;
    }


}
export default Auto;