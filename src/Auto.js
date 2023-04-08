class Auto{
    constructor(){
        this.orientacion = "N";
    }
    girar(cadena){ 
        for(let i = 0; i < cadena.length; i++){
            if(cadena[i] == "I"){
                this.orientacion = this.girarIzquierda();
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
    getPosicionFinal(){
        return "0,0"+this.orientacion;
    }


}
export default Auto;